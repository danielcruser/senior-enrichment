import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { fetchStudent } from '../reducers'

export class StudentItem extends Component {

  render() {
    return (
      <div>
        <NavLink className="student-profile-btn" to={`/students/${this.props.student.id}`}>
          {this.props.student.name}
        </NavLink>
      </div>)
  }
}

const mapState = function (state) {
  return {
    ...state,
    students: state.students
  }
}


export default withRouter(connect(mapState, null)(StudentItem))
