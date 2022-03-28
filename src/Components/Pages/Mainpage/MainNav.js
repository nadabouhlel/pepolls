import React from 'react'
import {  Navbar} from '@mantine/core';
import Logo from '../../../Images/Logo.svg'
import '../Mainpage/MainNav.css'
import { Tabs } from '@mantine/core';

function MainNav() {
  return (
    <div className='nav-bottom-margin'>
        
       <Navbar 
       className='navbar' 
       width={{ base: 1920 }} 
       height={70} p="xs">
         
       <img src={Logo} alt="logo pepolls" className="logo" />
       
   
           </Navbar>

    </div>
  )
}

export default MainNav