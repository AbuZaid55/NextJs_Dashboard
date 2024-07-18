"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignUp = () => {
  const router = useRouter()
  const [data,setData]=useState({name:"",email:"",phone:"",password:"",address:""})
  const submitForm = async()=>{
    try {
      const res =  await axios.post("/api/signup",data)
      console.log(res?.data?.message)
      router.push("/login")
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  const handleInput=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div>
      Signup
      <form action={submitForm}>
        <input onChange={handleInput} value={data.name} type="text" name="name" placeholder="Enter your name"/>
        <input onChange={handleInput} value={data.email} type="text" name="email" placeholder="Enter your email"/>
        <input onChange={handleInput} value={data.password} type="text" name="password" placeholder="Enter your password"/>
        <input onChange={handleInput} value={data.phone} type="text" name="phone" placeholder="Enter your phone no"/>
        <input onChange={handleInput} value={data.address} type="text" name="address" placeholder="Enter your address"/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
