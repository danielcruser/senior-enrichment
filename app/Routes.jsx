import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import StudentList from './components/StudentList'
import StudentItem from './components/StudentItem'
import StudentProfile from './components/StudentProfile'
import CampusList from './components/CampusList'
import CampusProfile from './components/CampusProfile'
import Root from './components/Root'
import { fetchStudents, fetchCampuses, fetchStudent } from './reducers'

class Routes extends Component {

  componentDidMount() {
    this.props.fetchInitialData()
  }
  render() {
    return (
      <Router >
        <Root>
          <Switch>
            <Route exact path="/students" component={StudentList} />
            <Route path="/students/:studentId" component={StudentProfile} />
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:campusId" render={(props) => <CampusProfile props={props.match.params} />} />
            <Redirect path="*" to="/" />
          </Switch>
        </Root>
      </Router>)
  }
}

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses())

  }
});

export default connect(mapProps, mapDispatch)(Routes);
