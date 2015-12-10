import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import createStore from 'utils/createStore'
import reducer from 'reducers/flickrReducer'
import Provider from 'components/utils/Provider'
import Photos from 'components/Photos'

describe('(components/Photos.js)', () => {

  it('should render three photo items', () => {
    const store = createStore(reducer, {
      photos: {
        results: [
          {
            farm: 'x',
            id: 'x',
            owner: 'x',
            secret: 'x',
            server: 'x',
            title: 'x'
          },
          {
            farm: 'x',
            id: 'x',
            owner: 'x',
            secret: 'x',
            server: 'x',
            title: 'x'
          }
        ]
      }
    })

    const tree = mount(
      <Provider store={store}>
        <Photos />
      </Provider>
    )

    expect(tree.find('img').length).toBe(2)
  })
})
