import React from 'react';
import { Post } from '../Post/Post';
import './post-container.css'

export const PostsContainer = ({ items, onUpdateList, onShowSelectedPost, cssClass, isLoaded }) => (
  isLoaded ? <div className={ cssClass }>
             { items.map((item) => (
               <Post
                 post={ item }
                 key={ item.id }
                 onToggleFavorite={ (e) => onUpdateList(e, item.id) }
                 onShowPost={ () => onShowSelectedPost(item.id) }
               />
             )) }
           </div>
           : <div className={ 'posts-container' }>loading...</div>
);
