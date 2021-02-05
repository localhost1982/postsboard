import React from 'react';
import Post from '../Post/Post';
import './favorites-post-container.css';
import { Loader } from "../Loader";
import { connect } from "react-redux";

const FavoritesPostsContainer = ({ posts, isLoading, searchString }) => {
  if (searchString.length >= 3) {
    const regEx = new RegExp(searchString, 'gmi');
    posts = posts.filter(post => ((regEx.test(post.title)) || (regEx.test(post.body.replace(/(?:\r\n|\r|\n)/g, ' ')))))
  }
  return (
    !isLoading ?
      <div className='posts-container'>
        { posts.length && posts.filter(post => post.isFavorite === true).length ?
          posts.filter(post => post.isFavorite === true).map((post) => (
            <Post
              post={ post }
              key={ post.id }
            />
          )) :
          <div className="not-found-message">
            There are no favorites posts
          </div>
        }
      </div>
      :
      <Loader/>
  )
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    isLoading: state.app.isLoading,
    searchString: state.posts.searchString,
  }
}

export default connect(mapStateToProps, null)(FavoritesPostsContainer);
