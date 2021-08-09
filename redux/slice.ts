import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, CareerInputName } from '@/types/Resume';

type ResumeState = {
  title: string;
  basic: Basic;
  careers: Career[];
};

export const resumeState: ResumeState = {
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

export const initialState: ResumeState = {
  ...resumeState,
};

export const { reducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResume(state, { payload: newResumeState }) {
      return {
        ...state,
        ...newResumeState,
      };
    },
    setTitle(state, { payload: title }: PayloadAction<string>) {
      return {
        ...state,
        title,
      };
    },
    setCareers(state, { payload: careers }: PayloadAction<Career[]>) {
      return {
        ...state,
        careers,
      };
    },

    changeBasicField(
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
      const newCareers = [...state.careers];
      newCareers.find((newCareer) => newCareer.id === id)![name] = value;
    },
  },
});

export const {
  setResume,
  setTitle,
  changeBasicField,
  changeCareerField,
  setCareers,
} = actions;

export default reducer;
