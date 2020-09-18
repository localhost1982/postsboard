import React from 'react';
import FavoritesButton from '../FavoritesButton/FavoritesButton';

class Post extends React.Component {

  toggleFavorite = () => {
    this.props.onToggleFavorite(this.props.post.id);
  };

  showCurrentPost = () => {
    this.props.onShowPost(this.props.post.id);
  };

  render() {
    return (
      <div className={ 'post' } onClick={ this.showCurrentPost }>
        <div className={ 'h1-small' }>{ this.props.post.title }</div>
        <p>{ this.props.post.body }</p>
        <FavoritesButton
          selected={ this.props.post.isFavorite }
          onFavoriteClick={ this.toggleFavorite }
        />
      </div>
    );
  }
}

export default Post;
