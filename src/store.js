import {createStore, applyMiddleware, combineReducers} from 'redux'
import hackerNewsReducer from './ducks/hackerNewsReducer'
import mediumReducer from './ducks/mediumReducer'
import redditReducer from './ducks/redditReducer'
import promiseMiddleware from 'redux-promise-middleware'


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
})

//allows us to do synchroning calls from reducer 
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

