import React from 'react'
import Head from "next/head";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const HeaderTop = () => {
  return (

    <>
    <Head>
      <title>My Next.js App</title>
      <meta name="description" content="A simple Next.js app with TypeScript and Tailwind CSS" />
    </Head>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Hello, Next.js! 👋</h1>
        <p className="mt-2 text-gray-700">This is a simple Next.js app using TypeScript and Tailwind CSS.</p>
      </div>
    </div>
 
    <div className="border-b border-gray-200 hidden sm:block">
    <div className="container py-4">
      <div className="flex justify-between items-center">
        <div className='hidden lg:flex gap-1' >
          <div className='header_top_icon-wrapper'>
           <FaFacebook />
          </div>
          <div className='header_top_icon-wrapper'>
            <FaTwitterSquare />
          </div>
          <div className='header_top_icon-wrapper'>
            <FaInstagramSquare />
          </div>
           <div className="header_top_icon-wrapper">
          <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
  
}

export default HeaderTop