import updateStatus from 'actions/updateStatus'

export default function throwSyncError(msg, error, dispatch) {
  if (error instanceof Error) {
    setTimeout(() => {
      throw error
    })
  }

  if (__DEV__) {
    console.warn(msg, error)
  }

  dispatch(updateStatus(error))
}
