import React from 'react'
import {useState,useEffect} from 'react'
const CartList = (props) => {

const [updatedCart, setupdatedCart] = useState([])

useEffect(()=>{
  setupdatedCart(props.cartItem)
},[props.cartItem])
  return (
    <>
       <div>
        {
                updatedCart?.map((cartElement,cartIndex)=>{

                    return(
                        <div className='cart-div'>
                            <img className="cart-img" src={cartElement.image} alt=""/>
                            <p>{cartElement.name} </p>
                            <p className='cart-info'>Rs.{cartElement.price * cartElement.quantity}/-</p>
                            <button className='cartListButton' onClick={()=>{
                              const mappedCart=updatedCart.map((item,index)=>{
                                return  cartIndex === index ? {...item , quantity: item.quantity +1} : item

                              })
                              setupdatedCart(mappedCart)
                            }}>+</button>
                            <span className='peice'> {cartElement.quantity} piece </span>
                            <button className='cartListButton' onClick={()=>{
                              const mappedCart=updatedCart.map((item,index)=>{
                                return cartIndex === index ? {...item, quantity:item.quantity > 0 ? item.quantity - 1 : 0} :item
                             })
                              setupdatedCart(mappedCart)
                            }}>-</button>

                        </div>
                    )
                })
                
        }
        <p className='totalAmount'><span className='totalSpan'>Total amount </span>: <span></span>Rs.
        {
          updatedCart.map((item=> item.price * item.quantity)).reduce((total,value)=>Math.round(total+value),0)
        }/-
        </p> 
       
       </div>
       <div className='proceed-div'>
        <button className='proceed-btn'>Proceed To Checkout</button>
       </div>
    </>
  )
}

export default CartList
