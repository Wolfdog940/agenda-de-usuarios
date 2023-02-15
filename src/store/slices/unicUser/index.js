import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const unicUserSlice = createSlice({
    name:"unicUser",
    initialState:{
        list:[]
        
    },
    reducers: {
        setUnicUserList:(state ,action)=>{
            state.list = action.payload
        }
    }
  
})

export const {setUnicUserList} = unicUserSlice.actions;

export default unicUserSlice.reducer

export const fetchUnicUser =(id)=>(dispatch)=>{
    
    axios
    .get("https://reqres.in/api/users/"+id)
    .then((response)=>{
        dispatch(setUnicUserList(response.data.data))
    })
    .catch((error)=>console.log(error))
}