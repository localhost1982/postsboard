import React from 'react';
import Post from '../Post/Post';

class PostsContainer extends React.Component {

  toggleFavorite = (id) => {
    this.props.onUpdateList(id);
  };

  onPostSelect = (id) => {
    this.props.onShowSelectedPost(id);
  };

  render() {
    const items = this.props.data;
    if (this.props.isLoaded === true) {
      return (
        <div className={ this.props.cssClass }>
          { items.map((item) => (
            <Post
              post={ item }
              key={ item.id }
              onToggleFavorite={ this.toggleFavorite }
              onShowPost={ this.onPostSelect }
            />
          )) }
        </div>
      );
    } else {
      return (
        <div className={ 'posts-container' }>
          loading...
        </div>
      );
    }
  }
}

export default PostsContainer;
