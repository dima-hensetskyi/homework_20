import defaultPosts from '../../Post/PostsData';
import { CREATE_POST } from '../types';

const initialState = {
  posts: defaultPosts,
};

export const postsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, actions.payload] };
    default:
      return state;
  }
};
