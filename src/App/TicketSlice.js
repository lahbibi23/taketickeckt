import { createSlice } from "@reduxjs/toolkit";

const TicktSlice =createSlice({
   name:"tickets",
   initialState:[],
   reducers :{
    setTicket:(state,action)=>{
        return action.payload
    }
   }
})
export const {setTicket}=TicktSlice.actions;
export default TicktSlice.reducer