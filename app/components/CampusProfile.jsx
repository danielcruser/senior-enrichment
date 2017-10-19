import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchStudent } from '../reducers'
import { Link, withRouter} from 'react-router-dom'
import {
  fetchStudents, fetchCampus
} from '../reducers'
import {StudentItem} from './StudentItem'

export class CampusProfile extends Component {




  componentDidMount(){
    this.props.fetchInitialData()
  }


  render()  {
    const selectedCampus = this.props.selectedCampus
    console.log('Campus Profile Props', this.props)

    return (
      selectedCampus &&
      <div>
      <div>CampusProfileComponent for {selectedCampus.name} </div>
      <div>
          <ul>
          {this.props.students.filter(student => student.campusId == selectedCampus.id)
            .map(student => (
              <StudentItem student={student} key={student.id}>
                {student.name}
              </StudentItem>))}
        </ul>
     </div>
      </div>
    )
  }
}

const mapState = function(state, ownProps){
  return {
    ...state
  }
}
const mapDispatch = function(dispatch, ownProps) {
  console.log('CampusownProps', ownProps)
  return {
    handleSubmit (event) {
      // event.preventDefault()
      // const name = event.target.studentName.value
      // const email = event.target.studentEmail.value
      // const campusId = event.target.studentCampusId.value
      // const id = event.target.id.value
      // dispatch(putStudent({ name, email, campusId, id}))

    },
    handleDelete (event) {
      event.preventDefault()
      const id = event.target.deleteId.value

      dispatch(dbDeleteStudent({ id }, ownProps.history))


    },
        fetchInitialData: () =>{
          // dispatch(fetchStudents())
          // dispatch(fetchCampuses())
          dispatch(fetchCampus(ownProps.match.params))

    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(CampusProfile))
