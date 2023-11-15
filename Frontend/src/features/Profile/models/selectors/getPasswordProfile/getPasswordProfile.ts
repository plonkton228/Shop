import { createSelector } from "@reduxjs/toolkit";
import { PasswordSchema } from "../../passwordSlice/passwordSlice";
export const getPassword = (state: PasswordSchema ) => state.password