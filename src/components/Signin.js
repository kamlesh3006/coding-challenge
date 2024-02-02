import React from 'react'
import '../css/Signin.css'

export default function Signin() {
  return (
        <div className='bg-gray-100 min-h-full'>
            <div className='container w-[32rem]'>
                <h1 className='items-center text-xl justify-center m-auto'>Sign in to your account</h1>
                <form className='p-12 bg-white rounded-lg'>
                    <div className='flex flex-col items-start font-normal text-sm'>
                    <label>Email address</label>
                    <input className=' my-2 py-1 px-2 border w-full rounded'></input>
                    <label>Password</label>
                    <input className='my-2 py-1 px-2 border w-full rounded'></input>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <div>
                            <input type='checkbox' className='mr-2'></input>
                            <label className='text-sm'>Remember Me</label>
                        </div>
                        <div>
                            <a href='#' className='text-blue-600 font-medium'>Forgot Password?</a>
                        </div>
                    </div>
                    <button className='w-full bg-blue-600 rounded-md py-1 text-white'>Sign in</button>
                    <p className='my-2'>Or continue with</p>
                    <div className='flex justify-between my-2'>
                        <button className='w-1/2 bg-blue-600 rounded-md py-1 text-white mr-1'>Google</button>
                        <button className='w-1/2 bg-blue-600 rounded-md py-1 text-white ml-1'>Github</button>
                    </div>
                </form>
                <h1>Not a member? <a href='#' className='font-medium text-blue-600'>Signup</a></h1>
            </div>
        </div>
  )
}
