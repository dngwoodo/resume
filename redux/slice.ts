/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResumeState {
  newId: number;
  title: string;
  basic: {
    name: string;
    occupation: string;
    email: string;
    phoneNumber: string;
    address: string;
    introduction: string;
  };
  careers: {
    id: number;
    title: string;
    jobDetail: string;
    company: string;
    startDate: string;
    endDate: string;
    region: string;
    description: string;
  }[];
}

export const initialState: ResumeState = {
  newId: 100,
  title: '이력서 제목',
  basic: {
    name: '',
    occupation: '',
    email: '',
    phoneNumber: '',
    address: '',
    introduction: '',
  },
  careers: [
    {
      id: 0,
      title: '',
      jobDetail: '',
      company: '',
      startDate: '',
      endDate: '',
      region: '',
      description: '',
    },
  ],
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
    addCareer(state) {
      return {
        ...state,
        newId: state.newId + 1,
        careers: [
          ...state.careers,
          {
            id: state.newId,
            title: '',
            jobDetail: '',
            company: '',
            startDate: '',
            endDate: '',
            region: '',
            description: '',
          },
        ],
      };
    },
    deleteCareer(state, { payload: id }: PayloadAction<number>) {
      const newCareers = state.careers.filter((career) => career.id !== id);

      return {
        ...state,
        careers: newCareers,
      };
    },
    changeCareerField(
      state,
      {
        payload: { id, name, value },
      }: PayloadAction<{
        id: number;
        name:
          | 'title'
          | 'jobDetail'
          | 'company'
          | 'startDate'
          | 'endDate'
          | 'region'
          | 'description';
        value: string;
      }>
    ) {
      state.careers.find((career) => career.id === id)![name] = value;
    },
  },
});

export const {
  setTitle,
  changeResumeField,
  addCareer,
  deleteCareer,
  changeCareerField,
} = actions;

export default reducer;
