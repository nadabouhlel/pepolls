


const key = localStorage.key(1); 
let user = JSON.parse(localStorage.getItem(key));

const init = user ? { loggedIn: true, user } : {loggedIn: false}; ; 

/*
const init = {
    isLogin: false
  };
  */
  export const AuthReducer = (state = {init}, action) => {
    switch (action.type) {
      case "LOGIN":
        return { 
          ...state,
           user: action.payload,
           loggedIn: true
        };


      default:
        return state;
    }
   };


{/*import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../../constants/UserConstants";





export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        
        loading: true };
    case USER_SIGNIN_SUCCESS:
      return { 
        loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};






 const key = localStorage.key(1); 
let user = JSON.parse(localStorage.getItem(key));

const init = user ? { loggedIn: true, user } : {loggedIn: false}; ; 


  export const AuthReducer = (state = {init}, action) => {
    switch (action.type) {
      case "LOGIN":
        return { 
          ...state,
           user: action.payload,
           loggedIn: true
        };


      default:
        return state;
    }
   };
  */}