import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Daily Grocery Order and Get Express Delivery
            </h1>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-purple-700] transition duration-300">
              <ShoppingCart size={20} />
              <span>Explore Shop</span>
            </button> 
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Fresh groceries" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;