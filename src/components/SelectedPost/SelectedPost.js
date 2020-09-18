import React from 'react';

class SelectedPost extends React.Component {

  render() {
    const currentPost = this.props.post.shift();
    let title = '';
    let body = '';
    if (undefined !== currentPost) {
      title = currentPost.title;
      body = currentPost.body;
    }
    return (
      <div className={ 'selected-post' }>
        <h1>{ title }</h1>
        <p>{ body }</p>
      </div>
    );
  }
}

export default SelectedPost;
