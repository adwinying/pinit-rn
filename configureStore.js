import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
	reducers, 
	applyMiddleware(
		logger, 
		promiseMiddleware(),
		thunk,
	),
)

export default store