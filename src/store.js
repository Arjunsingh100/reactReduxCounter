import { legacy_createStore as createStore } from 'redux';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION_ && window.REDUX_DEVTOOLS_EXTENSION_());

export default store;