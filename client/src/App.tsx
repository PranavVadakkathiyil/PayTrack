import Navbar from "./layout/Navbar"
import Auth from "./pages/Auth"
import History from "./pages/History"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Auth/> */}
      {/* <Home/> */}
      <History/>
    </div>
  )
}

export default App