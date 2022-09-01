import React from 'react'
import { NavLink } from "react-router-dom";
const Homes = () => {
  return (
    <>
   Click Here :  <NavLink to="/WithoutButton">Without Button Git App</NavLink>
    <br /><br /><br /><br />
  Click Here  : <NavLink to="/WithButton">With Button Git App</NavLink>
    </>
  )
}

export default Homes;
