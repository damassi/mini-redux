import React, { PropTypes } from 'react'
import connect from 'components/utils/connect'

const Status = ({ status }) =>
  <div>
    {status && status}
  </div>

Status.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default connect(Status, (state) => ({
  status: state.status
}))
