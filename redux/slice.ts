import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ResumeState {
  title: string;
  basic: {
    name: string;
    occupation: string;
    email: string;
    phoneNumber: string;
    address: string;
    introduction: string;
  };
}

const initialState: ResumeState = {
  title: '이력서 제목',
  basic: {
    name: '',
    occupation: '',
    email: '',
    phoneNumber: '',
    address: '',
    introduction: '',
  },
};

export const { reducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setTitle(state, { payload: title }: PayloadAction<string>) {
      return {
        ...state,
        title,
      };
    },
    changeResumeField(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string }>
    ) {
      return {
        ...state,
        basic: {
          ...state.basic,
          [name]: value,
        },
      };
    },
  },
});

export const { setTitle, changeResumeField } = actions;

export default reducer;
