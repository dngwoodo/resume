import { Career } from '@/types/Resume';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addCareer,
  removeCareer,
  updateResume,
  fetchResume,
} from '@/services/resume';
import { ResumeState } from './slice';

interface ValidationErrors {
  errorMessage: string;
  // eslint-disable-next-line camelcase
  field_errors: Record<string, string>;
}

export const loadResume = createAsyncThunk<
  ResumeState,
  void,
  { rejectValue: ValidationErrors }
>('resume/loadResume', async () => {
  return fetchResume()
    .then((res) => res.data)
    .catch((error) => error);
});

export const changeResume = createAsyncThunk<
  ResumeState,
  void,
  { rejectValue: ValidationErrors }
>('resume/changeResume', async () => {
  return updateResume()
    .then((res) => res) // res.data로 나중에 변경 필요
    .catch((error) => error);
});

export const createCareer = createAsyncThunk<
  Career[],
  void,
  { rejectValue: ValidationErrors }
>('resume/createCareer', async () => {
  return addCareer()
    .then((res) => res.data)
    .catch((error) => error);
});

export const deleteCareer = createAsyncThunk<
  Career[],
  string,
  { rejectValue: ValidationErrors }
>('resume/deleteCareer', async (id: string) => {
  return removeCareer(id)
    .then((res) => res.data)
    .catch((error) => error);
});
