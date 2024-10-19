import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductCard from '../ProductCard.js/ProductCard'
import axios from 'axios';

const AllProduct = () => {
  const [products, setProducts] = useState([]);


  function fetchProducts() {
    axios.get('http://localhost:3030/api/products/ReadAllProduct')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('There was an error fetching the products!', error);
      });
    }
    
    
    useEffect(() => {
      fetchProducts();
    }, []);
    
    return (
    <>
      <Container>
        <div className='my-20'>
          <h1 className='text-4xl font-bold'>All Product</h1>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default AllProduct