import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Basic, Career, InputName } from '@/types/Resume';

type ResumeState = {
  title: string;
  basic: Basic;
  careers: Career[];
};

type InitialState = {
  errors: {
    loadResume: string | null;
    createCareer: string | null;
    deleteCareer: string | null;
  };
  loadings: {
    loadResume: boolean;
    createCareer: boolean;
    deleteCareer: boolean;
  };
};

export const initialState: ResumeState & InitialState = {
  title: '이력서 제목',
  basic: {
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    selfIntroduction: '',
  },
  careers: [],
  errors: {
    loadResume: null,
    createCareer: null,
    deleteCareer: null,
  },
  loadings: {
    loadResume: false,
    createCareer: false,
    deleteCareer: false,
  },
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
    setCareers(state, { payload: careers }: PayloadAction<Career[]>) {
      return {
        ...state,
        careers,
      };
    },
    // change
    changeBasicField(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: InputName<Basic>; value: string }>
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
        name: InputName<Career>;
        value: string;
      }>
    ) {
      return {
        ...state,
        careers: state.careers.map((career) =>
          career.id === id ? { ...career, [name]: value } : career
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
    // createCareer
    startCreateCareer(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createCareers: true,
        },
      };
    },
    completeCreateCareer(state, { payload: newCareer }) {
      const { loadings, errors } = state;

      return {
        ...state,
        careers: newCareer,
        loadings: {
          ...loadings,
          createCareer: false,
        },
        errors: {
          ...errors,
          createCareer: null,
        },
      };
    },
    failCreateCareer(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          createCareer: false,
        },
        errors: {
          ...errors,
          createCareer: error,
        },
      };
    },
    // deleteCareer
    startDeleteCareer(state) {
      const { loadings } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          deleteCareers: true,
        },
      };
    },
    completeDeleteCareer(state, { payload: newCareer }) {
      const { loadings, errors } = state;

      return {
        ...state,
        careers: newCareer,
        loadings: {
          ...loadings,
          deleteCareer: false,
        },
        errors: {
          ...errors,
          deleteCareer: null,
        },
      };
    },
    failDeleteCareer(state, { payload: error }) {
      const { loadings, errors } = state;

      return {
        ...state,
        loadings: {
          ...loadings,
          deleteCareer: false,
        },
        errors: {
          ...errors,
          deleteCareer: error,
        },
      };
    },
  },
});

export const {
  setTitle,
  changeBasicField,
  changeCareerField,
  setCareers,
  startLoadResume,
  completeLoadResume,
  failLoadResume,
  startCreateCareer,
  completeCreateCareer,
  failCreateCareer,
  startDeleteCareer,
  completeDeleteCareer,
  failDeleteCareer,
} = actions;

export default reducer;
