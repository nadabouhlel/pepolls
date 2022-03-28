import React from "react";
import PostCard from "../PostCard";
import "../left-nav-components/Search.css";
import HomeNavbar from "../HomeComponents/HomeNav/HomeNavbar";
import SearchNav from "../SearchComponents/SearchNavbar/SearchNav";
function Search() {
  return (
    <>
      <SearchNav />

      <div className="trends-feed">
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}

export default Search;
