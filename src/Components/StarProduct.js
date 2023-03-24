import React from 'react'
import '../Styles/starproduct.css'

const StarProduct = ({starproduct}) => {
  return (
    
    <div className='starProduct'>
      <div>
      <a href={starproduct[0].url}></a> <img src={starproduct[0].image} alt="1st Product" />
    </div>
    <div>
    <a href={starproduct[1].url}></a> <img src={starproduct[1].image} alt="2nd Product" />
    <a href={starproduct[2].url}></a> <img src={starproduct[1].image} alt="3nd Product" />
    <a href={starproduct[3].url}></a> <img src={starproduct[3].image} alt="4nd Product" />
    </div>
    </div>
  )
}

export default StarProduct