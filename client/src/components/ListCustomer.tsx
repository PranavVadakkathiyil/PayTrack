
const ListCustomer = () => {
    let img = "https://www.svgrepo.com/show/271333/man-hair-head.svg"
    const customers = [
        { img: img, name: "Babu", phone: "8848692600", paid: 3000, pending: 2000 },
    ]
    return (
        <div>
            <div>
                <div className="w-full overflow-x-auto p-3">
                    <table className="sm:min-w-[1200px] min-w-[600px] divide-y divide-gray-200 bg-white shadow-md rounded-sm">
                        <thead className="bg-amber-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Paid</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pending</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">History</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {customers.map((data, i) => (
                                <tr key={i} className="hover:bg-amber-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={data.img} alt="img" className="w-10 h-10 rounded-full border" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{data.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{data.phone}</td>
                                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">₹{data.paid}</td>
                                    <td className="px-6 py-4 text-sm text-red-500 font-semibold">₹{data.pending}</td>
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

export default ListCustomer