import invariant from 'invariant'

export function imageUrl(...args) {
  const isValid = args.every(arg => typeof arg !== 'undefined')

  invariant(isValid,
    '(components/utils/getImageUrl.js) \n' +
    'Error getting image url: argument ' + JSON.stringify(args) + ' is undefined.'
  )

  const [
    farm,
    server,
    id,
    secret
  ] = args

  // See API for other sizes: https://www.flickr.com/services/api/misc.urls.html
  const size = 'q'

  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`
}

export function pageUrl(userId, photoId) {
  invariant(userId && photoId,
    '(components/utils/urls.js) \n' +
    'Error getting image url: `userId` or `photoId` is undefined.'
  )

  return `https://www.flickr.com/photos/${userId}/${photoId}`
}
