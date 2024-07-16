import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
const Layout = ({children}) => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex flex-col flex-grow">
        <Navbar/>
        <div className="flex-grow bg-color1 rounded-xl p-4 mb-4 mr-4 shadow-lg overflow-y-scroll hide-scrollbar h-[calc(100vh-16rem)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
