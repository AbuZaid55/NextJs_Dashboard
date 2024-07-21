"use client"
import axios from "axios";
import getuserbyid from "@/actions/getuserbyid"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const fetchUser = async(_id)=>{
  try {
    const res = await getuserbyid(id)
    return res
  } catch (error) {
    return error
  }
}

const UpdateUser = () => {
  const { id } = useParams()
  const [data, setData] = useState({ name: "", phone: "", isAdmin: false, address: "" })
  const router = useRouter()

  const updateUser = async () => {
    try {
      const res = await axios.post("/api/updateuser", {_id:id,...data})
      if(res?.data?.success){
        toast.success(res.data.message)
        router.push("/dashboard/users")
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message)
    }
  }


const handleInput = (e) => {
  setData({ ...data, [e.target.name]: e.target.value })
}

useEffect(() => {
  (async function () {
    const res = await getuserbyid(id)
    if(res.success){
      const user = res.user
      setData(user)
    }
  })()
}, [id])
return (
  <form action={updateUser} className="flex flex-col items-center w-full p-4 gap-4 text-xl text-color2 h-full">
      <input value={data.name} onChange={handleInput} className="rounded-lg border-2 border-color2 py-3 px-4 w-full" type="text" name="name" placeholder="Name" />
    <div className="w-full flex items-center justify-between">
      <input value={data.phone} onChange={handleInput} className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" type="text" name="phone" placeholder="Phone No" />
      <select value={data.isAdmin} onChange={handleInput} className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" name="isAdmin">
        <option value="true">Admin</option>
        <option value="false">Not Admin</option>
      </select>
    </div>
    <textarea value={data.address} onChange={handleInput} className="rounded-lg border-2 border-color2 w-full flex-grow p-4" name="address" placeholder="Address" />
    <button type="submit" className="w-full py-3 text-2xl bg-color2 text-white rounded-lg">Update</button>
  </form>
)
}

export default UpdateUser
