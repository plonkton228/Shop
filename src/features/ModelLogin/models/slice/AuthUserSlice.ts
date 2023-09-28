import {AuthUserShcnema} from "features/ModelLogin/models/types";
import {createSlice} from "@reduxjs/toolkit";
import {authUser} from "features/ModelLogin/models/reducers/authUser";

const initialState: AuthUserShcnema = {
    email: '',
    password: '',
    isLoading: false,
    error: ''
}

const AuthUserSlice = createSlice({
    name: 'AuthUser',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(authUser.pending, (state, action) => {
          state.isLoading = true
      })
    }
})