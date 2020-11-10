import React from 'react';
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { SelectedPost } from './components/SelectedPost/SelectedPost';
import './App.css';
import { Modal } from "./components/Modal/Modal";

class App extends React.Component {

  state = {
    isLoaded: false,
    items: [],
    selectedId: null,
    selectedPost: null,
    showModal: false
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
        items: prevState.items.map((item) => item.id === id ? {...item, isFavorite: !item.isFavorite} : item),
      };
    });
  };

  showPost = (id) => {
    this.setState({selectedId: id, showModal: true});
  };

  isLoaded = () => {
    return this.state.isLoaded;
  };

  isShowModal = () => {
    return this.state.showModal;
  };

  onClose = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  getItems = (isFavorite) => {
    return this.state.items.filter((item) => !!item.isFavorite === isFavorite);
  };

  getSelectedPost = () => {
    return this.state.items.filter((item) => item.id === this.state.selectedId).shift();
  };

  render() {
    return (
      <div className="App">
        <Modal
          onClose={ this.onClose }
          closeOnBackdropClick={ this.onClose }
          showModal={ this.isShowModal() }>
          <SelectedPost
            post={ this.getSelectedPost() }
          />
        </Modal>
        <div className="main-content-container">
          <PostsContainer
            isLoaded={ this.isLoaded() }
            items={ this.getItems(false) }
            cssClass={ 'posts-container' }
            onUpdateList={ this.updateLists }
            onShowSelectedPost={ this.showPost }
          />
        </div>
        <PostsContainer isLoaded={ this.isLoaded() }
                        items={ this.getItems(true) }
                        cssClass={ 'favorite-posts-container' }
                        onUpdateList={ this.updateLists }
                        onShowSelectedPost={ this.showPost }
        />
      </div>
    );
  }
}

export default App;
