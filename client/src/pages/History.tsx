
const History = () => {
    let date = new Date().toDateString()
    const customers = [
        { date: date, amount: 2000, Payment: true, img: "url" },
    ]
    return (
        <div>
            <div className="flex items-center justify-center p-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-200 sm:px-6 px-4 py-4 mt-4 rounded-lg shadow-md bg-white w-full max-w-3xl mx-auto">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src="https://www.svgrepo.com/show/271333/man-hair-head.svg"
                            alt="avatar"
                            className="w-16 h-16 rounded-full border border-gray-300"
                        />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Pranav V</p>
                            <a href="tel:9562840801" className="text-blue-600 underline text-sm hover:text-blue-800">
                                9562840801
                            </a>
                        </div>
                    </div>

                    {/* Payment Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                        <p className="px-3 py-1 rounded-full text-green-800 bg-green-100 border border-green-400 text-center font-medium">
                            Paid: ₹30,00,00,00,00,000
                        </p>
                        <p className="px-3 py-1 rounded-full text-red-800 bg-red-100 border border-red-400 text-center font-medium">
                            Pending: ₹4,00,00,00,000
                        </p>
                        <button className="px-3 py-1 rounded-full  bg-black text-white border  text-center font-medium">Add Bill</button>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center ">
                <div className=" overflow-x-auto p-3">
                    <table className="sm:min-w-[1200px] min-w-[600px] divide-y divide-gray-200 bg-white shadow-md rounded-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment</th>

                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bill</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customers.map((data, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {data.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold">{data.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 "><p className={`border px-2 py-1 rounded text-center inline-block
  ${data.Payment ? "border-green-500 text-green-600 bg-green-100" : "border-red-500 text-red-600 bg-red-100"}`}>
                                        {data.Payment ? "Success" : "Pending"}
                                    </p></td>

                                    <td className="px-6 py-4 text-sm text-white font-semibold">
                                        <button className="px-4 py-2 bg-black rounded-sm">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>





            </div>
        </div>
    )
}

export default History