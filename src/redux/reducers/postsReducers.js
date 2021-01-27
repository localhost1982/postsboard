import { GET_FAVORITES_POSTS, GET_POSTS, HIDE_MODAL, SEARCH_POSTS, SHOW_MODAL, TOGGLE_FAVORITES } from "../actionTypes";

const initialState = {
  posts: [],
  favoritesPosts: [],
  showSelectedPost: false,
  selectedPost: {},
  searchString: '',
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: state.posts.concat(action.payload) };

    case GET_FAVORITES_POSTS:
      return { ...state };

    case TOGGLE_FAVORITES:
      const posts = state.posts.slice().map(post => post.id === action.payload.id ?
        {
          ...post,
          isFavorite: !post.isFavorite
        } :
        post
      );

      return { ...state, posts: posts };

    case SHOW_MODAL:
      return { ...state, showSelectedPost: true, selectedPost: action.payload };

    case HIDE_MODAL:
      return { ...state, showSelectedPost: false, selectedPost: action.payload };

    case SEARCH_POSTS:
      return { ...state, searchString: action.payload }

    default:
      return state;

  }
}
