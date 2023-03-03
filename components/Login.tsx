'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center ' >
      <Image 
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        className='rounded'
      />
      <button onClick={() => signIn("google")} className='text-xl text-white animate-pulse cursor-pointer'>
        Sign In To Use ChatGPT Messenger
      </button>
    </div>
  )
}

export default Login