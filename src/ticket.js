import {createSlice} from "@reduxjs/toolkit";



export const TicketSlice = createSlice({   

    name:"ticket",
    initialState:{ value : {data: [{id:"", description:"No Tickets", creationDate:"", assignedTo:"",assignedToEmail:"", state:""}]}},
    reducers:{
     retrieve:(state,action) =>{
         state.value = action.payload;
     },
    },
});

export default TicketSlice.reducer;
export const  {retrieve} = TicketSlice.actions;

