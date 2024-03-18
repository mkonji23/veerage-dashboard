'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/Input/input'
import { Logo } from '@/components/Logo/logo'
import { Button } from '@/components/Buttons/button'

const Homepage = () => {
  const router = useRouter()

  // initialize states

  const [errorMessage, setErrorMessage] = useState('')

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  // destructure the values
  const { email, password } = loginData

  // handle the input change

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }
  // handle submit here

  const handleSubmit = () => {
    try {
      if (!email || !password) {
        throw new Error('Enter email address and password')
      }

      if (email === 'user@test.com' && password === 'user1234') {
        router.push('/dashboard')
      } else {
        throw new Error('Invalid email address or password')
      }
    } catch (error: any) {
      setErrorMessage(error.message)
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const jsonData = await response.json()
    } catch (error) {
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <main className="h-[100dvh] bg-vrBlack w-screen flex flex-col justify-center items-center">
      <Logo />
      <div className="mt-6 max-w-[300px]">
        <p className="text-center text-white">
          Demo: use <strong>user@test.com</strong> as email address and <strong>user1234</strong> as password
        </p>
      </div>

      <div className="space-y-3 mt-6">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
          Email address
        </label>

        <Input name="email" type="email" value={email} onChange={handleOnChange} />

        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>

        <Input name="password" type="password" value={password} onChange={handleOnChange} />

        <Button
          className="bg-vrBlue text-white"
          onClick={() => {
            handleSubmit()
          }}
        >
          Sign in
        </Button>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <span className="mr-1"></span>
          <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>

      {errorMessage && <p className="error text-red mt-5">🔔 {errorMessage}</p>}
    </main>
  )
}

export default Homepage
