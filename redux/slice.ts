/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, CareerInputName } from '@/types/Resume';

import { loadResume, createCareer, deleteCareer, changeResume } from './thunks';

type ResumeState = {
  title: string;
  basic: Basic;
  careers: Career[];
  loadResumeLoading: boolean;
  loadResumeError: any;
  createCareerLoading: boolean;
  createCareerError: any;
  deleteCareerLoading: boolean;
  deleteCareerError: any;
  changeResumeLoading: boolean;
  changeResumeError: any;
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
  loadResumeLoading: false,
  loadResumeError: null,
  createCareerLoading: false,
  createCareerError: null,
  deleteCareerLoading: false,
  deleteCareerError: null,
  changeResumeLoading: false,
  changeResumeError: null,
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
  },
  extraReducers: (builder) =>
    builder
      // changeResume
      .addCase(changeResume.pending, (state) => {
        state.changeResumeLoading = true;
        state.changeResumeError = null;
      })
      .addCase(changeResume.fulfilled, (state, action) => {
        state.changeResumeLoading = false;
        state = action.payload;
        state.changeResumeError = null;
      })
      .addCase(changeResume.rejected, (state, action) => {
        state.changeResumeLoading = false;
        state.changeResumeError = action.payload;
      })
      // loadResume
      .addCase(loadResume.pending, (state) => {
        state.loadResumeLoading = true;
        state.loadResumeError = null;
      })
      .addCase(loadResume.fulfilled, (state, action) => {
        state.loadResumeLoading = false;
        state = action.payload;
        // state.loadResumeError = null;
      })
      .addCase(loadResume.rejected, (state, action) => {
        state.loadResumeLoading = false;
        state.loadResumeError = action.payload;
      })
      // createCareer
      .addCase(createCareer.pending, (state) => {
        state.createCareerLoading = true;
        state.createCareerError = null;
      })
      .addCase(createCareer.fulfilled, (state, action) => {
        state.createCareerLoading = false;
        state.careers = action.payload;
        state.createCareerError = null;
      })
      .addCase(createCareer.rejected, (state, action) => {
        state.createCareerLoading = false;
        state.createCareerError = action.payload;
      })
      // deleteCareer
      .addCase(deleteCareer.pending, (state) => {
        state.deleteCareerLoading = true;
        state.deleteCareerError = null;
      })
      .addCase(deleteCareer.fulfilled, (state, action) => {
        state.deleteCareerLoading = false;
        state.careers = action.payload;
        state.deleteCareerError = null;
      })
      .addCase(deleteCareer.rejected, (state, action) => {
        state.deleteCareerLoading = false;
        state.deleteCareerError = action.payload;
      }),
});

export const { setResume, setTitle, changeResumeField, changeCareerField } =
  actions;

export default reducer;
