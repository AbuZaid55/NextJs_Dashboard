const Transaction = () => {
  const users = [
    {
      name: "Abu Zaid",
      status: "pending",
      createdAt: "06/04/2024",
      amount: "999"
    }, {
      name: "Abu Zaid",
      status: "done",
      createdAt: "06/04/2024",
      amount: "999"
    }, {
      name: "Abu Zaid",
      status: "cancelled",
      createdAt: "06/04/2024",
      amount: "999"
    }, {
      name: "Abu Zaid",
      status: "pending",
      createdAt: "06/04/2024",
      amount: "999"
    },
  ]

  return (
    <table className="w-full text-center">
      <thead className="bg-color2 text-white">
        <tr>
          <th className="py-3">Name</th>
          <th className="py-3">Status</th>
          <th className="py-3">createdAt</th>
          <th className="py-3">Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, i) => {
            return <tr key={i}>
              <td className="py-3 border-b-2 border-color2">{user.name}</td>
              <td className={"py-2 border-b-2 border-color2 capitalize text-white"}>
                <span className={`${user.status === "pending" ? "bg-yellow-500" : (user.status === "done" ? "bg-blue-600" : "bg-red-600")} py-1 px-2 rounded-md inline-block w-24 overflow-hidden`}>{user.status}</span>
              </td>
              <td className="py-2 border-b-2 border-color2">{user.createdAt}</td>
              <td className="py-2 border-b-2 border-color2">${user.amount}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Transaction
