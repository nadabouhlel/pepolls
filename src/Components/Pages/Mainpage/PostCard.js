import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import blackpost from "../../../Images/blackpost.jpg";
import yesvote from "../../../Images/yesvote.svg";
import novote from "../../../Images/novote.svg";
import { Avatar, AvatarsGroup } from "@mantine/core";
import nada from "../../../Images/nada.jpg";
import "./PostCard.css";
import us from "../../../Images/us.jpg";
import Stack from "@mui/material/Stack";
import stat from "../../../Images/stat.svg";
import debate from "../../../Images/debate.svg";
import share from "../../../Images/share.svg";
import trend from "../../../Images/trend.svg";
import yesvotetrue from "../../../Images/yesvotetrue.svg";
import novotetrue from "../../../Images/novotetrue.svg";
import trendtrue from "../../../Images/trendtrue.svg";

export default function PostCard() {
  const [likeactive, setLikeactive] = useState(false);
  const [dislikeactive, setDislikeactive] = useState(false);
  const [trendactive, setTrendactive] = useState(false);

  function trendF() {
    if (trendactive) {
      setTrendactive(false);
    } else {
      setTrendactive(true);
    }
  }

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
  console.log("vote pour : ", likeactive);

  console.log("vote contre : ", dislikeactive);

  return (
    <Card className="post-card">
      <div className="user-info">
        <Avatar className="avatar" src={nada} alt="no image here" />
        <p className="user-name">Nada Bo</p>
      </div>

      <CardContent className="card-content">
        <div className="image-card">
          <img className="image-post" src={blackpost} alt="logo pepolls" />

          <div>
            {(() => {
              if (likeactive) {
                return (
                  <div className="vote-icon">
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
                  <div className="vote-icon">
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
                  <div className="vote-icon">
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

        <AvatarsGroup className="avatar-group" limit={3} total={10}>
          <Avatar
            src={us}
            component="a"
            href="https://mantine.dev/core/avatar/"
          />
          <Avatar src={nada} />
          <Avatar src={us} />
          {/* ...other items */}
        </AvatarsGroup>

        <div className="post-icons-stack">
          <Stack direction="row" spacing={1}>
            <img src={stat} alt="logo pepolls" />
            <img src={debate} alt="logo pepolls" />
            <img src={share} alt="logo pepolls" />

            <div>
              {trendactive ? (
                <div onClick={trendF}>
                  {" "}
                  <img src={trendtrue} alt="logo pepolls" />
                </div>
              ) : (
                <div onClick={trendF}>
                  {" "}
                  <img src={trend} alt="logo pepolls" />
                </div>
              )}
            </div>

          </Stack>
        </div>
      </CardContent>
    </Card>
  );
}
