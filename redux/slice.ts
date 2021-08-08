import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, CareerInputName } from '@/types/Resume';

type ResumeState = {
  newId: number;
  title: string;
  basic: Basic;
  careers: Career[];
};

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
            ...initialState.careers[0],
            id: state.newId,
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
        name: CareerInputName;
        value: string;
      }>
    ) {
      // eslint-disable-next-line no-param-reassign
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
