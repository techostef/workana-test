import { combineReducers } from 'redux';

// New ------------------------------------------------------
import employesState from './employes/employesState';
import explorerState from './explorer/explorerState';

export default combineReducers({
    explorerState,
    employesState,
});
