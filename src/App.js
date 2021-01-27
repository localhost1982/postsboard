/**
 * import core components
 */
import React from 'react';

/**
 * import custom components
 */
import {
  Header,
  Menu,
  Modal,
  PostsContainer,
  Search,
  SelectedPost
} from "./components";


/**
 * import styles
 */
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <BrowserRouter>
          <div className="App">
            <Header>
              <Menu/>
              <Search
                value={ this.getSearchString() }
                onChange={ this.searchPosts }
              />
            </Header>
            <div className="main-content-container">
              <Switch>
                <Route path="/" exact>
                  <PostsContainer
                    isLoaded={ this.isLoaded() }
                    items={ this.getItems(false, this.getSearchString()) }
                    cssClass={ 'posts-container' }
                    onUpdateList={ this.updateLists }
                    onShowSelectedPost={ this.showPost }
                    highLiteText={ this.getSearchString() }
                  />
                </Route>
                <Route path="/favorites" exact>
                  <PostsContainer
                    isLoaded={ this.isLoaded() }
                    items={ this.getItems(true, this.getSearchString()) }
                    cssClass={ 'posts-container' }
                    onUpdateList={ this.updateLists }
                    onShowSelectedPost={ this.showPost }
                    highLiteText={ this.getSearchString() }
                  />
                </Route>
              </Switch>
            </div>
            { this.isShowModal() &&
            <div className="flex-container">
              <Modal
                onClose={ this.handleClose }
                closeOnBackdropClick={ true }
              >
                <SelectedPost
                  post={ this.getSelectedPost() }
                />
              </Modal>
            </div>
            }
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
