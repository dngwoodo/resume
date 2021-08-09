import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addCareer,
  removeCareer,
  updateResume,
  fetchResume,
} from '@/services/resume';

export const loadResume = createAsyncThunk('resume/loadResume', async () => {
  return fetchResume()
    .then((res) => res.data)
    .catch((error) => error);
});

export const changeResume = createAsyncThunk(
  'resume/changeResume',
  async () => {
    return updateResume()
      .then((res) => res) // res.data로 나중에 변경 필요
      .catch((error) => error);
  }
);

export const createCareer = createAsyncThunk(
  'resume/createCareer',
  async () => {
    return addCareer()
      .then((res) => res.data)
      .catch((error) => error);
  }
);

export const deleteCareer = createAsyncThunk(
  'resume/deleteCareer',
  async (id: string) => {
    return removeCareer(id)
      .then((res) => res.data)
      .catch((error) => error);
  }
);
