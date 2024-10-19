import React from 'react'
import { LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const LoginButton = ({  children , url }) => (
  <Link
    to={url}
    className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out w-full sm:w-auto"
  >
    {children}
  </Link>
)

const SignupButton = ({ children , url }) => (
  <Link
    to={url}
    className="flex items-center justify-center px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out w-full sm:w-auto"
  >
    {children}
  </Link>
)

export default function AuthButtons() {

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
      <LoginButton url="/login">
        <LogIn className="w-5 h-5 mr-2" />
        <span>Login</span>
      </LoginButton>
      <SignupButton url="/create-account">
        <UserPlus className="w-5 h-5 mr-2" />
        <span>Sign Up</span>
      </SignupButton>
    </div>
  )
}