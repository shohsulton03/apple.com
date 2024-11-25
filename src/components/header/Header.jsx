import React from 'react'
import "./Header.scss"
import {LINKS} from "../../static"
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
    const linkItems = LINKS.map((item) => (
        <li className="navbar__item" key={item.id}>
            <span>{item.link}</span>
        </li>
    ))
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <FaApple className="navbar__logo" />
          <ul className="navbar__collection">{linkItems}</ul>
          <IoIosSearch className="navbar__icon" />
          <MdOutlineShoppingBag className="navbar__icon" />
        </nav>
      </div>
    </header>
  );
}

export default Header