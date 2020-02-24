import React from "react";
import "./styles.css";

const NavMenu = { name: "Home", link: "#home", isActive: true };
const NavMenu2 = { name: "Services", link: "#services", isActive: false };
const NavMenu3 = { name: "Contact", link: "#contact", isActive: false };

const NavItem = props => (
  <h2>
    <a className="nav-item" href={props.item.link}>
      {props.item.name}
    </a>
  </h2>
);
const NavItem1 = props => (
  <h2>
    <a className="nav-item" href={props.item.link}>
      {props.item.name}
      <div className="drop">
        <li>for entrepreneurs</li>
        <li>for students</li>
        <li>for hobbyist</li>
      </div>
    </a>
  </h2>
);

export default function App() {
  return (
    <div className="App">
      <NavItem item={NavMenu} />
      <NavItem1 item={NavMenu2} />
      <NavItem item={NavMenu3} />
    </div>
  );
}
