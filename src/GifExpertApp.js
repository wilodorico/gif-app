import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
//   const category = ['One Punch', 'Samurai X', 'Dragon Ball']

  const [category, setCategory] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertapp</h2>
      <AddCategory setCategory={ setCategory } />
      <hr />

      <ol>
        {category.map((item, index) => (
          <GifGrid key={index} category={item} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
