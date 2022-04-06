import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Test component <GifGridItem />', () => {
  const title = 'title'
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a paragraph and a title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('should have image equal to url and alt in props', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('should have class animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})
