import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { fetchStudent } from '../reducers'

export class CampusProfile extends Component {




  componentDidMount() {

  }


  render()  {

    console.log('Campus Profile Props', this.props)
    return (
      <div>CampusProfileComponent for  </div>
    )
  }
}

// const mapState= ({selectedStudent}) => ({selectedStudent})





export default connect()(CampusProfile)
