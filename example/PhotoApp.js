import React from 'react'
import createStore from 'utils/createStore'
import photoReducer from 'reducers/photoReducer'
import Provider from 'components/utils/Provider'
import Status from 'components/Status'
import SearchInput from 'components/SearchInput'
import Photos from 'components/Photos'

const store = createStore(photoReducer)

export const PhotoApp = () =>
  <div style={styles.container}>
    <Provider store={store}>
      <Status />
      <SearchInput />
      <Photos />
    </Provider>
  </div>

const styles = {
  container: {
    width: '100%',
    textAlign: 'center'
  }
}
