import { createStore } from "redux"
import plansReducers from './reducers/plan'

const store = createStore(plansReducers)


export default store