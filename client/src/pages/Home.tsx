import Data from "../components/Data"
import ListCustomer from "../components/ListCustomer"
import Navbar from "../layout/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Data/>
        <ListCustomer/>
    </div>
  )
}

export default Home