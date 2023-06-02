import { configureStore }from "@reduxjs/toolkit"
import usersSlice from "../features/usersSlice";
import authSlice from "../features/authSlice";
import logger from "redux-logger";


const store = configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice
  },
  middleware: (getdefault) => getdefault().concat(logger)
})


export default store;

export * from '../features/authSlice'