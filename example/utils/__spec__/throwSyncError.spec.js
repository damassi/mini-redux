import expect from 'expect'
import throwSyncError from 'utils/throwSyncError'
import photoReducer from 'reducers/photoReducer'
import createStore from 'utils/createStore'

describe('(utils/throwSyncError.js)', () => {

  it('should update store status', () => {
    const store = createStore(photoReducer)

    throwSyncError(null, {
      responseStatus: {
        status: 555,
        statusText: 'Weird error'
      }
    }, store.dispatch)

    store.onChange(() => {
      expect(store.getState()).toEqual({
        status: 'Weird error'
      })
    })
  })
})
