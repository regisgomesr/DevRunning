import {
    createStore,
    applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
export default createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)
