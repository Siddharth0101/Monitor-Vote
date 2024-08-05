import { configureStore } from "@reduxjs/toolkit";
import Students from "./students";

const reduxStore = configureStore({
  reducer: { student: Students.reducer },
});

export default reduxStore;
