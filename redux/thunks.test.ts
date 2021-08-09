import { ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  loadResume,
  changeResume,
  createCareer,
  deleteCareer,
} from '@/redux/thunks';

jest.mock('@/services/resume');

type AppState = Record<string, never>; // {} 를 의미

const middlewares = [thunk];
const mockStore = configureStore<AppState, ThunkDispatch<AppState, any, any>>(
  middlewares
);

describe('thunks', () => {
  it('dispatches loadResume action', async () => {
    const store = mockStore({});

    await store.dispatch(loadResume());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setResume',
      payload: undefined,
    });
  });

  it('dispatches changeResume action', async () => {
    const store = mockStore({});

    await store.dispatch(changeResume());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setResume',
      payload: undefined,
    });
  });

  it('dispatches createCareer action', async () => {
    const store = mockStore({});

    await store.dispatch(createCareer());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setCareers',
      payload: undefined,
    });
  });

  it('dispatches deleteCareer action', async () => {
    const store = mockStore({});

    await store.dispatch(deleteCareer('First'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setCareers',
      payload: undefined,
    });
  });
});
