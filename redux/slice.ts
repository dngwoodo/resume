import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResumeState {
  title: string;
}

const initialState: ResumeState = {
  title: '이력서 제목',
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
  },
});

export const { setTitle } = actions;

export default reducer;
