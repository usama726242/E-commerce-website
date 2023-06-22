import './App.css';
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import CartList from './Components/CartList'
import {useState} from 'react'

function App() {

const [product, setProduct] = useState([
  {
    url:"https://www.pakmobizone.pk/wp-content/uploads/2022/12/Apple-iPhone-14-Pro-Max-Deep-Purple-1.jpg",
    name:"Iphone 14 pro max",
    catogory: "phone",
    seller:"usama phones",
    price:400000
  },
  {
    url:"https://m.media-amazon.com/images/I/71WMr+UDpSL._AC_UF1000,1000_QL80_.jpg",
    name:"Protein shake",
    catogory: "fitness",
    seller:"usama fitness",
    price:20000
  },
  {
    url:"https://static-01.daraz.pk/p/0e5e3e1e4032e8de0cb1e98f7e356841.jpg",
    name:"Dumbells",
    catogory: "fitness",
    seller:"usama dumbell store",
    price:10000
  },
  {
    url:"https://www.my-watchsite.com/9315/submariner-date.jpg",
    name:"Rolex Watch ",
    catogory: "watch",
    seller:"usama watch company",
    price:950000
  },
  {
    url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg",
    name:"U.S Polo Shoes",
    catogory: "shoes",
    seller:"usama shoes store",
    price:35000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
  {
    url:"https://n.nordstrommedia.com/id/sr3/24761b0d-5027-4961-8db5-39fa9978d44a.jpeg?h=365&w=240&dpr=2",
    name:"Sauvage Dior",
    catogory: "perfume",
    seller:"usama fragnances",
    price:12000
  },
])
const [cart, setCart] = useState([])
const [showCart, setshowCart] = useState(false)
const addToCart=(data)=>{
setCart([...cart,{...data, quantity:1}])
}
const handleShow=(value)=>{

  setshowCart(value)
}
  return (
    <>
    <Header count={cart.length} show={handleShow}/>
    {
      showCart?
          <CartList cartItem={cart} />:
          <ProductList productItem={product} cart={addToCart} />

    }
    </>
  );
}

export default App;
