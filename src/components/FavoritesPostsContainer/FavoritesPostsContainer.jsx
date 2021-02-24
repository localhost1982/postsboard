import React from 'react';
import { useSelector } from 'react-redux';

import { Loader, Post } from 'components';
import { searchPostsBySubstring } from 'helpers';

import './favorites-post-container.css';

export const FavoritesPostsContainer = () => {
  let posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.app.isLoading);
  const searchString = useSelector((state) => state.posts.searchString);

  posts = searchPostsBySubstring(searchString, posts);

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
