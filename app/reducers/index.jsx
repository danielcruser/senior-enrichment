import { combineReducers } from 'redux'
import axios from 'axios'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const SELECT_STUDENT = 'SELECT_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const GET_CAMPUSES = 'GET_CAMPUSES'
const SELECTED_A_CAMPUS = 'SELECTED_A_CAMPUS'
const UPDATED_A_CAMPUS = 'UPDATED_A_CAMPUS'
const DELETED_A_CAMPUS = 'DELETED_A_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
// Action Creators

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}
export function selectStudent(student){
  console.log('selecting a student', student)
  return {
    type: SELECT_STUDENT,
    student: student
  }
}
export function updateStudent(student){
  return {
    type: UPDATE_STUDENT,
    student: student
  }
}
export function deleteStudent(student){
  return {
    type: DELETE_STUDENT,
    student: {}
  }
}
export function createStudent(student){
  return {
    type: CREATE_STUDENT,
    student: student
  }
}

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

//Thunks

export function fetchStudents(){

  return function thunk(dispatch) {
    console.log('pre students thunk')
    return axios.get('/api/students')
    .then(res => res.data)
    .then( students => {
      console.log('students thunked')
      const action = getStudents(students)
      dispatch(action)
    })
  }
}




export function fetchCampuses(){

  return function thunk(dispatch) {
    console.log('pre campuses thunk')
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then( campuses => {
      console.log('campuses thunked')
      const action = getCampuses(campuses)
      dispatch(action)
    })
  }
}



//InitialState
const initialState = {
  students: [],
  selectedStudent: {},
  campuses: [],
  selectedCampus: {}
}

//Reducer
const rootReducer = function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case GET_STUDENTS:
    return {
      ...state,
      students: action.students
    }

    case SELECT_STUDENT:
      console.log('inside reducer', action)
      return {
        ...state,
        selectedStudent: action.student
      }

    case GET_CAMPUSES:
    return {
      ...state,
      campuses: action.campuses
    }
    default: return state
  }
};





export default rootReducer
