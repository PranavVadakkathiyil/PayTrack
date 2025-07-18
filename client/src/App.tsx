import Navbar from "./layout/Navbar"
import Addbill from "./pages/Addbill"
import Auth from "./pages/Auth"
import History from "./pages/History"
import Home from "./pages/Home"
import UserHome from "./pages/User/UserHome"
import ViewBills from "./pages/User/ViewBills"

const App = () => {
  return ( 
    <div>
      <Navbar/>
      <Auth/>
      <Home/>
      <History/>
      <Addbill/>
      <UserHome/>
      <ViewBills/>
    </div>
  )
}

export default App