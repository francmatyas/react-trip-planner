import "./Header.scss";

import {HiOutlineUser} from "react-icons/hi2";

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">Trip Planner</h2>
      <button className="header__button">
        <HiOutlineUser size={24} />
      </button>


    </header>
  );
}

export default Header;
