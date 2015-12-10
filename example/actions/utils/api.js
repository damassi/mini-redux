import http from 'axios'
import queryString from 'query-string'

import {
  PHOTO_API_ENDPOINT,
  PHOTO_API_KEY,
  PAGE_SIZE
} from 'constants/config'

export async function search(fetchParams) {

  const params = queryString.stringify({
    api_key: PHOTO_API_KEY,
    format: 'json',
    nojsoncallback: '?',
    method: 'flickr.photos.search',
    per_page: PAGE_SIZE,
    ...fetchParams
  })

  return await http.get(PHOTO_API_ENDPOINT + '?' + params)
}
