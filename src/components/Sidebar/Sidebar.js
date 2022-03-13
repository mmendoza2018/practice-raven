import React from 'react'
import "./sidebar.css";
import logo from "../../image/logo.svg";
import lines from "../../image/lines.svg";
import widget from "../../image/widgets.svg";

const Sidebar = () => {
  return (
    <aside className='container__sidebar'>
      <div className='item__sidebar__logo'>
        <img src={logo} alt="logo raven"></img>
      </div>
      <ul className='item__sidebar__list'>
        <li> <img src={widget} alt='lines'></img>  DASHBOARD</li>
        <li><img src={lines} alt='widget'></img> MY TASK</li>
      </ul>
    </aside>
  )
}

export default Sidebar
