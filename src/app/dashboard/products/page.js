import Link from "next/link"
import Image from "next/image"
import { FaPlus } from "react-icons/fa6";

const page = () => {
  const products = [
    {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    }, {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    }, {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    }, {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    }, {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    }, {
      profile: "https://avatar.iran.liara.run/public/boy",
      title: "Sumsung Phone 21",
      desc: "the leue asdf lasdf saf sdafsd afasdf sadf sadfs dafasdf dsafsdaf",
      price: "999",
      createdAt: "06/04/2024",
      stock: "30",
    },
  ]

  return (
    <>
    <table className="w-full text-center">
      <thead className="bg-color2 text-white">
        <tr>
          <th className="py-3">Title</th>
          <th className="py-3">Description</th>
          <th className="py-3">Price</th>
          <th className="py-3">Created At</th>
          <th className="py-3">Stock</th>
          <th className="py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, i) => {
            return <tr key={i}>
              <td className="py-1 border-b-2 border-color2 flex items-center justify-center gap-3">
                <Image
                  src={product.profile}
                  width="50"
                  height="50"
                  alt="Profile Pic" />
                {product.title}
              </td>
              <td className="py-2 border-b-2 border-color2">{product.desc.slice(0,20)}...</td>
              <td className="py-2 border-b-2 border-color2">${product.price}</td>
              <td className="py-2 border-b-2 border-color2">{product.createdAt}</td>
              <td className="py-2 border-b-2 border-color2">{product.stock}</td>
              <td className="py-2 border-b-2 border-color2">
                <Link className="py-1 px-2 bg-blue-600 text-white mx-1 rounded-md" href={`/dashboard/products/${i}`}>View</Link>
                <button className="h-7 px-2 rounded-md bg-red-500 text-white">Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    <div className="flex items-center justify-end"><Link href="/dashboard/products/add" className="p-2 bg-color2 text-white m-4 text-4xl rounded-full cursor-pointer shadow-md"><FaPlus/></Link></div>
    </>
  )
}

export default page
