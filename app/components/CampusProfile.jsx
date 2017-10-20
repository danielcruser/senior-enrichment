import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchStudent } from '../reducers'
import { Link, withRouter} from 'react-router-dom'
import {
  fetchStudents, fetchCampus, dbDeleteCampus, dbDeleteStudent, putCampus
} from '../reducers'
import {StudentItem} from './StudentItem'

export class CampusProfile extends Component {




  componentDidMount(){
    this.props.fetchInitialData()
  }


  render()  {
    const selectedCampus = this.props.selectedCampus


    return (
      selectedCampus &&
      <div>
      <div>CampusProfileComponent for {selectedCampus.name} </div>
      <div>
          <ul>
          {this.props.students.filter(student => student.campusId == selectedCampus.id)
            .map(student => (<div key={student.email}>
              <StudentItem student={student} >
                {student.name}
              </StudentItem>
              <form onSubmit={this.props.handleStudentDelete}>
              <div>
                <button type="submit" name="deleteId" value={student.id} >delete student</button>
                </div>
              </form>
              </div>
            ))}
        </ul>
     </div>
     <form onSubmit={this.props.handleSubmit} value={selectedCampus.id}>
     <div>
       <label> edit campus name </label>
       <input
         name = "campus"
         type= "text"
         placeholder= {selectedCampus.name}/>
       <label> edit campus image </label>
       <input

         name = "campusImage"
         type= "test"
         placeholder= {selectedCampus.image}/>
       <input
         readOnly="readOnly"
         value = {selectedCampus.id}
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
       <button type="submit" name="deleteId" value={this.props.selectedCampus.id}>delete campus</button>
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

  return {
    handleSubmit (event) {
      event.preventDefault()
      const name = event.target.campusName.value
      const image = event.target.campusImage.value
      const id = event.target.id.value
      dispatch(putCampus({ name, image, id}))

    },
    handleDelete (event) {
      event.preventDefault()
      const id = event.target.deleteId.value

      dispatch(dbDeleteCampus({ id }, ownProps.history))


    },
    handleStudentDelete (event) {
      event.preventDefault()
      const id = event.target.deleteId.value

      dispatch(dbDeleteStudent({ id }, ownProps.history))


    }
    ,

        fetchInitialData: () =>{
          // dispatch(fetchStudents())
          // dispatch(fetchCampuses())
          dispatch(fetchCampus(ownProps.match.params))

    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(CampusProfile))
