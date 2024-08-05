import { createSlice } from "@reduxjs/toolkit";

const Students = createSlice({
  name: "students",
  initialState: {
    All: [],
    Suresh: [],
    Deepak: [],
    Abhi: [],
  },
  reducers: {
    ADD(state, action) {
      const student = action.payload;
      state.All.push(student);

      if (student.Monitor === "1") {
        state.Suresh.push(student);
      } else if (student.Monitor === "2") {
        state.Deepak.push(student);
      } else if (student.Monitor === "3") {
        state.Abhi.push(student);
      }
    },
    DELETE(state, action) {
      const studentNameToDelete = action.payload;
      state.All = state.All.filter(
        (student) => student.Name !== studentNameToDelete.Name
      );
      state.Suresh = state.Suresh.filter(
        (student) => student.Name !== studentNameToDelete.Name
      );
      state.Deepak = state.Deepak.filter(
        (student) => student.Name !== studentNameToDelete.Name
      );
      state.Abhi = state.Abhi.filter(
        (student) => student.Name !== studentNameToDelete.Name
      );
    },
  },
});
export const StudentsActions = Students.actions;
export default Students;
