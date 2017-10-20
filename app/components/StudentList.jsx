import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { StudentItem } from './StudentItem'
import { postStudent } from '../reducers/index'

class StudentList extends Component {

  render() {
    return (
      <div className='container'>
        <h3> Student Page </h3>
        <ul>
          {this.props.students
            .map(student => (
              <StudentItem student={student} key={student.id} />))}
        </ul>
        <br />
        <br />
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <div> Create A Student!
              <ul>
                <li>
                  <label> Name </label>
                  <input
                    name="studentName"
                    type="text"
                    placeholder='name' />
                </li>
                <li>
                  <label> Email </label>
                  <input
                    name="studentEmail"
                    type="text"
                    placeholder='email' />
                </li>
                <li>
                  <label> Choose an existing Campus! </label>
                  <select name="studentCampusId">
                    {this.props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>)}
                  </select>
                </li>
              </ul>
            </div>
            <div>
              <button type="submit"> Create Student  </button>
            </div>
          </form>
        </div>
      </div>)
  }
}

const mapState = (state) => ({ ...state })

const mapDispatch = function (dispatch, ownProps) {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const name = event.target.studentName.value
      const email = event.target.studentEmail.value
      const campusId = event.target.studentCampusId.value
      dispatch(postStudent({ name, email, campusId }, ownProps.history))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(StudentList))
