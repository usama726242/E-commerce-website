import React from 'react'

const Header = (props) => {
  return (
    <>
    <div className='header-div'>
      <div onClick={()=>props.show(false)}>Shopp Anything</div>
      <div onClick={()=>props.show(true)}> Cart
        <sup>{props.count}</sup>
      </div>
    </div>
    </>

  )
    
}

export default Header
