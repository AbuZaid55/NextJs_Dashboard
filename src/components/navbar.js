"use client"
import {Kalam} from 'next/font/google'
import { usePathname } from 'next/navigation'

const kalam = Kalam({
    subsets: ['latin'],
    weight:"700"
})

const Navbar = () => {
    const path = usePathname().split('/')
    let pathname = path[path.length-1]
  return (
    <div className={`${kalam.className} bg-color1 text-color2 text-3xl p-4 m-4 ml-0 rounded-xl shadow-lg flex items-center capitalize`}>
      {pathname}
    </div>
  )
}

export default Navbar
