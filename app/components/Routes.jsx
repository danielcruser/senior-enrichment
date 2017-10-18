import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import store from '../store'
import fetchStudents from '../reducers/index'
import StudentList from './StudentList'
import CampusList from './CampusList'
import Root from './Root'
export default class Routes extends Component {


  componentDidMount() {
    store.dispatch(fetchStudents)
    const state = store.getState()
  }



  render() {
    console.log(store.getState())
    return (
      <Root>
        <Router>
          <Switch>
            <Route path='/students' component={StudentList} />
            <Route path='/campuses' component={CampusList} />
          </Switch>
        </Router>
      </Root>
    )
  }
}



<Router>
<Switch>
  <Route path='/students' component={StudentList} />
  <Route path='/campuses' component={CampusList} />
</Switch>
</Router>
