import camelCase from 'lodash.camelcase'

export default function reducer(actionsMap, initialState) {
  return (state = initialState, action) => {
    const reduceFn = action && actionsMap[camelCase(action.type)]

    if (!reduceFn) {
      return state
    }

    const newState = {
      ...state,
      ...reduceFn(state, action)
    }

    return newState
  }
}
