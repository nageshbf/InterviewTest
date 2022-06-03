import { combineReducers } from 'redux';
import mainReducer from '../../screens/reducer'

const appReducer = combineReducers({
    mainReducer:mainReducer,
});

const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};

export default rootReducer;
