import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import history from '../history';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> This is the NavBar
      <ul>
      <li>
      <NavLink
      className="student-list-btn"
      to={`/students` }
      > Students
      </NavLink>
      </li>
      <li>
      <NavLink
      className="campus-list-btn"
      to={`/campuses` }
      > Campuses
      </NavLink>
      </li>
      </ul>
      </div>
    )
  }

}
