import React from 'react';
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { SelectedPost } from './components/SelectedPost/SelectedPost';
import './App.css';
import { Modal } from "./components/Modal/Modal";
import { Search } from "./components/Search/Search";

class App extends React.Component {

  state = {
    isLoaded: false,
    items: [],
    selectedId: null,
    selectedPost: null,
    showModal: false,
    searchString: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          console.log(error);
        })
      .catch((error) => {
        console.log(error);
      });
  }

  updateLists = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item) => item.id === id ? { ...item, isFavorite: !item.isFavorite } : item),
      };
    });
  };

  showPost = (id) => {
    document.body.classList.add('body-fixed');
    this.setState({ selectedId: id, showModal: true });
  };

  isLoaded = () => {
    return this.state.isLoaded;
  };

  isShowModal = () => {
    return this.state.showModal;
  };

  handleClose = () => {
    document.body.classList.remove('body-fixed');
    this.setState({
      showModal: !this.state.showModal
    });
  };

  getItems = (isFavorite, searchString) => {
    const regEx = new RegExp(searchString.length >= 3 ? searchString : '', 'gmi')
    return this.state.items.filter((item) => {
      return !!item.isFavorite === isFavorite &&
        ((regEx.test(item.title)) || (regEx.test(item.body.replace(/(?:\r\n|\r|\n)/g, ' '))));
    });
  };

  getSearchString = () => {
    return this.state.searchString;
  };

  searchPosts = (event) => {
    this.setState({ searchString: event.target.value });
  };

  getSelectedPost = () => {
    return this.state.items.filter((item) => item.id === this.state.selectedId).shift();
  };

  render() {
    return (
      <div className="App">
        <Search
          value={ this.getSearchString() }
          onChange={ this.searchPosts }
        />
        <div className="flex-container">
          { this.isShowModal() &&
          <Modal
            onClose={ this.handleClose }
            closeOnBackdropClick={ true }
          >
            <SelectedPost
              post={ this.getSelectedPost() }
            />
          </Modal>
          }
          <div className="main-content-container">
            <PostsContainer
              isLoaded={ this.isLoaded() }
              items={ this.getItems(false, this.getSearchString()) }
              cssClass={ 'posts-container' }
              onUpdateList={ this.updateLists }
              onShowSelectedPost={ this.showPost }
              highLiteText={ this.getSearchString() }
            />
          </div>
          <PostsContainer
            isLoaded={ this.isLoaded() }
            items={ this.getItems(true, this.getSearchString()) }
            cssClass={ 'favorite-posts-container' }
            onUpdateList={ this.updateLists }
            onShowSelectedPost={ this.showPost }
            highLiteText={ this.getSearchString() }
          />
        </div>
      </div>
    );
  }
}

export default App;
