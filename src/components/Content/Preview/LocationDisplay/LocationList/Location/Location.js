import "./Location.scss";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import LocationTags from "./LocationTags/LocationTags";

import {
  HiArrowDown,
  HiArrowUp,
  HiOutlineTrash,
  HiOutlineTag,
  HiOutlineEnvelope,
} from "react-icons/hi2";

function Location(props) {
  const location = props.location;
  const index = props.index;

  const [tagEdit, setTagEdit] = useState(false);
  const [noteEdit, setNoteEdit] = useState(false);
  const [note, setNote] = useState(location.note);

  const noteMaxLength = 50;

  function noteEditHandler() {
    setNoteEdit(false);

    props.onListChange(index, {
      ...location,
      note: note,
    });
  }

  function tagsEditHandler(newTags) {
    props.onListChange(index, { ...location, tags: newTags });
  }

  return (
    <div className="location">
      <span>{index + 1 + "."}</span>
      <span>{location?.display_name}</span>

      <Tooltip title="Note">
        <button
          onClick={() => {
            noteEdit && noteEditHandler();
            setNoteEdit(!noteEdit);
          }}
          className="preview__button"
        >
          <HiOutlineEnvelope size={24} />
        </button>
      </Tooltip>

      <Tooltip title="Tag">
        <button
          onClick={() => {
            setTagEdit(!tagEdit);
          }}
          className="preview__button"
        >
          <HiOutlineTag size={24} />
        </button>
      </Tooltip>

      <Tooltip title="Delete location">
        <button
          onClick={() => props.onDelete(index)}
          className="preview__button preview__delete"
        >
          <HiOutlineTrash size={24} />
        </button>
      </Tooltip>
      {props.count > 1 && (
        <div>
          {index === 0 ? (
            <></>
          ) : (
            <Tooltip title="Move Up">
              <button
                onClick={() => props.onMoveUp(index)}
                className="preview__button"
              >
                <HiArrowUp size={16} />
              </button>
            </Tooltip>
          )}
          {index === props.count - 1 ? (
            <></>
          ) : (
            <Tooltip title="Move Down">
              <button
                onClick={() => props.onMoveDown(index)}
                className="preview__button"
              >
                <HiArrowDown size={16} />
              </button>
            </Tooltip>
          )}
        </div>
      )}

      {noteEdit ? (
        <ClickAwayListener
          onClickAway={() => {
            noteEdit && noteEditHandler();
          }}
        >
          <div className="location__note__edit">
            <input
              className="location__note-text"
              placeholder="Note"
              value={note}
              onChange={(e) =>
                e.target.value.length <= noteMaxLength &&
                setNote(e.target.value)
              }
            />
            <span
              className="location__note__chars"
              //style={location.node.length > 100 && { color: "red" }}
            >
              {`Characters ${note.length}/${noteMaxLength}`}
            </span>
          </div>
        </ClickAwayListener>
      ) : (
        <div className="location__note">
          <span>{note}</span>
        </div>
      )}

      <LocationTags
        show={tagEdit}
        onHide={() => setTagEdit(false)}
        onTagsEdit={tagsEditHandler}
        tags={location.tags}
      />
    </div>
  );
}
export default Location;
