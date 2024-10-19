import { ShoppingCart } from 'lucide-react'
import React from 'react'

const ProductCard = ({imageUrl, name, description, price}) => {
  return (
    <div className='bg-purple-50 rounded-lg shadow-md p-4'>
      <div className='w-full h-60rounded-lg'>
        <img src={imageUrl} alt={name} className='w-full h-full object-cover rounded-lg' />

        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold mt-6'>{name}</h1>
            <p className='text-sm text-gray-500'>{description.split(' ').slice(0, 8).join(' ')}...</p>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <button className='bg-purple-600 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-purple-700'>
              <span className="mr-2 text-sm">Add to Cart</span>
              <ShoppingCart size={20} />
            </button>
            <p className='text-xl font-bold'>{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard