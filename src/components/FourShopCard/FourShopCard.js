import React from 'react'
import { ArrowRight } from 'lucide-react'
import Container from '../Container'

const FourShopCard = () => {
  return (
    <Container>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-12'>
      <div className="bg-purple-50 rounded-5xl overflow-hidden shadow-lg flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        
          <div className='p-4 sm:p-8'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Everyday Fresh Fruits</h1>
            <button className='bg-purple-600 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-purple-700'>
              <span className="mr-2">Shop Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className='flex-1'>
            <img src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Fresh meat on a cutting board" className='w-full h-auto object-cover rounded-3xl' />
          </div>
        </div>
      <div className="bg-purple-50 rounded-5xl overflow-hidden shadow-lg flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className='p-4 sm:p-8'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Now You Can Cook</h1>
            <button className='bg-purple-600 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-purple-700'>
              <span className="mr-2">Shop Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className='flex-1'>
            <img src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Fresh meat on a cutting board" className='w-full h-auto object-cover rounded-3xl' />
          </div>
        </div>
      <div className="bg-purple-50 rounded-5xl overflow-hidden shadow-lg flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className='p-4 sm:p-8'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Eat Healthy Eat Fresh</h1>
            <button className='bg-purple-600 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-purple-700'>
              <span className="mr-2">Shop Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className='flex-1'>
            <img src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Fresh meat on a cutting board" className='w-full h-auto object-cover rounded-3xl' />
          </div>
        </div>

      </div>
    </Container>
  )
}

export default FourShopCard