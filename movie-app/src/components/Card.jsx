import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Card = ({search,setSearch}) => {
    const [data,setData]=useState([])
     useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=6fe78d25`)
        .then(res=>setData(res.data.Search))
     },[search])
  return (
    <div className='Cards'>
   
    {
      
        data && data.map(item=>(
          
        
       <div class="card__body">
        <div className='cart'>
       <img src={item.Poster} alt="..."/>
         <h3>{item.Title} </h3>
         <p> {item.Year}</p>
            
         </div>
         
       </div>
   
    
          
        ))
    }
</div>

  )
}

export default Card