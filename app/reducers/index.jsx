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
export function getStudent(student){
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
    return axios.get('/api/students')
    .then(res => res.data)
    .then( students => {
      const action = getStudents(students)
      dispatch(action)
    })
  }
}

export function fetchStudent(student){
  console.log('student coming in', student)
    return function thunk(dispatch) {
      return axios.get(`/api/students/${student.studentId}`)
      .then(res => res.data)
      .then( student => {
        const action = getStudent(student)
        dispatch(action)
      })
    }
  }

export function putStudent(student){

    return function thunk(dispatch) {
      console.log('putting student', student)
      return axios.put(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then( student => {
        const action = updateStudent(student)
        dispatch(action)
      })
    }
  }

export function postStudent(student, history){

  console.log('posting student', student)
      return function thunk(dispatch) {
        console.log('posting student', student)
        return axios.post('/api/students/', student)
        .then(res => res.data)
        .then( student => {
          const action = createStudent(student)
          dispatch(action)
          dispatch(fetchStudents())
          history.push(`/students/${student.id}`)
        })
      }
    }

export function dbDeleteStudent(student, history){
  return function thunk(dispatch) {
    console.log('deleting a student', student)
    return axios.delete(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then( student => {
        const action = deleteStudent(student)
        dispatch(action)
        dispatch(fetchStudents())
        history.push('/students')
      })
  }
}

export function fetchCampuses(){

  return function thunk(dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then( campuses => {
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

  switch(action.type) {
    case GET_STUDENTS:
    return {
      ...state,
      students: action.students
    }

    case SELECT_STUDENT:
      return {
        ...state,
        selectedStudent: action.student
      }

    case DELETE_STUDENT:
      return {
        ...state,
        selectedStudent: action.student
      }

    case CREATE_STUDENT:
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
