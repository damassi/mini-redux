import React, { PropTypes } from 'react'
import connect from 'components/utils/connect'
import Photo from 'components/Photo'

const Photos = ({ results }) =>
  <div>
    { results.map((photo, index) =>
      <Photo {...photo} key={index.toString()} />
    )}
  </div>

Photos.propTypes = {
  results: PropTypes.array.isRequired
}

export default connect(Photos, (state) => ({
  results: state.photos.results
}))
