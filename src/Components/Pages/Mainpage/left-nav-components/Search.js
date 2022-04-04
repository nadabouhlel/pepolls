import React from "react";
import PostCard from "../PostCard";
import "../left-nav-components/Search.css";
import HomeNavbar from "../HomeComponents/HomeNav/HomeNavbar";
import SearchNav from "../SearchComponents/SearchNavbar/SearchNav";
import SearchNav2 from "../SearchComponents/SearchNavbar/SearchNav2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPolls from "../SearchComponents/SearchLinks/SearchPolls";
import SearchUser from "../SearchComponents/SearchLinks/SearchUser";

function Search() {
  return (
    <>
      <SearchNav />

      <div className="search-feed">
        <SearchNav2 />
        <Routes>
          <Route path="Polls" element={<SearchPolls />} />
          <Route path="User" element={<SearchUser />} />
        </Routes>
      </div>
    </>
  );
}

export default Search;
