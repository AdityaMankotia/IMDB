import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Watchlist from "./Components/Watchlist"
import {Route, Routes} from 'react-router-dom'
import './App.css'
import WatchListContextWrapper from "./context/WatchListContext"
import { Provider } from "react-redux"
import store from './redux/store'
import { Fragment } from "react"
import ThemeToggle from "./Components/ThemeToggle"

function App() {

  return (
    <>
    <Provider store={store}>
    <Fragment>
    <Navbar />
    <ThemeToggle />
    <WatchListContextWrapper>
    <Routes>
      <Route path='/' element= {<Home></Home>} />
      <Route path='/watchlist' element= {<Watchlist></Watchlist>} />
    </Routes>
    </WatchListContextWrapper>
    </Fragment>
    </Provider>
    </>
  )
}

export default App
