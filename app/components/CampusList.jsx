import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CampusItem } from './CampusItem'
import { withRouter} from 'react-router-dom'
import { postCampus} from '../reducers/index'

export class CampusList extends Component {


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
      <br />
      <br />
      <div>
          <form onSubmit={this.props.handleSubmit}>
          <div>
            <label> create name </label>
            <input
              name = "campusName"
              type= "text"
              placeholder= 'name' />

          </div>
          <div>
            <button type="submit"> Create Campus  </button>
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
    const name = event.target.campusName.value

    console.log(name, ownProps)
    dispatch(postCampus({name}, ownProps.history))
  }
}
}

export default withRouter(connect(mapState, mapDispatch)(CampusList))
