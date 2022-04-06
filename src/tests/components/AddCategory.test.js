import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Test component <AddCategory />', () => {

  const setCategory = jest.fn()
  let wrapper = shallow(<AddCategory setCategory={setCategory} />)

  beforeEach(() => {
     jest.clearAllMocks()
     wrapper = shallow(<AddCategory setCategory={setCategory} />)
  })

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the text box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'
    input.simulate('change', { target: { value },
    })
  })

  test('should not send the form if not value', () => { 

   wrapper.find('form').simulate('submit', { preventDefault(){} })

   expect(setCategory).not.toHaveBeenCalled()

   })

   test('should setCategory and clear the textbox', () => { 
      const value = "Hello world"

      wrapper.find('input').simulate('change', {target: { value }})

      wrapper.find('form').simulate('submit', {preventDefault(){} })

      expect(setCategory).toHaveBeenCalled();
      expect(setCategory).toHaveBeenCalledTimes(1);
      expect(setCategory).toHaveBeenCalledWith( expect.any(Function) );

      expect(wrapper.find('input').prop('value')).toBe('')

    })


})
