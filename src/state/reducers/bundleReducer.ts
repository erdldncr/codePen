import produce from "immer";
import { Action } from "../actions";
import { ActionType } from "../action-types";
interface BundlesState{
  [key:string]:{
    loading: boolean;
    code:string;
    err:string;
  }
}

const initialState:BundlesState={};

const reducer = produce((state:BundlesState= initialState, action:Action):BundlesState=>{
switch (action.type) {
  case ActionType.BUNDLE_START:

  state[action.type]={
    loading:true,code:'',err:''
  }
    return state

  case ActionType.BUNDLE_COMPLETE:
      state[action.type]={
    loading:false,code:action.payload.bundle.code,err:action.payload.bundle.err
  }
    return state
  default:
   return state;
}

},initialState);

export default reducer;