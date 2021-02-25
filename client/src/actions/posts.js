import * as api from '../api';

// Action Creators are functions that return actions.
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();  
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch(error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {

  try {
    const { data } = await api.createPost(post);

    dispatch({type: 'CREATE', payload: data});
  } catch(error) {
    console.log(error);
  }
}