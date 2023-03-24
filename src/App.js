import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import PreNavbar from './Components/PreNavbar'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import StarProduct from './Components/StarProduct'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu'
import jsondata from './data/data.json'


const App = () => {
  return (
    <>
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={jsondata.banner.start}/>
      <Offers offer={jsondata.offer} />
      <Heading text={'STAR PRODUCTS '} />
      <StarProduct starproduct={jsondata.starProduct} />
      <Heading text={'HOT ACCESSORIES '} />
      <HotAccessoriesMenu />
      </Router>
    </>
  )
}

export default App