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
  const fetchSignup = async () => {
    try {
      const response = await fetch('/api/db/signup', {
        method: 'POST', // POST 요청 설정
        headers: {
          'Content-Type': 'application/json', // JSON 형식의 데이터 전송 설정
          'x-api-key': '3c55d8328925224e961b1ea623ae2b977c12cb3cbdf81cfa14578004ab3abe57',
        },
        body: JSON.stringify({
          id: email,
          password,
          /* 여기에 POST로 전송할 데이터 입력 */
        }), // 전송할 데이터를 JSON 문자열로 변환하여 설정
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const jsonData = await response.json()
      console.log('result', jsonData)
      // POST 요청에 대한 응답 데이터 처리
    } catch (error) {
      // 오류 처리
      // setError(error.message);
    } finally {
      // 로딩 상태 변경
      // setLoading(false);
    }
  }

  const fetchSignIn = async () => {
    try {
      const response = await fetch('/api/db/signin', {
        method: 'POST', // POST 요청 설정
        headers: {
          'Content-Type': 'application/json', // JSON 형식의 데이터 전송 설정
          'x-api-key': '3c55d8328925224e961b1ea623ae2b977c12cb3cbdf81cfa14578004ab3abe57',
        },
        body: JSON.stringify({
          id: email,
          password,
          /* 여기에 POST로 전송할 데이터 입력 */
        }), // 전송할 데이터를 JSON 문자열로 변환하여 설정
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const jsonData = await response.json()
      console.log('result', jsonData)
      // POST 요청에 대한 응답 데이터 처리
    } catch (error) {
      // 오류 처리
      console.error('Error fetching data:', error)
    } finally {
      // 로딩 상태 변경
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
            fetchSignIn()
          }}
        >
          Sign in
        </Button>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <span className="mr-1"></span>
          <a href="/#" onClick={fetchSignup} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>

      {errorMessage && <p className="error text-red mt-5">🔔 {errorMessage}</p>}
    </main>
  )
}

export default Homepage
