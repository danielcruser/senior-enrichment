import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { StudentItem } from './StudentItem'
import { postStudent} from '../reducers/index'
class StudentList extends Component {


  componentdidMount(){

  }

  render()  {
    return (
      <div className='container'>
        <ul>
          {this.props.students
            .map(student => (
              <StudentItem student={student} key={student.id}>
                {student.name}
              </StudentItem>))}
        </ul>
        <br />
        <br />
        <div>
            <form onSubmit={this.props.handleSubmit}>
            <div>
              <label> create name </label>
              <input
                name = "studentName"
                type= "text"
                placeholder= 'name' />
              <label> create email </label>
              <input

                name = "studentEmail"
                type= "text"
                placeholder= 'email'/>
              <label> choose campus </label>
              <select name="studentCampusId">
                {this.props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>)}
              </select>
            </div>
            <div>
              <button type="submit"> Create Student  </button>
            </div>
          </form>

        </div>



      </div>
    )
  }
}

const mapState= (state) => ({...state})

const mapDispatch = function(dispatch, ownProps){

  return {
  handleSubmit(event){
      event.preventDefault()
      const name = event.target.studentName.value
      const email = event.target.studentEmail.value
      const campusId = event.target.studentCampusId.value
      console.log(name, email, campusId)
      dispatch(postStudent({name, email, campusId}, ownProps.history))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(StudentList))
