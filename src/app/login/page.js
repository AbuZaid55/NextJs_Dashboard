"use client"
import { useState } from "react"
import {signIn} from 'next-auth/react'

const Login = () => {
  const [data,setData]=useState({email:"",password:""})

  const submitForm = async()=>{
    try {
      const res =  await signIn("credentials",{
        redirect:false,
        email:data.email,
        password:data.password
      })
      if(res.error){
        console.log(res.error)
      }else{
        console.log(res)
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  const handleInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div>
      Log In
      <form onSubmit={submitForm}>
        <input onChange={handleInput} value={data.email} type="text" name="email" placeholder="Enter your email"/>
        <input onChange={handleInput} value={data.password} type="text" name="password" placeholder="Enter your password"/>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
