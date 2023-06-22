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
                        <div>
                            <img className="cart-img" src={cartElement.url} alt=""/>
                            <p>{cartElement.name} </p>
                            <p>Rs.{cartElement.price * cartElement.quantity}/-</p>
                            <button onClick={()=>{
                              const mappedCart=updatedCart.map((item,index)=>{
                                return  cartIndex === index ? {...item , quantity: item.quantity +1} : item

                              })
                              setupdatedCart(mappedCart)
                            }}>+</button>
                            <span> {cartElement.quantity} piece </span>
                            <button onClick={()=>{
                              const mappedCart=updatedCart.map((item,index)=>{
                                return cartIndex === index ? {...item, quantity:item.quantity > 0 ? item.quantity - 1 : 0} :item
                              })
                              setupdatedCart(mappedCart)
                            }}>-</button>

                        </div>
                    )
                })
                
        }
        <p>Total amount : <span></span>Rs.
        {
          updatedCart.map((item=> item.price * item.quantity)).reduce((total,value)=>total+value,0)
        }/-
        </p> 
       
       </div>
    </>
  )
}

export default CartList
