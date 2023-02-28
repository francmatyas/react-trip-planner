import "./LocationTags.scss";
import { Tooltip } from "@mui/material";

import {
  MdOutlineSailing,
  MdOutlineRestaurantMenu,
  MdOutlineHotel,
  MdOutlinePhotoCamera,
} from "react-icons/md";

import { TbMountain } from "react-icons/tb";

function LocationTags() {
  return (
    <div id="location-tags">
      <button className="location-tags__tag">
        <Tooltip title="Adventure">
          <MdOutlineSailing size={24} />
        </Tooltip>
      </button>
      <button className="location-tags__tag">
        <Tooltip title="Food">
          <MdOutlineRestaurantMenu size={24} />
        </Tooltip>
      </button>
      <button className="location-tags__tag">
        <Tooltip title="Hotel">
          <MdOutlineHotel size={24} />
        </Tooltip>
      </button>
      <button className="location-tags__tag">
        <Tooltip title="Photo">
          <MdOutlinePhotoCamera size={24} />
        </Tooltip>
      </button>
      <button className="location-tags__tag">
        <Tooltip title="Mountain">
          <TbMountain size={24} />
        </Tooltip>
      </button>
    </div>
  );
}

export default LocationTags;
