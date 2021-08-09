import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, CareerInputName } from '@/types/Resume';

type ResumeState = {
  title: string;
  basic: Basic;
  careers: Career[];
};

export const initialState: ResumeState = {
  title: '이력서 제목',
  basic: {
    name: '',
    occupation: '',
    email: '',
    phoneNumber: '',
    address: '',
    introduction: '',
  },
  careers: [],
};

export const { reducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResume(state) {
      return {
        ...state,
      };
    },
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
    changeCareerField(
      state,
      {
        payload: { id, name, value },
      }: PayloadAction<{
        id: string;
        name: CareerInputName;
        value: string;
      }>
    ) {
      // eslint-disable-next-line no-param-reassign
      state.careers.find((career) => career.id === id)![name] = value;
    },
    setCareers(state, { payload: careers }: PayloadAction<Career[]>) {
      return {
        ...state,
        careers,
      };
    },
  },
});

export const {
  setResume,
  setTitle,
  changeResumeField,
  changeCareerField,
  setCareers,
} = actions;

export default reducer;
