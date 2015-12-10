import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import createStore from 'utils/createStore'
import reducer from 'reducers/flickrReducer'
import Provider from 'components/utils/Provider'
import connect from 'components/utils/connect'

describe('(components/utils/connect.js)', () => {

  it('should inject props', (done) => {
    const store = createStore(reducer)

    const TextInput = connect(({ query }) => {
      expect(query).toEqual('prepopulated query')
      done()

      return <div />
    }, () => ({
      query: 'prepopulated query'
    }))

    mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )
  })

  it('should select state from store', (done) => {
    const inputText = 'query in state'

    const store = createStore(reducer, {
      query: inputText
    })

    const TextInput = connect(({ query }) => {
      expect(query).toEqual(inputText)
      done()

      return <div />
    }, (state) => ({
      query: state.query
    }))

    mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )
  })

  it('should inject a dispatch fn', (done) => {
    const store = createStore(reducer)

    const TextInput = connect(({ dispatch }) => {
      expect(dispatch).toBeA(Function)
      done()

      return <div />
    }, (state) => ({
      query: state.query
    }))

    mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )
  })

})
