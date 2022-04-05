

export const getGifs = async (category) => {
   const url =
     `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=RRT2w2QIum0k8t0NBPGN6sV9WTfwcK2N`

   const res = await fetch(url)
   const { data } = await res.json()

   const gifs = data.map((img) => {
     return {
       id: img.id,
       title: img.title,
       url: img.images?.downsized_medium.url,
     }
   })
   
   return gifs;
 }