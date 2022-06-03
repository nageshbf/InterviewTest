import {

    getDummydata
  } from './action';

export const getDummyDataDispatcher = (data) =>{
    return async dispatch => {
      dispatch(getDummydata(data))
    }
  }
  