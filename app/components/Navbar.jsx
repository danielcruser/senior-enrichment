import React from 'react';
import { NavLink } from 'react-router-dom';



export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink className="student-list-btn" to={`/students`}> Students </NavLink>
          </li>
          <li>
            <NavLink className="campus-list-btn" to={`/campuses`}> Campuses </NavLink>
          </li>
        </ul>
      </div>)
  }
}
