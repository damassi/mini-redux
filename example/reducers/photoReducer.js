import MapCache from 'map-cache'
import reducer from 'reducers/utils/reducer'

const initialState = {
  cache: new MapCache(),
  loading: false,
  query: '',
  photos: {
    results: [],
    total: undefined
  },
  status: undefined
}

const actionsMap = {

  showPreloader() {
    return {
      loading: true
    }
  },

  query(state, action) {
    const { query } = action.payload

    return {
      query
    }
  },

  search(state, action) {
    const { query, cache } = state
    const { photos } = action.payload

    cache.set(query, JSON.stringify(photos))

    return {
      loading: false,
      query,
      photos: {
        ...photos
      },
      status: undefined
    }
  },

  updateStatus(state, action) {
    const {
      responseStatus: {
        status,
        statusText
      }
    } = action.payload

    return {
      status: status === 404
        ? '404 Error searching Flickr: Not found'
        : statusText
    }
  }
}

export default reducer(actionsMap, initialState)
export const _initialState = initialState
