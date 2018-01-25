import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

const store = createStore(
	reducers, 
	applyMiddleware(
		logger, 
		promiseMiddleware(),
	),
)

export default store