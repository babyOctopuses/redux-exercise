import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/UsersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
