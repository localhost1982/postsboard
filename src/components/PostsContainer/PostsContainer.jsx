import React from 'react';
import { useSelector } from 'react-redux';

import { Loader, Post } from 'components';
import { getFilteredPosts } from 'helpers';

import './post-container.css';

export const PostsContainer = () => {
  let posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.app.isLoading);
  const searchString = useSelector((state) => state.posts.searchString);

  posts = getFilteredPosts(searchString, posts);

  return (
    !isLoading
      ? (
        <div className="posts-container">
          {posts.length && posts.filter((post) => post.isFavorite !== true).length
            ? posts.filter((post) => post.isFavorite !== true).map((post) => (
              <Post
                post={post}
                key={post.id}
              />
            ))
            : (
              <div className="not-found-message">
                There are no regular posts
              </div>
            )}
        </div>
      )
      : <Loader />
  );
};
