import React from "react"
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"


describe('Test component <GifExpertApp />', () => {
   
   test('should display the component correctly', () => { 

      const wrapper = shallow( <GifExpertApp /> )
      expect(wrapper).toMatchSnapshot()

    })

    test('should render list category', () => { 

      const category = ['One punch', 'Dragon Ball']
      const wrapper = shallow( <GifExpertApp defaultCategory={category} /> )

      expect(wrapper).toMatchSnapshot()
      expect(wrapper.find('GifGrid').length).toBe(category.length)

     })



})