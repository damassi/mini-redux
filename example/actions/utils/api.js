import http from 'axios'
import queryString from 'query-string'

import {
  FLICKR_API_ENDPOINT,
  FLICKR_API_KEY,
  PAGE_SIZE
} from 'constants/config'

export async function search(fetchParams) {

  const params = queryString.stringify({
    api_key: FLICKR_API_KEY,
    format: 'json',
    nojsoncallback: '?',
    method: 'flickr.photos.search',
    per_page: PAGE_SIZE,
    ...fetchParams
  })

  return await http.get(FLICKR_API_ENDPOINT + '?' + params)
}
