import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEnvelope, } from 'react-icons/fa'
import { MdLock } from 'react-icons/md'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold'>
            <span className='text-blue-600'>OctaFusion</span>Labs
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-blue-600 mb-2'>Sign in to Account</h2>
            <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
            <div className='flex justify-center my-2'>
              <a href='#' className='border-gray-300 border-2 rounded-full p-3 mx-1  hover:bg-blue-600 hover:text-white'>
                <FaFacebookF className='text-sm' />
              </a>
              <a href='#' className='border-gray-300 border-2 rounded-full p-3 mx-1  hover:bg-blue-600 hover:text-white'>
                <FaLinkedinIn className='text-sm' />
              </a>
              <a href='#' className='border-gray-300 border-2 rounded-full p-3 mx-1  hover:bg-blue-600 hover:text-white'>
                <FaGoogle className='text-sm' />
              </a>
            </div>
            <p className='text-blue-400 font-semibold my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-2'>
                <FaEnvelope className='text-gray-400' />
                <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm pl-2 flex-1' />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-2'>
                <MdLock className='text-gray-400' />
                <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm pl-2 flex-1' />
              </div>
              <div className='flex justify-between w-64 mb-5'>
                <label className='flex items-center text-xs'>
                  <input type='checkbox' name='remember' className='mr-1' />Remember me
                </label>
                <a href='#' className='text-xs'>Forgot Password?</a>
              </div>
              <a href='#' className='border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white'>
                SIGN IN</a>
            </div>
          </div>
        </div>
        <div className='w-2/5  bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hello,Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className='mb-8'>Fill up personal information and start journey with us.</p>
          <a href='#' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600'>SIGN UP</a>
        </div>
      </div>
    </main>
  )
}
