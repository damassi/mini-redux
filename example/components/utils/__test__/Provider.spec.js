import React, { Component, PropTypes } from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import createStore from 'utils/createStore'
import reducer, { _initialState } from 'reducers/flickrReducer'
import Provider from 'components/utils/Provider'
import connect from 'components/utils/connect'

describe('(components/utils/Provider.js)', () => {

  it('should inject a `store` context into the tree', (done) => {
    const store = createStore(reducer)

    class TextInput extends Component {
      static contextTypes = {
        store: PropTypes.object.isRequired
      }

      render() {
        const {
          store: injectedStore
        } = this.context

        expect(injectedStore).toBeAn(Object)
        expect(injectedStore).toEqual(store)
        done()

        return <div />
      }
    }

    mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )
  })

  it('should rerender component whenever state changes', (done) => {
    const testQuery = 'searching for something'

    const store = createStore(reducer, _initialState)

    const TextInput = connect(({ query }) => {
      if (query) {
        expect(query).toBe(testQuery)
        done()
      }

      return <div />
    }, (state) => ({
      query: state.query
    }))

    mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )

    store.dispatch({
      type: 'QUERY',
      payload: {
        query: testQuery
      }
    })
  })

  it('should update Provider `state` history whenever state changes', () => {
    const store = createStore(reducer)

    const TextInput = () => <div />

    const tree = mount(
      <Provider store={store}>
        <TextInput />
      </Provider>
    )

    expect(tree.node.state.history).toBeA(Array)

    store.dispatch({
      type: 'QUERY',
      payload: {
        query: 'first item'
      }
    })

    expect(tree.node.state.history[0].query).toBe('first item')

    store.dispatch({
      type: 'QUERY',
      payload: {
        query: 'second item'
      }
    })

    expect(tree.node.state.history[1].query).toBe('second item')
  })

})
