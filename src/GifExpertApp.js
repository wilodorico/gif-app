import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultCategory = []}) => {

  const [category, setCategory] = useState(defaultCategory)

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
