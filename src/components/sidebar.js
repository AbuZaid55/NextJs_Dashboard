"use client"
import {Zilla_Slab,Kalam} from 'next/font/google'
import { usePathname } from 'next/navigation'
import Link from "next/link"

const quickSand = Zilla_Slab({
    subsets: ['latin'],
    weight:"400"
})
const kalam = Kalam({
    subsets: ['latin'],
    weight:"700"
})

const Sidebar = () => {
  const path = usePathname().split('/')
    let pathname = path[path.length-1]
    let style = ' hover:bg-color2 hover:text-white py-2 px-4 cursor-pointer'
  return (
    <div className='h-screen p-4 flex'>
      <div className="bg-color1 w-64 shadow-lg rounded-xl">
      <div className={`${quickSand.className} mb-8 px-4 py-6 border-b-2 border-color2`}>
        <p className={`${kalam.className} -mb-3 text-color2`}>NextJs</p> 
        <p className='text-4xl'>Dashboard</p>
    </div>

      <ul className={`${quickSand.className} text-2xl flex flex-col gap-5`}>
        <li className={`${pathname==="dashboard"?"bg-color2 text-white":""} ${style}`}><Link href="/dashboard">Dashboard</Link></li>
        <li className={`${pathname==="users"?"bg-color2 text-white":""} ${style}`}><Link href="/dashboard/users">Users</Link></li>
        <li className={`${pathname==="products"?"bg-color2 text-white":""} ${style}`}><Link href="/dashboard/products">Products</Link></li>
        <li className={`${pathname==="transactions"?"bg-color2 text-white":""} ${style}`}><Link href="/dashboard/transactions">Transactions</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
