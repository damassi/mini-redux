import expect from 'expect'
import photoReducer, { _initialState } from 'reducers/photoReducer'
import { QUERY, UPDATE_STATUS } from 'constants/actionTypes'

describe('(components/actions/photoReducer.js)', () => {

  it('#query()', () => {
    expect(
      photoReducer(_initialState, {
        type: QUERY,
        payload: {
          query: 'search query'
        }
      })
    ).toEqual(
      {
        ..._initialState,
        query: 'search query'
      }
    )
  })

  it('#updateStatus() -> Success', () => {
    expect(
      photoReducer(_initialState, {
        type: UPDATE_STATUS,
        payload: {
          responseStatus: {
            status: 200,
            statusText: 'ok'
          }
        }
      })
    ).toEqual(
      {
        ..._initialState,
        status: 'ok'
      }
    )
  })

  it('#updateStatus() -> Error', () => {
    expect(
      photoReducer(_initialState, {
        type: UPDATE_STATUS,
        payload: {
          responseStatus: {
            status: 404
          }
        }
      })
    ).toEqual(
      {
        ..._initialState,
        status: '404 Error searching Flickr: Not found'
      }
    )
  })

})
