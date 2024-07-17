const page = () => {
  return (
    <form className="flex flex-col items-center w-full p-4 gap-4 text-xl text-color2 h-full">
      <input className="rounded-lg border-2 border-color2 py-3 px-4 w-full" type="text" name="title" placeholder="Title" />
      <input className="rounded-lg border-2 border-color2 py-3 px-4 w-full" type="text" name="price" placeholder="Price" />
      <input className="rounded-lg border-2 border-color2 py-3 px-4 w-full" type="text" name="stock" placeholder="Stock" />
      <textarea className="rounded-lg border-2 border-color2 w-full flex-grow p-4" name="desc" placeholder="Description" />
      <button className="w-full py-3 text-2xl bg-color2 text-white rounded-lg">Update</button>
    </form>
  )
}

export default page
