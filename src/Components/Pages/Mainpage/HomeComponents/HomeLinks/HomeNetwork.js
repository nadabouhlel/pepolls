import React from "react";
import PostCard from "../../PostCard";
import '../../left-nav-components/Home.css'
import Statistics from '../../Post-interactions/Statistics'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomeNetwork() {
  return (
    <div className='home-network-feed'>
      <PostCard />
      <PostCard />
    </div>
  );
}

export default HomeNetwork;
