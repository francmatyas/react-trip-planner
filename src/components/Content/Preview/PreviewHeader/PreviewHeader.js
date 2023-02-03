import "./PreviewHeader.scss";
import { useState } from "react";

import { TextareaAutosize } from "@mui/material";

import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";

import { DeleteModal } from "../../../Custom/Modal/Modal";
import { DeleteSnackbar } from "../../../Custom/Snackbar/Snackbar";
import ClickAwayListener from "@mui/base/ClickAwayListener";

function PreviewHeader(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const title = props.title;
  const description = props.description;
  //const [title, setTitle] = useState(props.title);
  //const [description, setDescription] = useState(props.description);

  function setIsEditingHandler() {
    setIsEditing(!isEditing);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsEditing(false)}>
      <div
        onDoubleClick={() => {
          !isEditing && setIsEditing(!isEditing);
        }}
        className="preview__header"
      >
        <div className="preview__title">
          {isEditing ? (
            <input
              className="preview__input"
              type="text"
              placeholder="Edit trip title"
              value={title}
             /*  onChange={(event) => setTitle(event.target.value)} */
            />
          ) : (
            title
          )}
          <div className="preview__controls">
            {isEditing && (
              <button
                onClick={() => setShowModal(true)}
                className="preview__button preview__delete"
              >
                <HiOutlineTrash size={24} />
              </button>
            )}
            <button onClick={setIsEditingHandler} className="preview__button">
              {isEditing ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlinePencil size={24} />
              )}
            </button>
          </div>
        </div>
        <div className="preview__description">
          {isEditing ? (
            <TextareaAutosize
              className="preview__input"
              placeholder="Edit trip description"
              value={description}
              /* onChange={(event) => setDescription(event.target.value)} */
            />
          ) : (
            description
          )}
        </div>
        <DeleteModal
          show={showModal}
          onHide={setShowModal}
          onDelete={() => setShowSnackbar(true)}
        />
        <DeleteSnackbar
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
        />
      </div>
    </ClickAwayListener>
  );
}

export default PreviewHeader;
