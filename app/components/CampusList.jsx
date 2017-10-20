import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CampusItem } from './CampusItem'
import { withRouter } from 'react-router-dom'
import { postCampus } from '../reducers/index'

export class CampusList extends Component {


  componentdidMount() {

  }

  render() {

    return (
      <div className='container'>
        <h3> Campus Page </h3>
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
          <p> Create a Campus! </p>
          <form onSubmit={this.props.handleSubmit}>
              <ul>
                <li>
            <div>
              <label> Name: </label>
              <input
                name="campusName"
                type="text"
                placeholder='name' />
            </div>
            </li>
              <li>
              <div>
              <label> Image: </label>
              <input
                name="campusImage"
                type="text"
                placeholder='optional' />
              </div>


                </li>
              </ul>

            <div>
              <button type="submit"> Create Campus  </button>
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
      const name = event.target.campusName.value
      const image = event.target.campusImage.value
      dispatch(postCampus({ name, image }, ownProps.history))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(CampusList))
