import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './left-nav-components/Home'
import LeftNav from './LeftNav'
import PostCard from './PostCard'
import Search from './left-nav-components/Search'
import MainNav from './MainNav'
import '../Mainpage/MainPage.css'
import ProfileCard from '../../Pages/Mainpage/right-nav-components/ProfileCard'
import RightNav from './right-nav-components/RightNav'
import Trends from './left-nav-components/Trends'
import Messages from './left-nav-components/Messages'
import Notifications from './left-nav-components/Notifications'
import HomeNavbar from './HomeComponents/HomeNav/HomeNavbar'
import AddPostCard from './right-nav-components/NewPollComponents/AddPostCard'
import NewPoll from './right-nav-components/NewPollComponents/NewPoll'

function MainPage() {
  return (
    
<div className='grid'>
 {/* <MainNav />   */}

  <LeftNav /> 
<RightNav />
  

<Routes>
<Route  path="Home/*" element={<Home />} />
<Route  path="Search/*" element={<Search />} />
<Route  path="Trends" element={<Trends />} />
<Route  path="Messages" element={<Messages />} />
<Route  path="Notifications/*" element={<Notifications />} />
<Route  path="NewPoll" element={<NewPoll />} />


<Route  path="nada" element={<HomeNavbar />} />




</Routes>




</div>
  )
}

export default MainPage