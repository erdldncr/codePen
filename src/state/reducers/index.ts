import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import bundlesReducers from './bundleReducer'

const reducers=combineReducers({
  cells: cellsReducer,
  bundles:bundlesReducers
})
export default reducers
export type RootState= ReturnType<typeof reducers>