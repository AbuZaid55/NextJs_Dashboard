const AddUser = () => {
  return (
      <form className="flex flex-col items-center w-full p-4 gap-4 text-xl text-color2 h-full">
        <div className="w-full flex items-center justify-between">
          <input className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" type="text" name="name" placeholder="Name" />
          <input className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" type="text" name="email" placeholder="Email" />
        </div>
        <div className="w-full flex items-center justify-between">
          <input className="rounded-lg border-2 border-color2 py-2 px-4 w-[45%]" type="text" name="password" placeholder="Password" />
          <input className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" type="text" name="confirm_pass" placeholder="Confirm Password" />
        </div>
        <div className="w-full flex items-center justify-between">
          <input className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" type="text" name="phone" placeholder="Phone No" />
          <select className="rounded-lg border-2 border-color2 py-3 px-4 w-[45%]" name="isAdmin">
            <option value="true">Admin</option>
            <option value="false">Not Admin</option>
          </select>
        </div>
        <textarea className="rounded-lg border-2 border-color2 w-full flex-grow p-4" name="address" placeholder="Address" />
        <button className="w-full py-4 text-2xl bg-color2 text-white rounded-lg">Submit</button>
      </form>
  )
}

export default AddUser
