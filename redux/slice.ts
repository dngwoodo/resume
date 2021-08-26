import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, EmploymentHistory, InputName, EducationalHistory } from '@/types/Resume';
import update from '@/utils/update';

export type ResumeState = {
  title: string;
  employmentHistories: EmploymentHistory[];
  educationalHistories: EducationalHistory[];
} & Basic;

export type InitialState = {
  errors: {
    loadResume: string | null;
    createEmploymentHistory: string | null;
    deleteEmploymentHistory: string | null;
    createEducationalHistory: string | null;
    deleteEducationalHistory: string | null;
  };
  loadings: {
    loadResume: boolean;
    createEmploymentHistory: boolean;
    deleteEmploymentHistory: boolean;
    createEducationalHistory: boolean;
    deleteEducationalHistory: boolean;
  };
};

export const initialState: ResumeState & InitialState = {
  title: '이력서 제목',
  name: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: '',
  selfIntroduction: '',
  employmentHistories: [],
  educationalHistories: [],
  errors: {
    loadResume: null,
    createEmploymentHistory: null,
    deleteEmploymentHistory: null,
    createEducationalHistory: null,
    deleteEducationalHistory: null,
  },
  loadings: {
    loadResume: false,
    createEmploymentHistory: false,
    deleteEmploymentHistory: false,
    createEducationalHistory: false,
    deleteEducationalHistory: false,
  },
};

export const { reducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    // change
    changeTitle(
      state, //
      { payload: title }: PayloadAction<string>
    ) {
      return update(state, { title });
    },
    changeBasicField(
      state, //
      { payload: { name, value } }: PayloadAction<{ name: InputName<Basic>; value: string }>
    ) {
      return update(state, { [name]: value });
    },
    changeEmploymentHistoryField(
      state, //
      { payload: { id, name, value } }: PayloadAction<{ id: string; name: InputName<EmploymentHistory>; value: string }>
    ) {
      const employmentHistories = state.employmentHistories.map((employmentHistory) =>
        employmentHistory.id === id ? { ...employmentHistory, [name]: value } : employmentHistory
      );

      return update(state, { employmentHistories });
    },
    changeEducationalHistoryField(
      state, //
      {
        payload: { id, name, value },
      }: PayloadAction<{ id: string; name: InputName<EducationalHistory>; value: string }>
    ) {
      const educationalHistories = state.educationalHistories.map((educationalHistory) =>
        educationalHistory.id === id ? { ...educationalHistory, [name]: value } : educationalHistory
      );

      return update(state, { educationalHistories });
    },
    // loadResume
    startLoadResume(state) {
      return update(
        state, //
        { loadings: { loadResume: true } },
        { errors: { loadResume: null } }
      );
    },
    completeLoadResume(
      state, //
      { payload: newResume }: PayloadAction<ResumeState>
    ) {
      return update(
        state, //
        newResume,
        { loadings: { loadResume: false } },
        { errors: { loadResume: null } }
      );
    },
    failLoadResume(state, { payload: error }) {
      return update(
        state, //
        { loadings: { loadResume: false } },
        { errors: { loadResume: error } }
      );
    },
    // createEmploymentHistory
    startCreateEmploymentHistory(state) {
      return update(
        state,
        { loadings: { createEmploymentHistory: true } },
        { errors: { createEmploymentHistory: null } }
      );
    },
    completeCreateEmploymentHistory(
      state, //
      { payload: employmentHistories }: PayloadAction<EmploymentHistory[]>
    ) {
      return update(
        state,
        { employmentHistories },
        { loadings: { createEmploymentHistory: false } },
        { errors: { createEmploymentHistory: null } }
      );
    },
    failCreateEmploymentHistory(state, { payload: error }) {
      return update(
        state,
        { loadings: { createEmploymentHistory: false } },
        { errors: { createEmploymentHistory: error } }
      );
    },
    // deleteEmploymentHistory
    startDeleteEmploymentHistory(state) {
      return update(
        state,
        { loadings: { deleteEmploymentHistory: true } },
        { errors: { deleteEmploymentHistory: null } }
      );
    },
    completeDeleteEmploymentHistory(
      state, //
      { payload: employmentHistories }: PayloadAction<EmploymentHistory[]>
    ) {
      return update(
        state,
        { employmentHistories },
        { loadings: { deleteEmploymentHistory: false } },
        { errors: { deleteEmploymentHistory: null } }
      );
    },
    failDeleteEmploymentHistory(state, { payload: error }) {
      return update(
        state,
        { loadings: { deleteEmploymentHistory: false } },
        { errors: { deleteEmploymentHistory: error } }
      );
    },
    // createEducation
    startCreateEducationalHistory(state) {
      return update(
        state,
        { loadings: { createEducationalHistory: true } },
        { errors: { createEducationalHistory: null } }
      );
    },
    completeCreateEducationalHistory(
      state, //
      { payload: educationalHistories }: PayloadAction<EducationalHistory[]>
    ) {
      return update(
        state,
        { educationalHistories },
        { loadings: { createEducationalHistory: false } },
        { errors: { createEducationalHistory: null } }
      );
    },
    failCreateEducationalHistory(state, { payload: error }) {
      return update(
        state,
        { loadings: { createEducationalHistory: false } },
        { errors: { createEducationalHistory: error } }
      );
    },
    // deleteEducation
    startDeleteEducationalHistory(state) {
      return update(
        state,
        { loadings: { deleteEducationalHistory: true } },
        { errors: { deleteEducationalHistory: null } }
      );
    },
    completeDeleteEducationalHistory(
      state, //
      { payload: educationalHistories }: PayloadAction<EducationalHistory[]>
    ) {
      return update(
        state,
        { educationalHistories },
        { loadings: { deleteEducationalHistory: false } },
        { errors: { deleteEducationalHistory: null } }
      );
    },
    failDeleteEducationalHistory(state, { payload: error }) {
      return update(
        state,
        { loadings: { deleteEducationalHistory: false } },
        { errors: { deleteEducationalHistory: error } }
      );
    },
  },
});

export const {
  changeTitle,
  changeBasicField,
  changeEmploymentHistoryField,
  changeEducationalHistoryField,
  startLoadResume,
  completeLoadResume,
  failLoadResume,
  startCreateEmploymentHistory,
  completeCreateEmploymentHistory,
  failCreateEmploymentHistory,
  startDeleteEmploymentHistory,
  completeDeleteEmploymentHistory,
  failDeleteEmploymentHistory,
  startCreateEducationalHistory,
  completeCreateEducationalHistory,
  failCreateEducationalHistory,
  startDeleteEducationalHistory,
  completeDeleteEducationalHistory,
  failDeleteEducationalHistory,
} = actions;

export default reducer;
