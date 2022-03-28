import React from "react";
import PostCard from "../PostCard";
import "../left-nav-components/Home.css";
import { Navbar } from "@mantine/core";
import Logo from "../../../../Images/Logo.svg";
import MainNav from "../MainNav";
import HomeNavbar from "../HomeComponents/HomeNav/HomeNavbar";
import HomeNetwork from "../HomeComponents/HomeLinks/HomeNetwork";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTopics from "../HomeComponents/HomeLinks/HomeTopics";
import HomeTrends from "../HomeComponents/HomeLinks/HomeTrends";

function Home() {
  return (
    <>
      <HomeNavbar />

      <div className="home">
        <Routes>
          <Route path="Network" element={<HomeNetwork />} />
          <Route path="Topics" element={<HomeTopics />} />
          <Route path="Trending" element={<HomeTrends />} />
        </Routes>
      </div>
    </>
  );
}

export default Home;
