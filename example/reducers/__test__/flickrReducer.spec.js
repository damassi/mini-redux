import expect from 'expect'
import flickrReducer, { _initialState } from 'reducers/flickrReducer'
import { QUERY, UPDATE_STATUS } from 'constants/actionTypes'

describe('(components/actions/flickrReducer.js)', () => {

  it('#query()', () => {
    expect(
      flickrReducer(_initialState, {
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
      flickrReducer(_initialState, {
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
      flickrReducer(_initialState, {
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
