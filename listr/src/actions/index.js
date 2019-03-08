export const UPDATE_TITLE = 'UPDATE_TITLE';
export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}
export const CREATE_TODO = 'CREATE_TODO';
export function createTodo(newTodo) {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}
export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(toggle) {
  return {
    type: TOGGLE_TODO,
    payload: toggle
  }
}
