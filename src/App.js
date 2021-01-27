/**
 * import core components
 */
import React from 'react';

/**
 * import custom components
 */
import { Header, Menu, Search, SelectedPost } from "./components";
import Modal from './components/Modal/Modal';


/**
 * import styles
 */
import './App.css';
import { BrowserRouter, } from "react-router-dom";
import { Router } from "./routes/Router";
import { connect } from "react-redux";
import { fetchPosts, hideModal, searchPosts } from "./redux/actions";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  getSearchString = () => {
    return this.props.searchString;
  };

  searchPosts = (event) => {
    this.props.searchPosts(event.target.value);
  };

  hideModal = () => {
    this.props.hideModal();
  };

  getSelectedPost = () => {
    return this.props.selectedPost;
  }

  isShowModal = () => {
    return this.props.showSelectedPost;
  }

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
            <Router/>
          </div>
          { this.isShowModal() &&
          <div className="flex-container">
            <Modal
              onClose={ this.hideModal }
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    searchPosts: (text) => dispatch(searchPosts(text)),
    hideModal,
  }
}

const mapStateToProps = state => {
  return {
    selectedPost: state.posts.selectedPost,
    showSelectedPost: state.posts.showSelectedPost,
    searchString: state.posts.searchString,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
