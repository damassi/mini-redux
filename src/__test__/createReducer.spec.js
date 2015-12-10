import expect from 'expect'
import createReducer from './createReducer'

describe('(createReducer.js)', () => {

  it('should return a reducer', () => {
    const initialState = {
      query: 'chris'
    }

    const actionsMap = {
      query(state, action) {
        const { query } = action.payload

        return {
          query
        }
      }
    }

    const queryReducer = createReducer(actionsMap, initialState)

    expect(
      queryReducer(initialState, {
        type: 'QUERY',
        payload: {
          query: 'updated'
        }
      })
    ).toEqual({
      query: 'updated'
    })
  })
})
