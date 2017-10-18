import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { selectStudent } from '../reducers'

export class StudentItem extends Component {


  render()  {
    console.log(selectStudent)
    console.log('Student Item Props', this.props)
    console.log('Student Item State', this.state)
    return (
      <div>StudentItemComponent {this.props.student.name}
        <NavLink

          className="student-profile-btn"
          onClick={this.props.selectStudent}
          to={`/students/${this.props.student.id}` }
          > Click {this.props.student.name} Here
          </NavLink>
      </div>
    )
  }
}

const mapState= ({selectedStudent}) => ({selectedStudent})

// const MapDispatch = { selectStudent }


export default connect(mapState)(StudentItem)
