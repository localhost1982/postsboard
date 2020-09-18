import React from 'react';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SelectedPost from './components/SelectedPost/SelectedPost';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      selectedId: null,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          const items = result.map((res) => {
            res.isFavorite = false;
            return res;
          });
          this.setState({
            isLoaded: true,
            items: items,
          });
        },
        (error) => {
          console.log(error);
        });
  }

  updateLists = (id) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        }
        return item;
      });
      return {
        items: updatedItems,
      };
    });
  };

  showPost = (id) => {
    this.setState(() => {
      return { selectedId: id };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="main-content-container">
          <PostsContainer
            isLoaded={ this.state.isLoaded }
            data={ this.state.items.filter((item) => item.isFavorite === false) }
            cssClass={ 'posts-container' }
            onUpdateList={ this.updateLists }
            onShowSelectedPost={ this.showPost }
          />
          <SelectedPost
            post={ this.state.items.filter((item) => item.id === this.state.selectedId) }
          />
        </div>
        <PostsContainer isLoaded={ this.state.isLoaded }
                        data={ this.state.items.filter((item) => item.isFavorite === true) }
                        cssClass={ 'favorite-posts-container' }
                        onUpdateList={ this.updateLists }
                        onShowSelectedPost={ this.showPost }
        />
      </div>
    );
  }
}

export default App;
