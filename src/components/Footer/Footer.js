import React from 'react'
import Container from '../Container'

const Footer = () => {
  return (
    <footer className="bg-purple-50 py-8">
      <Container>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6">
            <h2 className="text-xl font-bold text-purple-600 mb-4">ShopLog0</h2>
            <p className="text-gray-600">We're Grocery Shop, an innovative team of food suppliers.</p>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Information</h3>
            <ul className="text-gray-600">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Privacy Policy</li>
              <li>Our Suppliers</li>
              <li>Extended Plan</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Customer Support</h3>
            <ul className="text-gray-600">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Report Abuse</li>
              <li>Submit and Dispute</li>
              <li>Policies & Rules</li>
              <li>Online Shopping</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Daily Groceries</h3>
            <ul className="text-gray-600">
              <li>Dairy & Eggs</li>
              <li>Meat & Seafood</li>
              <li>Breakfast Food</li>
              <li>Household Supplies</li>
              <li>Bread & Bakery</li>
              <li>Pantry Staples</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer