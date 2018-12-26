import {
  ADD_TODO,
  FETCH_TODOS,
  COMPLETE_TODO,
  CHANGE_TEXT,
  DELETE_TODO
} from '../constants/index';

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  };
}

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
}

export function addTodo(item) {
  return {
    type: ADD_TODO,
    payload: item
  };
}

export function completeTodo(item) {
  return {
    type: COMPLETE_TODO,
    payload: item
  };
}

export function deleteTodo(item) {
  return {
    type: DELETE_TODO,
    payload: item
  };
}
