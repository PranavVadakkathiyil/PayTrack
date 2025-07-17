import Data from "../components/Data"
import ListCustomer from "../components/Listing"
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