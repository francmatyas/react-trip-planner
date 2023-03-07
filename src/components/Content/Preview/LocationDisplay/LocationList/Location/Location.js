import "./Location.scss";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import TagsEditor from "./LocationTags/LocationTags";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  HiArrowDown,
  HiArrowUp,
  HiOutlineTrash,
  HiOutlineTag,
  HiOutlineEnvelope,
} from "react-icons/hi2";

function Location(props) {
  const {
    location,
    index,
    count,
    onListChange,
    onDelete,
    onMoveUp,
    onMoveDown,
  } = props;

  const [tagEdit, setTagEdit] = useState(false);
  const [noteEdit, setNoteEdit] = useState(false);
  const [note, setNote] = useState(location.note);
  const noteMaxLength = 50;

  function dateEditHandler(newDate) {
    onListChange(index, {
      ...location,
      date: newDate.format("YYYY-MM-DD"),
    });
  }

  function noteEditHandler() {
    setNoteEdit(false);

    onListChange(index, {
      ...location,
      note: note,
    });
  }

  function tagsEditHandler(newTags) {
    onListChange(index, { ...location, tags: newTags });
  }

  return (
    <div className="location">
      <span>{index + 1 + "."}</span>
      <span>{location?.display_name}</span>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Pick a date"
            value={dayjs(location.date)}
            onChange={dateEditHandler}
          />
        </DemoContainer>
      </LocalizationProvider>

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
          onClick={() => onDelete(index)}
          className="preview__button preview__delete"
        >
          <HiOutlineTrash size={24} />
        </button>
      </Tooltip>
      {count > 1 && (
        <div>
          {index === 0 ? (
            <></>
          ) : (
            <Tooltip title="Move Up">
              <button
                onClick={() => onMoveUp(index)}
                className="preview__button"
              >
                <HiArrowUp size={16} />
              </button>
            </Tooltip>
          )}
          {index === count - 1 ? (
            <></>
          ) : (
            <Tooltip title="Move Down">
              <button
                onClick={() => onMoveDown(index)}
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
              style={note.length >= noteMaxLength ? { color: "#f05758" } : {}}
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

      <TagsEditor
        show={tagEdit}
        onHide={() => setTagEdit(false)}
        onTagsEdit={tagsEditHandler}
        tags={location.tags}
      />
    </div>
  );
}
export default Location;
