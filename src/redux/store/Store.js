import {createStore, applyMiddleware,compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

//export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));


export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
