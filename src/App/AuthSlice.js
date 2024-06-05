import {createSlice}from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:"auth",
    initialState:[],
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        }
    }
})

export const {setUser}=AuthSlice.actions;
export default AuthSlice.reducer