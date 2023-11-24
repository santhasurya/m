import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Main.css'
function Product() {

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  useEffect(() => {
    setLoading(true)
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((data) => {
        setProduct(data.data)
        console.log(data.data);
        setLoading(false)
    })
  },[])

  return (
    <div>
        {
            !loading && product? 
            <div className='product-container'>
                <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="product-image"
                />
                <div>
                    Price : {product.price}
                </div>
                <div>
                    Category : {product.category}
                </div>
                <div>
                    Rating: {product.rating.rate}
                </div>
                <div>
                    Description : {product.description}
                </div>
            </div> : 
            <div>Loading..</div>
        }
    </div>
  )
}

export default Product