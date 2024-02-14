import React from 'react'
import Navbar from './Navbar'

export default function Profile() {
  return (
    <div>
        <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" />
    </div>
  )
}
