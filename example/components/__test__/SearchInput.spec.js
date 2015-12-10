import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import createStore from 'utils/createStore'
import reducer from 'reducers/flickrReducer'
import Provider from 'components/utils/Provider'
import SearchInput from 'components/SearchInput'

describe('(components/SearchInput.js)', () => {

  it('should render input text', () => {
    const store = createStore(reducer, {
      query: 'search query'
    })

    const tree = mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    )

    expect(tree.find('input').node.value).toBe('search query')
  })
})
