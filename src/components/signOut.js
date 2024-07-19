"use client"
import {signOut} from 'next-auth/react'
const SignOut = () => {
  return (
    <button onClick={()=>{signOut("credentials")}} className=" bg-color2 text-white py-2 px-3 rounded-lg shadow-md mt-8">SignOut</button>
  )
}

export default SignOut
