import React from 'react';

const ViewBills = () => {
  const customers = [
    { date: '2025-07-01', amount: 1200, payment: false },
    { date: '2025-07-05', amount: 800, payment: true },
    { date: '2025-07-10', amount: 450, payment: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Heading */}
      

      {/* Table Section */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-[1100px] bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Payment Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">View</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((data, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{data.date}</td>
                  <td className="px-6 py-4 font-medium text-sm text-gray-900">₹{data.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full
                        ${data.payment
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-red-100 text-red-700 border border-red-300"
                        }`}
                    >
                      {data.payment ? "Success" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-sm px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition duration-200"
                    >
                      View Bill
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      disabled={data.payment}
                      className={`text-sm px-4 py-2 rounded-md font-semibold transition duration-200
                        ${data.payment
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                    >
                      {data.payment ? "Paid" : "Make Payment"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewBills;
