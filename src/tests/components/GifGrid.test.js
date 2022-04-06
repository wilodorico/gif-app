import React from "react"
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock('../../hooks/useFetchGifs')



describe('Test component <GifGrid />', () => {
   const category = 'One punch'
   
   test('should display the component correctly', () => {

      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      })

      const wrapper = shallow(<GifGrid category={category} />)
      expect(wrapper).toMatchSnapshot()

    })

    test('should show items when images are loaded useFetchGifs', () => { 

      const gifs = [{
         id: 'abc',
         url: 'https://localhost/algo.jpg',
         title: 'algo'
      },
      {
         id: 'abc',
         url: 'https://localhost/algo.jpg',
         title: 'algo'
      }
   ]

      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false
      })
      const wrapper = shallow(<GifGrid category={category} />)

      expect( wrapper.find('p').exists()).toBe(false)
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

     })



})