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

export const LocationTags = {
  adventure: { title: "Adventure", icon: <MdOutlineSailing size={24} /> },
  food: { title: "Food", icon: <MdOutlineRestaurantMenu size={24} /> },
  hotel: { title: "Hotel", icon: <MdOutlineHotel size={24} /> },
  photo: { title: "Photo", icon: <MdOutlinePhotoCamera size={24} /> },
  nature: { title: "Nature", icon: <TbMountain size={24} /> },
};

function TagsEditor(props) {
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
            {Object.keys(LocationTags).map((tag, index) => {
              return (
                <Tooltip title={LocationTags[tag].title} key={index + "tag"}>
                  <button
                    onClick={() => {
                      setTags({
                        ...tags,
                        [tag]: !tags[tag],
                      });
                    }}
                    className={
                      tags[tag]
                        ? "location-tags__tag location-tags__tag--active"
                        : "location-tags__tag"
                    }
                  >
                    {LocationTags[tag].icon}
                  </button>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </ClickAwayListener>
    );
  } else {
    return <></>;
  }
}

export default TagsEditor;
