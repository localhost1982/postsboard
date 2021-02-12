import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../Post/Post';
import './favorites-post-container.css';
import { Loader } from '../index';

export const FavoritesPostsContainer = () => {
  let posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.app.isLoading);
  const searchString = useSelector((state) => state.posts.searchString);

  if (searchString.length >= 3) {
    const regEx = new RegExp(searchString, 'gmi');
    posts = posts.filter((post) => ((regEx.test(post.title)) || (regEx.test(post.body.replace(/(?:\r\n|\r|\n)/g, ' ')))));
  }
  return (
    !isLoading
      ? (
        <div className="posts-container">
          {posts.length && posts.filter((post) => post.isFavorite === true).length
            ? posts.filter((post) => post.isFavorite === true).map((post) => (
              <Post
                post={post}
                key={post.id}
              />
            )) : (
              <div className="not-found-message">
                There are no favorites posts
              </div>
            )}
        </div>
      )
      : <Loader />
  );
};
