import {
  GET_POSTS,
  HIDE_LOADER,
  HIDE_MODAL,
  SEARCH_POSTS,
  SHOW_LOADER,
  SHOW_MODAL,
  TOGGLE_FAVORITES
} from "./actionTypes";

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      dispatch({ type: GET_POSTS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(hideLoader());
    }
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function toggleFavorites(post) {
  return {
    type: TOGGLE_FAVORITES,
    payload: post
  };
}

export function showModal(post) {
  return {
    type: SHOW_MODAL,
    payload: post,
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: {},
  }
}

export function searchPosts(text) {
  return {
    type: SEARCH_POSTS,
    payload: text,
  }
}
