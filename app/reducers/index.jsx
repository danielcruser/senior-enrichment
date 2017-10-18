import { combineReducers } from 'redux'

//Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const SELECT_STUDENT = 'SELECT_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
// const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER'
// const SELECTED_A_CAMPUS = 'SELECTED_A_CAMPUS'
// const UPDATED_A_CAMPUS = 'UPDATED_A_CAMPUS'
// const DELETED_A_CAMPUS = 'DELETED_A_CAMPUS'
// const CREATE_CAMPUS = 'CREATE_CAMPUS'
//Action Creators

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}
export function selectStudent(student){
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
    default: return state
  }
};





export default rootReducer
