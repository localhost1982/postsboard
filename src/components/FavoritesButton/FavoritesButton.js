import React from 'react';

class FavoritesButton extends React.Component {

  changeFavoriteState = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onFavoriteClick();
  };

  render() {
    const favMark = this.props.selected ? '\u2605' : '\u2606';
    return (
      <div className={ `fav-btn` } onClick={ this.changeFavoriteState }>
        { favMark }
      </div>
    );
  }
}

export default FavoritesButton;
