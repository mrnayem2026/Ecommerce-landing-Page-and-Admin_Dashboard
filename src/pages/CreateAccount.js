import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Input, Label, Button } from '@windmill/react-ui'
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post(
        "http://localhost:3030/api/users/register",
        form
      );
      console.log(response.data);
      Cookies.set("token", response.data["token"], { expires: 7 });
      toast.success('Successfully Register!')
      // redirect to home page
      window.location.href = "/login";
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <Label className="mt-4">
                <span>Name</span>
                <Input className="mt-1" placeholder="Name" type="text" name="name"
                  value={form.name}
                  onChange={handleChange} />
              </Label>
              <Label className="mt-4">
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" name="email"
                  value={form.email}
                  onChange={handleChange} />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" placeholder="***************" type="password" name="password"
                  value={form.password}
                  onChange={handleChange} />
              </Label>
              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button block className="mt-4" onClick={handleSubmit}>
                Create account
              </Button>

              <hr className="my-8" />
              {/* 
              <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button block className="mt-4" layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}
              <Toaster />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
