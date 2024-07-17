"use client"
import { Kalam } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdMessage } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

const kalam = Kalam({
  subsets: ['latin'],
  weight: "700"
})

const Navbar = () => {
  const [pathname, setPathname] = useState('')
  const path = usePathname().split('/')
  useEffect(() => {
    if (path.length === 4 && path[3]!="add") {
      if (path[2] === "users") {
        setPathname('Update User')
      }
      if (path[2] === "products") {
        setPathname("Update Product")
      }
    } 
    else if(path.length === 4 && path[3]==="add"){
      if(path[2]==="users"){
        setPathname("Add User")
      }
      if(path[2]==="products"){
        setPathname("Add Product")
      }
    }
    else {
      setPathname(path[path.length - 1])
    }
  }, [path])
  return (
    <div className=' bg-color1 text-color2 p-4 m-4 ml-0 rounded-xl shadow-lg flex items-center justify-between'>
      <div className={`${kalam.className} text-3xl capitalize`}>
        {pathname}
      </div>
      <div className='flex items-center justify-center gap-3 text-xl'>
        <div className='flex bg-color2 text-white items-center justify-center gap-2 py-1 px-2 rounded-xl'>
          <IoIosSearch/>
          <input className='bg-color2 text-white' type="text" placeholder='Search...' />
        </div>
        <MdMessage className='cursor-pointer text-2xl'/>
        <BsFillBellFill className='cursor-pointer text-2xl'/>
        <BiWorld className='cursor-pointer text-2xl'/>
      </div>
    </div>
  )
}

export default Navbar
