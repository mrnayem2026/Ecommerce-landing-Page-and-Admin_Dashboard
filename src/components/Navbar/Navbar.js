import React, { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
import Container from '../Container'
import AuthButtons from '../AuthButtons'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-3xl font-bold text-indigo-600 font-serif">ShopLogo</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              </div>
            </div>

            {/* Search, User, and Cart */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-gray-700 rounded-full py-2 px-4  focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <AuthButtons />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/products" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Products</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a href="/account" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
                  <User className="h-6 w-6 mr-3" />
                  Account
                </a>
                <a href="/cart" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  Cart
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}