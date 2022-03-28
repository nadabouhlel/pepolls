import React from "react";
import PostCard from "../../PostCard";
import '../../left-nav-components/Home.css'
function HomeNetwork() {
  return (
    <div className='home-network-feed'>
      <PostCard />
      <PostCard />
    </div>
  );
}

export default HomeNetwork;
