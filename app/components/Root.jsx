import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import store from '../store'
import fetchStudents from '../reducers/index'
import StudentList from './StudentList'
import CampusList from './CampusList'
import Navbar from './Navbar'

const Root = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>

)

export default Root


