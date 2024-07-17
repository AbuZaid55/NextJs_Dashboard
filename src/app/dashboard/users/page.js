import Link from "next/link"
import Image from "next/image"

const Users = () => {
  const users = [
    {
      profile: "https://avatar.iran.liara.run/public/boy",
      name: "Abu Zaid",
      email: "zaid70979@gmail.com",
      createdAt: "06/04/2024",
      role: "Admin",
      status: "Online",
    },{
      profile: "https://avatar.iran.liara.run/public/boy",
      name: "Abu Zaid",
      email: "zaid70979@gmail.com",
      createdAt: "06/04/2024",
      role: "Admin",
      status: "Online",
    },{
      profile: "https://avatar.iran.liara.run/public/boy",
      name: "Abu Zaid",
      email: "zaid70979@gmail.com",
      createdAt: "06/04/2024",
      role: "Admin",
      status: "Online",
    },{
      profile: "https://avatar.iran.liara.run/public/boy",
      name: "Abu Zaid",
      email: "zaid70979@gmail.com",
      createdAt: "06/04/2024",
      role: "Admin",
      status: "Online",
    },{
      profile: "https://avatar.iran.liara.run/public/boy",
      name: "Abu Zaid",
      email: "zaid70979@gmail.com",
      createdAt: "06/04/2024",
      role: "Admin",
      status: "Online",
    },
  ]

  return (
    <table className="w-full text-center">
      <thead className="bg-color2 text-white">
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Created At</th>
          <th className="py-2">Role</th>
          <th className="py-2">Status</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, i) => {
            return <tr key={i}>
              <td className="py-2 border-b-2 border-color2 flex items-center justify-center gap-3">
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
              <td className="py-2 border-b-2 border-color2">{user.status}</td>
              <td className="py-2 border-b-2 border-color2">
                <Link className="py-1 px-2 bg-blue-600 text-white mx-1 rounded-md" href={`/dashboard/users/${i}`}>View</Link>
                <button className="h-7 px-2 rounded-md bg-red-500 text-white">Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Users
