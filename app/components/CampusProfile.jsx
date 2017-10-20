import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchStudent } from '../reducers'
import { Link, withRouter } from 'react-router-dom'
import {
  fetchStudents, fetchCampus, dbDeleteCampus, dbDeleteStudent, putCampus
} from '../reducers'
import { StudentItem } from './StudentItem'

export class CampusProfile extends Component {

  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    const selectedCampus = this.props.selectedCampus

    return (
      selectedCampus &&
      <div>
        <div>  <h2>Detailed Profile for {selectedCampus.name}</h2></div>
        <div>
          <h4> Currently Enrolled Students </h4>
          <ul>
            {this.props.students.filter(student => student.campusId == selectedCampus.id)
              .map(student => (<li key={student.email}>
                <StudentItem student={student} >
                  {student.name}
                </StudentItem>
                <form onSubmit={this.props.handleStudentDelete}>
                  <div>
                    <button type="submit" name="deleteId" value={student.id} >delete student</button>
                  </div>
                </form>
              </li>))}
          </ul>
        </div>
        <br />
        <h2> Update Campus Info </h2>
        <form onSubmit={this.props.handleSubmit} value={selectedCampus.id}>
          <div>
            <ul>
              <li>
            <label> Desired Campus Name: </label>
            <input
              name="campus"
              type="text"
              placeholder={selectedCampus.name} />
              </li>
              <li>
            <label> Desired Campus Image: </label>
            <input
              name="campusImage"
              type="test"
              placeholder={selectedCampus.image} />
              </li>
              </ul>
            <input
              readOnly="readOnly"
              value={selectedCampus.id}
              name="id"
              type="hidden"
            />
          </div>
          <div>
            <button type="submit"> Submit updated campus info </button>
          </div>
        </form>
        <form onSubmit={this.props.handleDelete}>
          <div>
            <p> You must delete all Students in order to delete a campus!</p>
            <button type="submit" name="deleteId" value={this.props.selectedCampus.id}>delete campus</button>
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
      const name = event.target.campusName.value
      const image = event.target.campusImage.value
      const id = event.target.id.value
      dispatch(putCampus({ name, image, id }))
    },
    handleDelete(event) {
      event.preventDefault()
      const id = event.target.deleteId.value
      dispatch(dbDeleteCampus({ id }, ownProps.history))
    },
    handleStudentDelete(event) {
      event.preventDefault()
      const id = event.target.deleteId.value
      dispatch(dbDeleteStudent({ id }, ownProps.history))
    },
    fetchInitialData: () => {
      dispatch(fetchCampus(ownProps.match.params))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(CampusProfile))
