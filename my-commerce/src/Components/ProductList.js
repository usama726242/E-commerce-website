import React from 'react'

const ProductList = (props) => {
  return (
    <>
    <div className='product-div'>
      {
              props.productItem.map((productElement,productIndex)=>{
                return(
                  <div className='product'>
                    <div>
                      <img className="product-img"src={productElement.url} alt=""/>
                      <p>{productElement.name} | {productElement.catogory}</p>
                      <p>{productElement.seller}</p>
                      <p>Rs.{productElement.price}/-</p>
                      <button className='cart-btn'onClick={()=>props.cart(productElement)}>Add to Cart</button>

                    </div>
                  </div>

                )


                  
              })

      }
    </div>
    </>

  )
}

export default ProductList
