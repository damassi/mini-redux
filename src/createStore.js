import Observable from 'observ'
import invariant from 'invariant'

export default function createStore(reducer, initialState) {

  invariant(reducer,
    '(utils/createStore.js) \n' +
    'Error creating store: `reducer` is undefined.'
  )

  const state$ = Observable(createReducer(initialState))

  const updateState = (action) =>
    state$.set(createReducer(state$(), action))

  const getState = () => state$()

  return {
    dispatch: (action) => {
      return (typeof action === 'function')
        ? action(updateState, getState)
        : updateState(action)
    },
    getState,
    onChange: state$,
    reducer
  }
}
