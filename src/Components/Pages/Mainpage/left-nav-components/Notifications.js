import React from 'react'
import PostCard from '../PostCard'
import NottificationNav from '../NotificationComponents/NotificationNavbar/NotificationNav'
import HomeNavbar from '../HomeComponents/HomeNav/HomeNavbar'
import UpdatesNotification from '../NotificationComponents/NotificationLinks/UpdatesNotification'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DebatesNotifications from '../NotificationComponents/NotificationLinks/DebatesNotifications'
import RequestesNotifications from '../NotificationComponents/NotificationLinks/RequestesNotifications'

function Notifications() {
  return (
    <>
    <NottificationNav />
    <div className="home">
        <Routes>
          <Route path="Updates" element={<UpdatesNotification />} />
          <Route path="Debates" element={<DebatesNotifications />} />
          <Route path="Requests" element={<RequestesNotifications />} />

        </Routes>
      </div>
  </>  
  
  )
}

export default Notifications