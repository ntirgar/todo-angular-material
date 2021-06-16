import { Todo, TodoActionType, TodoState, TodoAction } from "./types";

const INITIAL_STATE: TodoState = {
  todos: []
};

const todoReducer = (state: TodoState = INITIAL_STATE, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TodoActionType.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: true
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
