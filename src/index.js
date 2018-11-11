import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// SAGA GENERATOR FUNCTIONS

// Saga to retrieve the projects from the server
// this is the ASYNCH call to the server/DB
// and then the dispatch to the reducer
function* getProjects (action) {
    try {
        // axios get call to project
        const response = yield call(axios.get, '/api/project')
        console.log('project api call', response);
        yield put ( {type: 'SET_PROJECTS', payload: response.data });
    }
    catch (error) {
          console.log('error with get request to /api/project', error);
    }
}

// Saga to retrieve the projects from the server
// this is the ASYNCH call to the server/DB
// and then the dispatch to the reducer
function* addProject(action) {
    console.log('in post saga for project', action.payload);
    try {
        // axios asynch call to add project to server
        yield call(axios.post, '/api/project', action.payload);
        // will need to make a call to update the project
        alert('Your project has been added.')
        yield put( { type: 'GET_PROJECTS' } );


    }
    catch (error) {
        console.log('error with add project post request');
    }
}
function* deleteProject(action) {
    console.log('in delete saga', action.payload);
    try {
      //axios call to remove project
      yield call(axios.delete, '/api/project', {params: {id: action.payload}});
      yield put( { type: 'GET_PROJECTS' } );
    }
    catch (error) {
      console.log('error with delete project request to /api/project');
      
    } 
}

// Saga to retrieve the tags from the server
// this is the ASYNCH call to the server/DB
// and then the dispatch to the reducer
function* getTags (action) {
    try {
        // axios get call to project
        const response = yield call(axios.get, '/api/tag')
        console.log('tag api call', response);
        yield put ( {type: 'SET_TAGS', payload: response.data });
    }
    catch (error) {
          console.log('error with get request to /api/tag', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('GET_TAGS', getTags);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
    
registerServiceWorker();
