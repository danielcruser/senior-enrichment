import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CampusItem } from './CampusItem'

export class CampusList extends Component {

  constructor(props){
    super(props)



  }

  componentdidMount(){

  }

  render()  {

    return (
      <div className='container'>
        <ul>
          {this.props.campuses
            .map(campus => (
              <CampusItem campus={campus} key={campus.id}>
                {campus.name}
              </CampusItem>))}
        </ul>



      </div>
    )
  }
}

const mapState= ({campuses}) => ({campuses})

export default connect(mapState)(CampusList)
