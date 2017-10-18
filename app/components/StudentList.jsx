import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StudentItem } from './StudentItem'
class StudentList extends Component {

  constructor(props){
    super(props)



  }

  componentdidMount(){

  }

  render()  {

    return (
      <div className='container'>StudentListComponent
        <ul>
          {this.props.students
            .map(student => (
              <StudentItem student={student} key={student.id}>
                {student.name}
              </StudentItem>))}
        </ul>



      </div>
    )
  }
}

const mapState= ({students}) => ({students})

export default connect(mapState)(StudentList)
