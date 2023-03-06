import "./LocationTags.scss";
import { Tooltip } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import { useState } from "react";

import {
  MdOutlineSailing,
  MdOutlineRestaurantMenu,
  MdOutlineHotel,
  MdOutlinePhotoCamera,
} from "react-icons/md";

import { TbMountain } from "react-icons/tb";

function LocationTags(props) {
  const [tags, setTags] = useState(props.tags);

  if (props.show) {
    return (
      <ClickAwayListener
        onClickAway={() => {
          props.onTagsEdit(tags);
          props.onHide();
        }}
      >
        <div id="location-tags">
          <span id="location-tags__header">Click to select</span>
          <div id="location-tags__container">
            <Tooltip title="Adventure">
              <button
                onClick={() => {
                  setTags({
                    ...tags,
                    adventure: !tags.adventure,
                  });
                }}
                className={
                  tags.adventure
                    ? "location-tags__tag location-tags__tag--active"
                    : "location-tags__tag"
                }
              >
                <MdOutlineSailing size={24} />
              </button>
            </Tooltip>
            <Tooltip title="Food">
              <button
                onClick={() => {
                  setTags({
                    ...tags,
                    food: !tags.food,
                  });
                }}
                className={
                  tags.food
                    ? "location-tags__tag location-tags__tag--active"
                    : "location-tags__tag"
                }
              >
                <MdOutlineRestaurantMenu size={24} />
              </button>
            </Tooltip>
            <Tooltip title="Hotel">
              <button
                onClick={() => {
                  setTags({
                    ...tags,
                    hotel: !tags.hotel,
                  });
                }}
                className={
                  tags.hotel
                    ? "location-tags__tag location-tags__tag--active"
                    : "location-tags__tag"
                }
              >
                <MdOutlineHotel size={24} />
              </button>
            </Tooltip>
            <Tooltip title="Photo">
              <button
                onClick={() => {
                  setTags({
                    ...tags,
                    photo: !tags.photo,
                  });
                }}
                className={
                  tags.photo
                    ? "location-tags__tag location-tags__tag--active"
                    : "location-tags__tag"
                }
              >
                <MdOutlinePhotoCamera size={24} />
              </button>
            </Tooltip>
            <Tooltip title="Nature">
              <button
                onClick={() => {
                  setTags({
                    ...tags,
                    nature: !tags.nature,
                  });
                }}
                className={
                  tags.nature
                    ? "location-tags__tag location-tags__tag--active"
                    : "location-tags__tag"
                }
              >
                <TbMountain size={24} />
              </button>
            </Tooltip>
          </div>
        </div>
      </ClickAwayListener>
    );
  } else {
    return <></>;
  }
}

export default LocationTags;
