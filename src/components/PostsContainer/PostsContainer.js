import React from 'react';
import { Post } from '../Post/Post';
import './post-container.css';

export const PostsContainer = ({ items, onUpdateList, onShowSelectedPost, cssClass, isLoaded, highLiteText }) => (
  isLoaded ?
    <div className={ cssClass }>
        { items.length ?
          items.map((item) => (
            <Post
              post={ item }
              key={ item.id }
              onToggleFavorite={ (e) => onUpdateList(e, item.id) }
              onShowPost={ () => onShowSelectedPost(item.id) }
              highLiteText={ highLiteText }
            />
          ))
          :
          <div className="not-found-message">
              Posts not found
          </div>
        }
    </div>
    : <div className={ cssClass }>loading...</div>
);
