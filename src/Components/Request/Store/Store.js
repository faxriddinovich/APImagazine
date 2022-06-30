import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../../Reducer/Reducer";
import { request } from "../Request";

export const store=configureStore({
    reducer:{
        users:Reducer
    },
    middleware:[
        request
    ]
})