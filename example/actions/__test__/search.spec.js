import fetchMock from 'fetch-mock'
import queryString from 'query-string'
import expect from 'expect'
import { PHOTO_API_ENDPOINT, PHOTO_API_KEY, PAGE_SIZE } from 'constants/config'
import createStore from 'utils/createStore'
import reducer from 'reducers/photoReducer'
import search from 'actions/search'

describe('(components/actions/search.js)', () => {

  const searchQuery = 'user search text'

  const params = queryString.stringify({
    api_key: PHOTO_API_KEY,
    format: 'json',
    nojsoncallback: '?',
    method: 'flickr.photos.search',
    per_page: PAGE_SIZE,
    text: searchQuery
  })

  const url = PHOTO_API_ENDPOINT + '?' + params

  beforeEach(() => {
    fetchMock.mock(url, {
      status: 200
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  it('should perform a GET to the Flickr api', (done) => {
    const store = createStore(reducer)

    store.dispatch(search(searchQuery))

    store.onChange(() => {
      const {
        query
      } = store.getState()

      expect(query).toBe(searchQuery)
      done()
    })
  })
})
