import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./test-reducer";


export const store = configureStore({reducer:{testReducer}})
