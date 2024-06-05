import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({
    name:"events",
    initialState:[],

      reducers:{
        setEvent :(state,action)=>{
            return action.payload
        },
        filterEvent:(state,action)=>{
            
          state = state.filter((el)=>el.eventName === action.payload)
          return state
      }
      }


})
export const {setEvent,filterEvent}=EventSlice.actions;
export default EventSlice.reducer 