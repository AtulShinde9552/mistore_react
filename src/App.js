import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import PreNavbar from './Components/PreNavbar'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import jsondata from './data/data.json'


const App = () => {
  return (
    <>
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={jsondata.banner.start}/>
      <Offers offer={jsondata.offer} />
      </Router>
    </>
  )
}

export default App