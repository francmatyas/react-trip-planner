import "./LocationTags.scss";
import { Tooltip } from "@mui/material";
import { ClickAwayListener } from "@mui/base";

import {
  MdOutlineSailing,
  MdOutlineRestaurantMenu,
  MdOutlineHotel,
  MdOutlinePhotoCamera,
} from "react-icons/md";

import { TbMountain } from "react-icons/tb";

function LocationTags(props) {
  if (props.show) {
    return (
      <ClickAwayListener onClickAway={() => props.onHide()}>
        <div id="location-tags">
          <span id="location-tags__header">Click to select</span>
          <div id="location-tags__container">
            <Tooltip title="Adventure">
              <button
                onClick={() => {
                  props.onTagsEdit({
                    ...props.tags,
                    adventure: !props.tags.adventure,
                  });
                }}
                className={
                  props.tags.adventure
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
                  props.onTagsEdit({
                    ...props.tags,
                    food: !props.tags.food,
                  });
                }}
                className={
                  props.tags.food
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
                  props.onTagsEdit({
                    ...props.tags,
                    hotel: !props.tags.hotel,
                  });
                }}
                className={
                  props.tags.hotel
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
                  props.onTagsEdit({
                    ...props.tags,
                    photo: !props.tags.photo,
                  });
                }}
                className={
                  props.tags.photo
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
                  props.onTagsEdit({
                    ...props.tags,
                    nature: !props.tags.nature,
                  });
                }}
                className={
                  props.tags.nature
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
