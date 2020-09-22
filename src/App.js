import React from 'react';
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { SelectedPost } from './components/SelectedPost/SelectedPost';
import './App.css';

class App extends React.Component {

  state = {
    isLoaded: false,
    items: [],
    selectedId: undefined,
    selectedPost: undefined,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          console.log(error);
        });
  }

  updateLists = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item) => item.id === id ? { ...item, isFavorite: !item.isFavorite } : item),
      };
    });
  };

  showPost = (id) => {
    this.setState({ selectedId: id });
  };

  isLoaded = () => {
    return this.state.isLoaded;
  };

  getItems = (isFavorite) => {
    return this.state.items.filter((item) => !!item.isFavorite === isFavorite);
  };

  getSelectedPost = () => {
    return this.state.items.filter((item) => item.id === this.state.selectedId).shift();
  };

  render() {
    return (
      <div className="App">
        <div className="main-content-container">
          <PostsContainer
            isLoaded={ this.isLoaded() }
            items={ this.getItems(false) }
            cssClass={ 'posts-container' }
            onUpdateList={ this.updateLists }
            onShowSelectedPost={ this.showPost }
          />
          <SelectedPost
            post={ this.getSelectedPost() }
          />
        </div>
        <PostsContainer isLoaded={ this.isLoaded() }
                        items={ this.getItems(true) }
                        cssClass={ 'favorite-posts-container' }
                        onUpdateList={ this.updateLists }
                        onShowSelectedPost={ this.showPost }
        />
      </div>
    );
  }
}

export default App;
