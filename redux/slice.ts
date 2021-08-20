import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, EmploymentHistory, InputName } from '@/types/Resume';

type ResumeState = {
  title: string;
  employmentHistories: EmploymentHistory[];
} & Basic;

type InitialState = {
  errors: {
    loadResume: string | null;
    createEmploymentHistory: string | null;
    deleteEmploymentHistory: string | null;
  };
  loadings: {
    loadResume: boolean;
    createEmploymentHistory: boolean;
    deleteEmploymentHistory: boolean;
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
  errors: {
    loadResume: null,
    createEmploymentHistory: null,
    deleteEmploymentHistory: null,
  },
  loadings: {
    loadResume: false,
    createEmploymentHistory: false,
    deleteEmploymentHistory: false,
  },
};

export const { reducer, actions } = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setEmploymentHistories(
      state,
      { payload: employmentHistories }: PayloadAction<EmploymentHistory[]>
    ) {
      return {
        ...state,
        employmentHistories,
      };
    },
    // change
    changeTitle(state, { payload: title }: PayloadAction<string>) {
      return {
        ...state,
        title,
      };
    },
    changeBasicField(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: InputName<Basic>; value: string }>
    ) {
      return {
        ...state,
        [name]: value,
      };
    },
    changeEmploymentHistoryField(
      state,
      {
        payload: { id, name, value },
      }: PayloadAction<{
        id: string;
        name: InputName<EmploymentHistory>;
        value: string;
      }>
    ) {
      return {
        ...state,
        employmentHistories: state.employmentHistories.map(
          (employmentHistory) =>
            employmentHistory.id === id
              ? { ...employmentHistory, [name]: value }
              : employmentHistory
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
      state,
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
    completeCreateEmploymentHistory(state, { payload: employmentHistories }) {
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
    completeDeleteEmploymentHistory(state, { payload: employmentHistories }) {
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
  },
});

export const {
  changeTitle,
  changeBasicField,
  changeEmploymentHistoryField,
  setEmploymentHistories,
  startLoadResume,
  completeLoadResume,
  failLoadResume,
  startCreateEmploymentHistory,
  completeCreateEmploymentHistory,
  failCreateEmploymentHistory,
  startDeleteEmploymentHistory,
  completeDeleteEmploymentHistory,
  failDeleteEmploymentHistory,
} = actions;

export default reducer;
