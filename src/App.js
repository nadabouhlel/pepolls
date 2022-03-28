import { React, useEffect, useState } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./Components/Pages/EditProfile";
import Login from "./Components/Login";
import OTP from "./Components/OTP";
import ProtectedRoute from "./Components/ProtectedRoute";
import Verify from "./Components/Verify";
import { useMoralis } from "react-moralis";
import MainPage from "./Components/Pages/Mainpage/MainPage";
import Home from "./Components/Pages/Mainpage/left-nav-components/Home";
import Search from "./Components/Pages/Mainpage/left-nav-components/Search";
import LeftNav from "./Components/Pages/Mainpage/LeftNav";



function App() {

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
  useMoralis();

useEffect(() => {
  if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isAuthenticated, isWeb3Enabled]);



if (isAuthenticated ) {

  console.log('eyh tekhdem');
 

} 


  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/otp" element={<OTP />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          
          <Route exact path="/mainpage/*" element={<MainPage />} />

         
        </Route>

      </Routes>
      {isAuthenticated ? 
      console.log('nada hahi hne')
      :console.log('nada mechi hne') 
}
</div>
    </BrowserRouter>
  );
}

export default App;
