import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
// import { fetchStudent } from '../reducers'

export class CampusItem extends Component {


  render()  {


    console.log('Campus Item Props', this.props)
    console.log('Campus Item State', this.state)
    return (
      <div> {this.props.campus.name}
        <NavLink

          className="campus-profile-btn"
          // onClick={this.props.fetchStudent}
          to={`/campuses/${this.props.campus.id}` }
          > {this.props.campus.name}
          </NavLink>
      </div>
    )
  }
}




export default connect()(CampusItem)
