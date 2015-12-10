import throwSyncError from 'utils/throwSyncError'
import * as actionTypes from 'constants/actionTypes'
import * as api from 'actions/utils/api'

export const MIN_INPUT_LENGTH = 3

export default function search(query) {
  return async (dispatch, getState) => {

    dispatch({
      type: actionTypes.QUERY,
      payload: {
        query
      }
    })

    if (query.length < MIN_INPUT_LENGTH) {
      return false
    }

    const { cache } = getState()

    if (cache.has(query)) {
      const cachedPayload = JSON.parse(cache.get(query))

      return dispatchPayload({
        photos: {
          ...cachedPayload
        }
      })
    }

    try {
      dispatch({
        type: actionTypes.SHOW_PRELOADER
      })

      const {
        data: {
          photos
        }
      } = await api.search({
        text: query
      })

      dispatchPayload({
        photos: {
          results: photos.photo,
          total: photos.total
        }
      })

    } catch (error) {
      throwSyncError(
        '(actions/search.js) \n' +
        'Error searching Flickr:',
        error,
        dispatch
      )
    }

    function dispatchPayload(payload) {
      dispatch({
        type: actionTypes.SEARCH,
        payload: {
          query,
          ...payload
        }
      })
    }
  }
}
