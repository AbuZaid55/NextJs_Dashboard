"use client"
import {Kalam} from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const kalam = Kalam({
    subsets: ['latin'],
    weight:"700"
})

const Navbar = () => {
    const [pathname,setPathname]=useState('')
    const path = usePathname().split('/')
    useEffect(()=>{
      if(path.length===4){
        if(path[2]==="users"){
          setPathname('Update User')
        }
        if(path[2]==="products"){
          setPathname("Update Product")
        }
      }else{
        setPathname(path[path.length-1])
      }
    },[path])
  return (
    <div className={`${kalam.className} bg-color1 text-color2 text-3xl p-4 m-4 ml-0 rounded-xl shadow-lg flex items-center capitalize`}>
      {pathname}
    </div>
  )
}

export default Navbar
