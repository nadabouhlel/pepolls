


import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../../constants/UserConstants";
{/*
export const login = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { user} });
  
  try {
    const key = localStorage.key(1); 
    const  data  = JSON.parse(localStorage.getItem(key));

    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

*/}

export const login = (user) => {
  return {
    type: "LOGIN",
    payload: user
  }}; 