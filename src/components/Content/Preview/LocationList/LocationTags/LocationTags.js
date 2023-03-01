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

function LocationTags() {
  return (
    //<ClickAwayListener>
    <div id="location-tags">
      <Tooltip title="Adventure">
        <button className="location-tags__tag">
          <MdOutlineSailing size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Food">
        <button className="location-tags__tag location-tags__tag--active">
          <MdOutlineRestaurantMenu size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Hotel">
        <button className="location-tags__tag">
          <MdOutlineHotel size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Photo">
        <button className="location-tags__tag">
          <MdOutlinePhotoCamera size={24} />
        </button>
      </Tooltip>
      <Tooltip title="Mountain">
        <button className="location-tags__tag">
          <TbMountain size={24} />
        </button>
      </Tooltip>
    </div>
    // </ClickAwayListener>
  );
}

export default LocationTags;
