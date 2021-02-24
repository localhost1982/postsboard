/**
 * import core components
 */
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/**
 * import custom components
 */
import {
  Header, Menu, Search, SelectedPost,
} from './components';
import { Modal } from './components/Modal/Modal';

/**
 * import Router
 */
import { Router } from './routes/Router';

/**
 * import Redux actions
 */
import { fetchPosts } from './store/actions';

/**
 * import styles
 */
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const showSelectedPost = useSelector((state) => state.posts.showSelectedPost);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Menu />
          <Search />
        </Header>
        <div className="main-content-container">
          <Router />
        </div>
        {showSelectedPost
        && (
          <div className="flex-container">
            <Modal>
              <SelectedPost />
            </Modal>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};
