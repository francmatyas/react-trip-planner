import "./Header.scss";
import { useState } from "react";

import { HiOutlineUser, HiOutlineMap } from "react-icons/hi2";
import { CreateModal } from "../Custom/Modal/Modal";

function Header(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="header">
      <h2 className="header__title">Trip Planner</h2>

      <div className="header__controls">
        <button
          className="header__button header__create"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <span>New Trip</span>
          <HiOutlineMap size={24} />
        </button>

        <button className="header__button">
          <HiOutlineUser size={24} />
        </button>
      </div>
      <CreateModal
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        onCreate={props.onCreate}
      />
    </header>
  );
}

export default Header;
