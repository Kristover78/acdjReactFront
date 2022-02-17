import { combineReducers } from 'redux'
import growlmessages from './message-reducer.js'

const appReducers = combineReducers({
    growlmessages
})

export default appReducers
