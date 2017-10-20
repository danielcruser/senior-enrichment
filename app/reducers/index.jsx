import { combineReducers } from 'redux'
import axios from 'axios'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const SELECT_STUDENT = 'SELECT_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const GET_CAMPUSES = 'GET_CAMPUSES'
const SELECT_CAMPUS = 'SELECT_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
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
export function getCampus(campus){
  return {
    type: SELECT_CAMPUS,
    campus: campus
  }
}
export function updateCampus(campus){
  return {
    type: UPDATE_CAMPUS,
    campus: campus
  }
}
export function deleteCampus(campus){
  return {
    type: DELETE_CAMPUS,
    campus: {}
  }
}
export function createCampus(campus){
  return {
    type: CREATE_CAMPUS,
    campus: campus
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

export function fetchCampus(campus){
  console.log('campus coming in', campus)
    return function thunk(dispatch) {
      return axios.get(`/api/campuses/${campus.campusId}`)
      .then(res => res.data)
      .then( campus => {
        const action = getCampus(campus)
        dispatch(action)
      })
    }
  }

export function putCampus(campus){

      return function thunk(dispatch) {
        console.log('putting campus', campus)
        return axios.put(`/api/campuses/${campus.id}`, campus)
        .then(res => res.data)
        .then( campus => {
          const action = updateCampus(campus)
          dispatch(action)
        })
      }
    }

export function postCampus(campus, history){

    console.log('posting campus', campus)
        return function thunk(dispatch) {
          console.log('posting campus', campus)
          return axios.post('/api/campuses/', campus)
          .then(res => res.data)
          .then( campus => {
            const action = createCampus(campus)
            dispatch(action)
            dispatch(fetchCampuses())
            console.log('campus test', campus)
            history.push(`/campuses/${campus.id}`)
          })
        }
      }

export function dbDeleteCampus(campus, history){
  return function thunk(dispatch) {
    console.log('deleting a campus', campus)
    return axios.delete(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then( campus => {
        const action = deleteCampus(campus)
        dispatch(action)
        dispatch(fetchCampuses())
        history.push('/campuses')
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

    case UPDATE_STUDENT:{
      return{
        ...state,
        selectedStudent: action.student
      }
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

    case SELECT_CAMPUS:
    return {
      ...state,
      selectedCampus: action.campus
    }

    case UPDATE_CAMPUS:{
      return{
        ...state,
        selectedCampus: action.Campus
      }
    }

    case CREATE_CAMPUS:
    return {
      ...state,
      selectedCampus: action.campus
    }

    case DELETE_CAMPUS:
    return {
      ...state,
      selecteCampus: action.campus
    }
    default: return state
  }
};





export default rootReducer
