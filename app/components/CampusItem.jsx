import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink} from 'react-router-dom'
// import { fetchStudent } from '../reducers'

export class CampusItem extends Component {


  render()  {


    return (

      <div> {this.props.campus.name }
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

const mapState = function(state){
  return {
    ...state,
    campus: state.selectedCampus
  }
}
const mapDispatch = function(dispatch, ownProps) {

  return {

        fetchInitialData: () =>{
          // dispatch(fetchCampus(ownProps.match.params))

          const test = ownProps
          console.log('looking for campusIdAgain', test)
          // dispatch(fetchCampus({campusId: 2} ))
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(CampusItem))
