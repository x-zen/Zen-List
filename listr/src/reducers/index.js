import { UPDATE_TITLE } from '../actions/index.js';

const initialState = {
  title: 'My New List'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
