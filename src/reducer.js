import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }

  function todoApp(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)
        })
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)
        })
      case SET_VISIBILITY_FILTER:
        // Object.assign({}, state, {visibilityFilter: action.filter})
        return { ...state, visibilityFilter: action.filter }
      default:
        return state;
    }

  }
}


