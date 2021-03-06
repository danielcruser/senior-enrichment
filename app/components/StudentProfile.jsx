import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'
import { fetchStudent, putStudent, fetchCampuses, fetchStudents, fetchCampus, dbDeleteStudent } from '../reducers'
import CampusItem from './CampusItem'
export class StudentProfile extends Component {

  componentDidMount() {
    this.props.fetchInitialData()
  }
  render() {
    const selectedStudent = this.props.selectedStudent
    const selectedCampus = this.props.selectedCampus

    return (
      selectedStudent &&
      <div>
        <h2>"StudentProfile for" {selectedStudent.name}
        </h2>
        <form onSubmit={this.props.handleSubmit} value={selectedStudent.id}>

          <ul>
            <li>
              <label> edit name </label>
              <input
                name="studentName"
                type="text"
                placeholder={selectedStudent.name} />
            </li>
            <li>
              <label> edit email </label>
              <input
                name="studentEmail"
                type="text"
                placeholder={selectedStudent.email} />
            </li>
            <li>
              <label> edit campus </label>
              <select name="studentCampusId">
                {this.props.campuses.map(campus => <option value={campus.id} key={campus.name}>{campus.name}</option>)}
              </select>
            </li>
            <input
              readOnly="readOnly"
              value={selectedStudent.id}
              name="id"
              type="hidden"
            />
          </ul>
          <div>
            <button type="submit"> Edit Student info </button>
          </div>
        </form>
        <br />
        <h4> Deleting is Permanent! </h4>

        <form onSubmit={this.props.handleDelete}>
          <div>
            <button type="submit" name="deleteId" value={this.props.selectedStudent.id}>delete student</button>
          </div>
        </form>
      </div>)
  }
}

const mapState = function (state, ownProps) {
  return {
    ...state
  }
}

const mapDispatch = function (dispatch, ownProps) {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const name = event.target.studentName.value
      const email = event.target.studentEmail.value
      const campusId = event.target.studentCampusId.value
      const id = event.target.id.value
      dispatch(putStudent({ name, email, campusId, id }))
    },
    handleDelete(event) {
      event.preventDefault()
      const id = event.target.deleteId.value
      dispatch(dbDeleteStudent({ id }, ownProps.history))
    },
    fetchInitialData: () => {
      dispatch(fetchStudent(ownProps.match.params))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(StudentProfile))
