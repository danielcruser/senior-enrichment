import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
// import { fetchStudent } from '../reducers'

export class CampusItem extends Component {


  render() {

    return (
      <div> {this.props.campus.name}
        <NavLink
          className="campus-profile-btn"
          to={`/campuses/${this.props.campus.id}`} >
          {this.props.campus.name}
        </NavLink>
      </div>)
  }
}

const mapState = function (state) {
  return {
    ...state,
    campus: state.selectedCampus
  }
}



export default withRouter(connect(mapState)(CampusItem))
