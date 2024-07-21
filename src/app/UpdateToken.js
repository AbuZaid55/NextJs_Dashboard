"use client"
import { useEffect } from "react"
import { signIn } from "next-auth/react"

const update = async(user)=>{
  try {
    await signIn("credentials",{
      redirect:false,
      _id:user._id
    })
  } catch (err) {
    console.log(err)
  }
}

const UpdateToken = ({session}) => {
    useEffect(()=>{
        if(session?.user){
         update(session.user)
        }
    },[])
  return (<></>
  )
}

export default UpdateToken
