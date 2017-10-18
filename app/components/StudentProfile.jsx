import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchStudent } from '../reducers'

export class StudentProfile extends Component {



  componentDidMount() {

  }


  render()  {

    console.log('Student Profile Props', this.props)
    return (
      <div>StudentProfileComponent for  </div>
    )
  }
}

const mapState= ({selectedStudent}) => ({selectedStudent})





export default connect(mapState)(StudentProfile)
