import expect from 'expect'
import reducer from 'reducers/utils/reducer'

describe('(reducers/utils/reducer.js)', () => {

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

    const queryReducer = reducer(actionsMap, initialState)

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
