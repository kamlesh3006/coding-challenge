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
        <section className="md:-my-20 -my-4">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white shadow-lg md:mt-0 sm:max-w-md py-4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                  <div className='flex'>
                      <input type="text" name="fname" id="fname" className="mr-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" placeholder="First Name" required=""/>
                      <input type="text" name="lname" id="lname" className="ml-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" placeholder="Last Name" required=""/>
                  </div>
                  <div>
                      {/* <label for="email" className="block text-start mb-2 text-sm font-medium text-gray-900">Your email</label> */}
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" placeholder="Your email" required=""/>
                  </div>
                  <div>
                      {/* <label for="password" className="block text-start mb-2 text-sm font-medium text-gray-900">Password</label> */}
                      <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-400" required=""/>
                  </div>
                  <div>
                      {/* <label for="confirm-password" className="block text-start mb-2 text-sm font-medium text-gray-900">Confirm password</label> */}
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" required=""/>
                  </div>
                  <div className='flex w-full'>
                  <div className="relative mr-1 w-1/3">
  <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400">
    <option value="" disabled selected className="text-gray-500">Year</option>
    <option value="FE">FE</option>
    <option value="SE">SE</option>
    <option value="TE">TE</option>
    <option value="BE">BE</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </div>
</div>
{/* <input type="text" name="year" id="year" placeholder="Year" className="w-2/5 mr-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" required=""/>
<input type="text" name="branch" id="branch" placeholder="Branch" className="ml-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" required=""/> */}
<div className="relative ml-1 w-full">
  <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-gray-400">
    <option value="" disabled selected className="text-gray-500">Branch</option>
    <option value="Co">Computer</option>
    <option value="IT">Information Technology</option>
    <option value="Me">Mechanical</option>
    <option value="Ci">Civil</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </div>
</div>
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
