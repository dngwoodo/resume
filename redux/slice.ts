/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, CareerInputName } from '@/types/Resume';

import { loadResume, createCareer, deleteCareer, changeResume } from './thunks';

export type ResumeState = {
  title: string;
  basic: Basic;
  careers: Career[];
};

type InitialState = {
  loadResumeLoading: boolean;
  loadResumeError?: string;
  createCareerLoading: boolean;
  createCareerError?: string;
  deleteCareerLoading: boolean;
  deleteCareerError?: string;
  changeResumeLoading: boolean;
  changeResumeError?: string;
};

export const initialState: ResumeState & InitialState = {
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
  loadResumeLoading: false,
  loadResumeError: undefined,
  createCareerLoading: false,
  createCareerError: undefined,
  deleteCareerLoading: false,
  deleteCareerError: undefined,
  changeResumeLoading: false,
  changeResumeError: undefined,
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
      state.careers.find((career) => career.id === id)![name] = value;
    },
  },
  extraReducers: (builder) =>
    builder
      // changeResume
      .addCase(changeResume.pending, (state) => {
        state.changeResumeLoading = true;
        state.changeResumeError = undefined;
      })
      .addCase(changeResume.fulfilled, (state, { payload: newResumeState }) => {
        state.changeResumeLoading = false;
        state = { ...state, ...newResumeState };
        state.changeResumeError = undefined;
      })
      .addCase(changeResume.rejected, (state, action) => {
        state.changeResumeLoading = false;
        if (action.payload) {
          state.changeResumeError = action.payload.errorMessage;
          return;
        }
        state.changeResumeError = action.error.message;
      })
      // loadResume
      .addCase(loadResume.pending, (state) => {
        state.loadResumeLoading = true;
        state.loadResumeError = undefined;
      })
      .addCase(loadResume.fulfilled, (state, action) => {
        state.loadResumeLoading = false;
        state = { ...state, ...action.payload };
        state.loadResumeError = undefined;
      })
      .addCase(loadResume.rejected, (state, action) => {
        state.loadResumeLoading = false;
        if (action.payload) {
          state.loadResumeError = action.payload.errorMessage;
          return;
        }
        state.loadResumeError = action.error.message;
      })
      // createCareer
      .addCase(createCareer.pending, (state) => {
        state.createCareerLoading = true;
        state.createCareerError = undefined;
      })
      .addCase(createCareer.fulfilled, (state, action) => {
        state.createCareerLoading = false;
        state.careers = action.payload;
        state.createCareerError = undefined;
      })
      .addCase(createCareer.rejected, (state, action) => {
        state.createCareerLoading = false;
        if (action.payload) {
          state.createCareerError = action.payload.errorMessage;
          return;
        }
        state.createCareerError = action.error.message;
      })
      // deleteCareer
      .addCase(deleteCareer.pending, (state) => {
        state.deleteCareerLoading = true;
        state.deleteCareerError = undefined;
      })
      .addCase(deleteCareer.fulfilled, (state, action) => {
        state.deleteCareerLoading = false;
        state.careers = action.payload;
        state.deleteCareerError = undefined;
      })
      .addCase(deleteCareer.rejected, (state, action) => {
        state.deleteCareerLoading = false;
        if (action.payload) {
          state.createCareerError = action.payload.errorMessage;
          return;
        }
        state.createCareerError = action.error.message;
      }),
});

export const { setResume, setTitle, changeResumeField, changeCareerField } =
  actions;

export default reducer;
