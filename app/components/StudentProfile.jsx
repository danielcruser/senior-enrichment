import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link, withRouter} from 'react-router-dom'
import { fetchStudent, putStudent, fetchCampuses, fetchStudents, fetchCampus, dbDeleteStudent} from '../reducers'
import CampusItem from './CampusItem'
export class StudentProfile extends Component {
  componentDidMount(){
    this.props.fetchInitialData()
  }



  render(){

    // const selectedStudent = this.props.students.find(student => student.id == this.props.selectedStudent)
    const selectedStudent = this.props.selectedStudent
    const selectedCampus = this.props.selectedCampus
    console.log('looking for campuses', this.props.campuses.filter(campus => campus.id === selectedStudent.campusId))
    console.log('looking for history', history)
    return (
     selectedStudent &&

      <div>
        <div>"StudentProfile for" {selectedStudent.name}, a student at { this.props.campuses.filter(campus => campus.id === selectedStudent.campusId).map(campus => (<CampusItem campus={campus} key={campus.id}>{campus.name}</CampusItem>)) }




      </div>
      <form onSubmit={this.props.handleSubmit} value={selectedStudent.id}>
        <div>
          <label> edit name </label>
          <input
            name = "studentName"
            type= "text"
            placeholder= {selectedStudent.name}/>
          <label> edit email </label>
          <input

            name = "studentEmail"
            type= "text"
            placeholder= {selectedStudent.email}/>
          <label> edit campus </label>
          <select name="studentCampusId">
          {this.props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>)}
        </select>
          <input
            readOnly="readOnly"
            value = {selectedStudent.id}
            name = "id"
            type= "hidden"
            />
        </div>
        <div>
          <button type="submit"> Edit Student info </button>
        </div>
      </form>

      <form onSubmit={this.props.handleDelete}>
      <div>
        <button type="submit" name="deleteId" value={this.props.selectedStudent.id}>delete student</button>
        </div>
      </form>

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
  console.log('ownProps', ownProps)
  return {
    handleSubmit (event) {
      event.preventDefault()
      const name = event.target.studentName.value
      const email = event.target.studentEmail.value
      const campusId = event.target.studentCampusId.value
      const id = event.target.id.value
      dispatch(putStudent({ name, email, campusId, id}))

    },
    handleDelete (event) {
      event.preventDefault()
      const id = event.target.deleteId.value

      dispatch(dbDeleteStudent({ id }, ownProps.history))


    },
        fetchInitialData: () =>{
          // dispatch(fetchStudents())
          // dispatch(fetchCampuses())
          dispatch(fetchStudent(ownProps.match.params))

          const test = ownProps
          console.log('looking for campusId', test)

    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(StudentProfile))