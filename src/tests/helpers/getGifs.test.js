import { getGifs } from "../../helpers/getGifs"


describe('Testing fetch', () => {
   
   test('should render 10 items', async () => { 
     const gifs = await getGifs('One Punch')
     expect(gifs.length).toBe(10)

    })

    test('should render 0 items', async () => { 
      const gifs = await getGifs('')
      expect(gifs.length).toBe(0)
 
     })



})