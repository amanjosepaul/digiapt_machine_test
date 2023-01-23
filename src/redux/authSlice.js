// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { authenticateUser } from "../services/apiServices";

// const initialState = {
//   user: "",
//   token: "",
//   msg: "",
//   loading: false,
//   error: "",
// };

// const signUpUser = createAsyncThunk("signupuser", authenticateUser());

// const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducer: {},
//     extraReducers: {
//         [signUpUser.pending]: (state, action)=>{
//             state.loading=true
//         },
//         [signUpUser.fulfilled]: (state, {payload:(error,msg)})=>{
//     state.loading = false
//     if(error) state.error=error
//     if(msg) state.msg=msg
//         },
//         [signUpUser.rejected]: (state, action)=>{
//             state.loading=true
//       },
//   },
// });

// export default authSlice.reducer;
