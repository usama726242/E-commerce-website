import React, {useEffect, useState} from 'react'


const ProductList = (props) => {

  const [minPrice, setminPrice] = useState('')
  const [maxPrice, setmaxPrice] = useState('')
  const [filteredProducts,setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])

  useEffect(() => {
    setFilteredProducts(props.productsList)
  },[])
// fetched api to get products

  useEffect(()=>{

    const fetchData = async ()=>{

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
       console.log(data)
       props.settingProduct(data)
  }
      fetchData()
  },[])
  // this function implements filter by categorization

    const filterByCategory=()=>{
    const categorizedProduct= props.productsList.filter((categorizedItem)=>{

    const isCategoryMatch= selectedCategory === "" || selectedCategory === categorizedItem.category
      return isCategoryMatch 
  })
    // console.log(categorizedProduct)

      setFilteredProducts(categorizedProduct)
  }


/**
 * 
 * This function returns filltered array of products
 */
  const filterByName = (searchTerm) => {
  const filteredProductsList = props.productsList.filter((product) => {
    if(searchTerm=== ""){
      return product;
    }else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return product;
    }
  })
  setFilteredProducts(filteredProductsList)
}

/**
 * This function filters products by min/max or min and max price.
 */
const filterByPrice = () => {
  const filtered =props.productsList.filter((filtereditem)=>{
    if(minPrice && maxPrice){
      return filtereditem.price >= minPrice && filtereditem.price <= maxPrice
    }else if(minPrice){

      return filtereditem.price >= minPrice
    }else if(maxPrice){
      return filtereditem.price <= maxPrice
    }
    return true
  })
  setFilteredProducts(filtered)
}

  
  const handleCategoryChange=(event)=>{
    setSelectedCategory(event.target.value)
  }

  return (
    <>
   <div className='category-div'>
      <h2 className='categoryFilter'>Category Filter</h2>
      <select className="selector"value={selectedCategory} onChange={handleCategoryChange} onClick={filterByCategory}>
        <option className='option' value="">All Categories</option>
        <option value="men's clothing" onClick={filterByCategory}>Men's clothing</option>
        <option value="jewelery" onClick={filterByCategory}>Jewelery</option>
        <option value="electronics" onClick={filterByCategory}>Electronics</option>
        <option value="women's clothing" onClick={filterByCategory}>Women's clothing</option>

      </select>
      
    </div>
    <div className='price-div'>
      <h2 className='price'>Price Range</h2>
      <input className='priceInput' type="number"placeholder='Minimum price' onChange={(event) => {setminPrice(event.target.value);}}/>
      <input className='priceInput'type="number" placeholder='Maximum price'onChange={(event) => {setmaxPrice(event.target.value);}}/>
      <button className='button' onClick={filterByPrice}>Show Result</button>

    </div>
    <div className='search-div' >
      <h2 className='search'>Search Product</h2>
      <input className='search-input' type="text" placeholder="Search here..." onChange={(event) => {filterByName(event.target.value);}} />
      <div className='product-div'>
      
        {
        
          filteredProducts.map((val) => {
            return(
            <div className="container product" key={val.id}>
             <img className="img" src={val.image} alt="Card image cap"/>
               
               <h6 class="productTitle" >{val.title} | {val.category}</h6>
               <p>{val.seller}</p>
               <p className="price" ><b>Rs.{val.price} /-</b></p>
               <button className="button"onClick={()=>props.cart(val)}><span>Add to Cart</span></button> 
           </div> 
         )})
        }
          
      </div>

      
    </div>
    </>
    
  )
}

export default ProductList
