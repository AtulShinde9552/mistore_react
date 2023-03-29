import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PreNavbar from './Components/PreNavbar'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import StarProduct from './Components/StarProduct'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu'
import jsondata from './data/data.json'
import HotAccessories from './Components/HotAccessories'

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
        <Routes>
        <Route path='/music' element ={<HotAccessories music={jsondata.hotAccessories.music} musicCover={jsondata.hotAccessoriesCover.music} />} /> 
        <Route path='/smartDevice' element={<HotAccessories smartDevice={jsondata.hotAccessories.smartDevice} smartDeviceCover ={jsondata.hotAccessoriesCover.smartDevice} />} />
        <Route path='/home' element={<HotAccessories home={jsondata.hotAccessories.home} homeCover ={jsondata.hotAccessoriesCover.home} />} />
        <Route path='/lifestyle' element={<HotAccessories lifeStyle={jsondata.hotAccessories.lifeStyle} lifeStyleCover ={jsondata.hotAccessoriesCover.lifeStyle} />} />
        <Route path='/mobileAccessories' element={<HotAccessories mobileAccessories={jsondata.hotAccessories.mobileAccessories} mobileAccessoriesCover ={jsondata.hotAccessoriesCover.mobileAccessories} />} />



        </Routes>
       
      </Router>
      
    </>
  )
}

export default App