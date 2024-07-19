import Transaction from "@/components/Transaction"
const Dashboard = async() => {
  return (
    <>
    <h1 className="text-3xl bg-color2 text-white px-4 py-2 mb-1">Latest Transactions</h1>
    <Transaction/>
    </>
  )
}

export default Dashboard
