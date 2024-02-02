import React from 'react'
import Navbar from './Navbar'
import googleLogo from './google.png'
import githubLogo from './github.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
        <Navbar to="/signin" btn="Sign in"/>
        <div className="diagonal-partition"></div>
        <section className="-my-20">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white shadow-lg md:mt-0 sm:max-w-md py-4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block text-start mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="example@email.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block text-start mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block text-start mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-blue-600 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                  <p className="text-sm font-light text-gray-500">
                      Already have an account? <Link to="/signin" className="font-medium text-blue-600 hover:underline">Sign in</Link>
                  </p>
                  <p className="text-sm font-light text-gray-500">
                      or you can sign in with
                  </p>
                  <div className='flex'>
                  <button type="submit" className=" flex items-center justify-center w-1/2 ml-1 text-gray-600 border hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><img src={googleLogo} alt='Google Logo' className='h-6 w-6 mr-2'/>Google</button>
                  <button type="submit" className=" flex items-center justify-center w-1/2 ml-1 text-gray-600 border hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><img src={githubLogo} alt='Google Logo' className='h-6 w-6 mr-2'/>Github</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}
