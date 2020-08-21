import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton
        onClick={() => {
          window.location.reload(false);
        }}
      >
        <ReplayIcon
          fontSize="large"
          className="swipeButton__repeat"
        ></ReplayIcon>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButton__left"></CloseIcon>
      </IconButton>
      <IconButton>
        <StarRateIcon
          fontSize="large"
          className="swipeButton__star"
        ></StarRateIcon>
      </IconButton>
      <IconButton>
        <FavoriteIcon
          fontSize="large"
          className="swipeButton__right"
        ></FavoriteIcon>
      </IconButton>
      <IconButton>
        <FlashOnIcon
          fontSize="large"
          className="swipeButton__lightning"
        ></FlashOnIcon>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
