import { FaPlus } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="w-full gray-100">
        <div className="flex items-center justify-between px-3 py-1 border-b-2">
            <p className="logo-style text-4xl ">PAYTRACK</p>
            <ul className="flex">
                <li>
                    <p className="w-10 h-10 border rounded-full"></p>
                </li>
                <li>
                    <p className="w-10 h-10 border rounded-full flex items-center justify-center"><FaPlus/></p>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar