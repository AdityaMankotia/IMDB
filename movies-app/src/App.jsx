import Home from "../Components/Home"
import Navbar from "../Components/Navbar"
import Watchlist from "../Components/Watchlist"
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element= {<Home></Home>} />
      <Route path='/watchlist' element= {<Watchlist></Watchlist>} />
    </Routes>
    </>
  )
}

export default App
