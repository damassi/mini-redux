import React, { PropTypes } from 'react'
import * as urls from 'utils/urls'

const Photo = (props) => {
  const {
    farm,
    id,
    owner,
    secret,
    server
  } = props

  const url = urls.imageUrl(farm, server, id, secret)
  const pageUrl = urls.pageUrl(owner, id)

  return (
    <a href={pageUrl} target='_blank'>
      <img style={styles.img} src={url} />
    </a>
  )
}

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Photo

const styles = {
  img: {
    padding: '30px'
  }
}
