
export function todos ( state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.payload]);
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.complete = !todo.complete;
          return todo;
        }
        return todo;
      });
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
