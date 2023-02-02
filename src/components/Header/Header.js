import "./Header.scss";

import { HiOutlineUser } from "react-icons/hi2";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">Trip Planner</h2>
      {/* <InputGroup className="header__search">
        <Form.Control
          className="header__input"
          type="text"
          placeholder="Search for a trip"
        />
      </InputGroup> */}

      <div className="header__controls">

      <button className="header__button header__create">
        New Trip
      </button>

      <button className="header__button">
        <HiOutlineUser size={24} />
      </button>
      </div>
    </header>
  );
}

export default Header;
