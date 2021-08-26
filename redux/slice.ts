import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, EmploymentHistory, InputName, EducationalHistory } from '@/types/Resume';

type ResumeState = {
  title: string;
  employmentHistories: EmploymentHistory[];
  educationalHistories: EducationalHistory[];
} & Basic;

type InitialState = {
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
      return {
        ...state,
        title,
      };
    },
    changeBasicField(
      state, //
      { payload: { name, value } }: PayloadAction<{ name: InputName<Basic>; value: string }>
    ) {
      return {
        ...state,
        [name]: value,
      };
    },
    changeEmploymentHistoryField(
      state, //
      { payload: { id, name, value } }: PayloadAction<{ id: string; name: InputName<EmploymentHistory>; value: string }>
    ) {
      return {
        ...state,
        employmentHistories: state.employmentHistories.map((employmentHistory) =>
          employmentHistory.id === id ? { ...employmentHistory, [name]: value } : employmentHistory
        ),
      };
    },
    changeEducationalHistoryField(
      state, //
      {
        payload: { id, name, value },
      }: PayloadAction<{ id: string; name: InputName<EducationalHistory>; value: string }>
    ) {
      return {
        ...state,
        educationalHistories: state.educationalHistories.map((educationalHistory) =>
          educationalHistory.id === id ? { ...educationalHistory, [name]: value } : educationalHistory
        ),
      };
    },
    // loadResume
    startLoadResume(state) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          loadResume: true,
        },
        errors: {
          ...errors,
          loadResume: null,
        },
      };
    },
    completeLoadResume(
      state, //
      { payload: newResume }: PayloadAction<ResumeState>
    ) {
      const { loadings, errors } = state;

      return {
        ...state,
        ...newResume,
        loadings: {
          ...loadings,
          loadResume: false,
        },
        errors: {
          ...errors,
          loadResume: null,
        },
      };
    },
    failLoadResume(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          loadResume: false,
        },
        errors: {
          ...errors,
          loadResume: error,
        },
      };
    },
    // createEmploymentHistory
    startCreateEmploymentHistory(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createEmploymentHistory: true,
        },
      };
    },
    completeCreateEmploymentHistory(
      state, //
      { payload: employmentHistories }: PayloadAction<EmploymentHistory[]>
    ) {
      const { loadings, errors } = state;

      return {
        ...state,
        employmentHistories,
        loadings: {
          ...loadings,
          createEmploymentHistory: false,
        },
        errors: {
          ...errors,
          createEmploymentHistory: null,
        },
      };
    },
    failCreateEmploymentHistory(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createEmploymentHistory: false,
        },
        errors: {
          ...errors,
          createEmploymentHistory: error,
        },
      };
    },
    // deleteEmploymentHistory
    startDeleteEmploymentHistory(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          deleteEmploymentHistory: true,
        },
      };
    },
    completeDeleteEmploymentHistory(
      state, //
      { payload: employmentHistories }: PayloadAction<EmploymentHistory[]>
    ) {
      const { loadings, errors } = state;

      return {
        ...state,
        employmentHistories,
        loadings: {
          ...loadings,
          deleteEmploymentHistory: false,
        },
        errors: {
          ...errors,
          deleteEmploymentHistory: null,
        },
      };
    },
    failDeleteEmploymentHistory(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          deleteEmploymentHistory: false,
        },
        errors: {
          ...errors,
          deleteEmploymentHistory: error,
        },
      };
    },
    // createEducation
    startCreateEducationalHistory(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createEducation: true,
        },
      };
    },
    completeCreateEducationalHistory(
      state, //
      { payload: educationalHistories }: PayloadAction<EducationalHistory[]>
    ) {
      const { loadings, errors } = state;

      return {
        ...state,
        educationalHistories,
        loadings: {
          ...loadings,
          createEducationalHistory: false,
        },
        errors: {
          ...errors,
          createEducationalHistory: null,
        },
      };
    },
    failCreateEducationalHistory(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createEducationalHistory: false,
        },
        errors: {
          ...errors,
          createEducationalHistory: error,
        },
      };
    },
    // deleteEducation
    startDeleteEducationalHistory(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createEducationalHistory: true,
        },
      };
    },
    completeDeleteEducationalHistory(
      state, //
      { payload: educationalHistories }: PayloadAction<EducationalHistory[]>
    ) {
      const { loadings, errors } = state;

      return {
        ...state,
        educationalHistories,
        loadings: {
          ...loadings,
          deleteEducationalHistory: false,
        },
        errors: {
          ...errors,
          deleteEducationalHistory: null,
        },
      };
    },
    failDeleteEducationalHistory(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          deleteEducation: false,
        },
        errors: {
          ...errors,
          deleteEducation: error,
        },
      };
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
