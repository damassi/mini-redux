import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import Photo from 'components/Photo'

describe('(components/Photo.js)', () => {

  it('should render a photo that links', () => {
    const props = {
      farm: 'x',
      id: 'x',
      owner: 'x',
      secret: 'x',
      server: 'x',
      title: 'x'
    }

    const tree = mount(<Photo {...props} />)

    expect(tree.find('img').length).toBe(1)
    expect(tree.find('a').length).toBe(1)
  })
})
