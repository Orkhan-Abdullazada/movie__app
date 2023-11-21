import React from 'react'
import Card from './Card'

const Cards = ({search,setSearch}) => {
  return (
    <div>
        <Card search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Cards