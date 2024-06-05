import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import TicketSlice from "./TicketSlice";
import EventSlice from "./EventSlice"


export default configureStore({
    reducer:{
        auth: AuthSlice,
        ticket: TicketSlice,
        event:EventSlice
    }
})
