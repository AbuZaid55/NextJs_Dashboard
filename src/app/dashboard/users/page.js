import Link from "next/link"
import Image from "next/image"
import { FaPlus } from "react-icons/fa6";
import  getUsers  from "@/actions/getUsers";

const Users = async() => {
  const res = await getUsers()  
  const users = res.users
  return (
    <>
    <table className="w-full text-center">
      <thead className="bg-color2 text-white">
        <tr>
          <th className="py-3">Name</th>
          <th className="py-3">Email</th>
          <th className="py-3">Created At</th>
          <th className="py-3">Role</th>
          <th className="py-3">Status</th>
          <th className="py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, i) => {
            return <tr key={i}>
              <td className="py-1 border-b-2 border-color2 flex items-center justify-center gap-3">
                <Image
                  src={user.profile}
                  width="50"
                  height="50"
                  alt="Profile Pic" />
                {user.name}
              </td>
              <td className="py-2 border-b-2 border-color2">{user.email}</td>
              <td className="py-2 border-b-2 border-color2">{user.createdAt}</td>
              <td className="py-2 border-b-2 border-color2">{user.role}</td>
              <td className={`py-2 border-b-2 font-semibold border-color2 ${user.isActive?"text-color2":""}`}>{(user.isActive)?"Online":"Offline"}</td>
              <td className="py-2 border-b-2 border-color2">
                <Link className="py-1 px-2 bg-blue-600 text-white mx-1 rounded-md" href={`/dashboard/users/${i}`}>View</Link>
                <button className="h-7 px-2 rounded-md bg-red-500 text-white">Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    <div className="flex items-center justify-end"><Link href="/dashboard/users/add" className="p-2 bg-color2 text-white m-4 text-4xl rounded-full cursor-pointer shadow-md"><FaPlus/></Link></div>
    </>
  )
}

export default Users
