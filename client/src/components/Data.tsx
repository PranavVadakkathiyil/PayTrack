
const Data = () => {
  
  const data = [
    { heading: "Total Earnings", color: "bg-amber-200", value: 24 },
    { heading: "Total Pendings", color: "bg-green-200 ", value: 24 },
    { heading: "Total Customer", color: "bg-blue-200", value: 24 },
    { heading: "Total Earnings Today", color: "bg-red-200", value: 24 },
  ]
  return (
    <div>
      <div className='grid sm:grid-cols-4 grid-cols-1 p-3 gap-3'>
        {
          data.map((data, i) => (
            <div key={i} className={`col-span-1 flex flex-col justify-between rounded-sm shadow-lg ${data.color} p-4 h-25`}>
              <p className="text-right text-sm text-gray-600 font-medium">{data.heading}</p>
              <div className="flex items-center justify-center flex-1">
                <p className="text-4xl sm:text-5xl font-bold text-gray-800">{data.value}</p>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Data