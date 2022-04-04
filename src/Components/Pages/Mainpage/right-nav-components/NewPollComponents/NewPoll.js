import React from "react";
import SettingsNav from "../../left-nav-components/SettingsComponents/SettingsNav";
import AddPostCard from "./AddPostCard";
function NewPoll() {
  return (
      <>
        <SettingsNav />
    <div className="poll-container">
    

      <AddPostCard />
    </div>
    </>
  );
}

export default NewPoll;
