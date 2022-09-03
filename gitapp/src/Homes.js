import React from 'react'
import { NavLink, Link } from "react-router-dom";
const Homes = () => {
  return (
    <>
      Click Here :  <NavLink to="/WithoutButton">Without Button Git App</NavLink>
      <br /><br /><br /><br />
      Click Here  : <NavLink to="/WithButton">With Button Git App</NavLink><br /><br />
      Click Here  : <Link to="DatawithClass">With Class Button Git App</Link>
    </>
  )
}

export default Homes;
