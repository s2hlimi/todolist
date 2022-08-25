//action value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

//action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};

//initial state
const initialState = {
  todos: [
    {
      id: 0,
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트",
      body: "흑흑",
      isDone: false,
    },
    {
      id: 2,
      title: "리덕스공부",
      body: "열심히",
      isDone: true,
    },
  ],
};

//Reducer
const todos = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };

    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    default:
      return state;
  }
};
export default todos;
