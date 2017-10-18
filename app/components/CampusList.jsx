import React, { Component } from 'react';
import { connect } from 'react-redux'
class CampusList extends Component {

  constructor(props){
    super(props)
  }

  componentdidMount(){

  }

  render()  {

    return (
      <div className='container'>CampusList
        <ul>
          {this.props.campuses.map(campus => <li key={campus.id}> {campus.name} </li>)}
        </ul>



      </div>
    )
  }
}

const mapState= ({campuses}) => ({campuses})

export default connect(mapState)(CampusList)
