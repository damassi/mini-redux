import { UPDATE_STATUS } from 'constants/actionTypes'

export default function updateStatus(responseStatus) {
  return {
    type: UPDATE_STATUS,
    payload: {
      responseStatus
    }
  }
}
