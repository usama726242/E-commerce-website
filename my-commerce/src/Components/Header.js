import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate()
  return (
    <>
    <div className='header-div'>
      <div className="title"onClick={()=>navigate('/input')}><b>Shop Wear</b></div>
      <div className='title' onClick={()=>navigate('/cartlist')}> Cart
        <sup>{props.count}</sup>
      </div>
    </div>
    </>

  )
    
}

export default Header
