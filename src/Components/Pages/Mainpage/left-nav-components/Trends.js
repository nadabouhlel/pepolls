import React from 'react'
import PostCard from '../PostCard'
import HomeNavbar from '../HomeComponents/HomeNav/HomeNavbar'
import MainNav from '../MainNav'
import {  Navbar} from '@mantine/core';
import Logo from '../../../../Images/Logo.svg'
import TrendsNav from '../TrendsComponents/TrendsNavbar/TrendsNav';
import '../left-nav-components/Trends.css'
function Trends() {
  return (
<>

<TrendsNav />
    <div className='trends-feed'>
<PostCard />
<PostCard />



    </div>
 </>   
  )
}

export default Trends