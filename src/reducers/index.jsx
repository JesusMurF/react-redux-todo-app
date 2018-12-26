import { combineReducers } from 'redux';
import { v4 } from 'uuid';

import {
  FETCH_TODOS,
  CHANGE_TEXT,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from '../constants/index';

const initialState = {
  todos: [
    { id: v4(), text: 'Sacar la basura', completed: true },
    { id: v4(), text: 'Recoger la cocina', completed: true }
  ],
  text: ''
};

function items(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return state;
    case CHANGE_TEXT:
      return { ...state, text: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item =>
          item.id === action.payload.id
            ? { ...item, completed: action.payload.completed }
            : item
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload.id)]
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  items: items
});

export default rootReducer;
