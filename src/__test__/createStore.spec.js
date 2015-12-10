import expect from 'expect'
import flickrReducer from 'reducers/flickrReducer'
import createStore from 'utils/createStore'

describe('(utils/createStore.js)', () => {

  it('should return a store', () => {
    const store = createStore(flickrReducer)

    expect(store).toExist()
    expect(store).toBeAn(Object)
  })

  it('should should return a store with initial state', () => {
    const store = createStore(flickrReducer, {
      test: 'state'
    })

    expect(store.getState()).toEqual({ test: 'state' })
  })

  it('should return `dispatch`', () => {
    const { dispatch } = createStore(flickrReducer)

    expect(dispatch).toBeA(Function)
  })

  it('should return `getState`', () => {
    const { dispatch } = createStore(flickrReducer)

    expect(dispatch).toBeA(Function)
  })

  it('should return `onChange`', () => {
    const { onChange } = createStore(flickrReducer)

    expect(onChange).toBeA(Function)
  })

  it('should return the reducer passed in via `reducer`', () => {
    const { reducer } = createStore(flickrReducer)

    expect(reducer).toEqual(flickrReducer)
  })

  it('should trigger `onChange` when state updates via `dispatch`', (done) => {
    const store = createStore(flickrReducer)

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
    const store = createStore(flickrReducer, {
      query: 'first query'
    })

    expect(store.getState()).toEqual({
      query: 'first query'
    })
  })

})
