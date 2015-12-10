import expect from 'expect'
import reducer from 'utils/reducer'
import createStore from './createStore'

describe('(./createStore.js)', () => {

  const dummyReducer = reducer({ query: '' }, {
    query(state, action) {
      return {
        query: action.payload.query
      }
    }
  })

  it('should return a store', () => {
    const store = createStore(dummyReducer)

    expect(store).toExist()
    expect(store).toBeAn(Object)
  })

  it('should should return a store with initial state', () => {
    const store = createStore(dummyReducer, {
      test: 'state'
    })

    expect(store.getState()).toEqual({ test: 'state' })
  })

  it('should return `dispatch`', () => {
    const { dispatch } = createStore(dummyReducer)

    expect(dispatch).toBeA(Function)
  })

  it('should return `getState`', () => {
    const { dispatch } = createStore(dummyReducer)

    expect(dispatch).toBeA(Function)
  })

  it('should return `onChange`', () => {
    const { onChange } = createStore(dummyReducer)

    expect(onChange).toBeA(Function)
  })

  it('should return the reducer passed in via `reducer`', () => {
    const { reducer } = createStore(dummyReducer)

    expect(reducer).toEqual(dummyReducer)
  })

  it('should trigger `onChange` when state updates via `dispatch`', (done) => {
    const store = createStore(dummyReducer)

    store.onChange((newState) => {
      expect(newState.query).toEqual('new query')
      done()
    })

    store.dispatch({
      type: 'QUERY',
      payload: {
        query: 'new query'
      }
    })
  })

  it('should return state', () => {
    const store = createStore(dummyReducer, {
      query: 'first query'
    })

    expect(store.getState()).toEqual({
      query: 'first query'
    })
  })

})
