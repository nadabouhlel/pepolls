import React, { useState } from "react";
import { Avatar, AvatarsGroup } from "@mantine/core";
import nada from "../../../../../Images/nada.jpg";
import blackpost from "../../../../../Images/blackpost.jpg";
import "../../left-nav-components/Notifications.css";
import yesvotetrue from "../../../../../Images/yesvotetrue.svg";
import novotetrue from "../../../../../Images/novotetrue.svg";
import yesvote from "../../../../../Images/yesvote.svg";
import novote from "../../../../../Images/novote.svg";


function NotifUpdatesCard() {
  const [likeactive, setLikeactive] = useState(false);
  const [dislikeactive, setDislikeactive] = useState(false);
  const [trendactive, setTrendactive] = useState(false);

  

  function likeF() {
    if (likeactive) {
      setLikeactive(false);
    } else {
      setLikeactive(true);
      if (dislikeactive) {
        setDislikeactive(false);
      }
    }
  }

  function dislikeF() {
    if (dislikeactive) {
      setDislikeactive(false);
    } else {
      setDislikeactive(true);
      if (likeactive) {
        setLikeactive(false);
      }
    }
  }
  return (
    <div className="requests-card-container">
      <div>
        <div className="notif-update-header">
          <Avatar className="avatar" src={blackpost} alt="no image here" />
          <div className="notif-update-text-header">
            <div>
              <span>User name </span>
            </div>
            <div className="notif-update-time">Name and surname </div>
          </div>
          
        </div>
      </div>
      <div>
            {(() => {
              if (likeactive) {
                return (
                  <div className="notif-requests-vote-buttons">
                    <div onClick={likeF}>
                      <button className="vote">
                        <img
                          src={yesvotetrue}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                    <div onClick={dislikeF}>
                      <button className="vote">
                        <img
                          src={novote}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                  </div>
                );
              } else if (dislikeactive) {
                return (
                  <div className="notif-requests-vote-buttons">
                    <div onClick={likeF}>
                      <button className="vote">
                        <img
                          src={yesvote}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                    <div onClick={dislikeF}>
                      <button className="vote">
                        <img
                          src={novotetrue}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="notif-requests-vote-buttons">
                    <div onClick={likeF}>
                      <button className="vote">
                        <img
                          src={yesvote}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                    <div onClick={dislikeF}>
                      <button className="vote">
                        <img
                          src={novote}
                          alt="logo pepolls"
                          className="novote"
                        />
                      </button>
                    </div>
                  </div>
                );
              }
            })()}
          </div>
    </div>
  );
}

export default NotifUpdatesCard;
