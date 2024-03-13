import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: {
    username: string;
    email: string;
  };
  isLoading: boolean;
  isAuth: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  user: {
    username: "",
    email: "",
  },
  isLoading: false,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState>) => {
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.isLoading = false;
      state.isAuth = true;
    },
  },
});

export const authReducer = authSlice.reducer;