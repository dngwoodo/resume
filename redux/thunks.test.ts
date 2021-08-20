import { ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  loadResume,
  changeResume,
  createEmploymentHistory,
  deleteEmploymentHistory,
} from '@/redux/thunks';

import {
  addEmploymentHistory,
  removeEmploymentHistory,
  fetchResume,
  updateResume,
} from '../services/resume';

jest.mock('@/services/resume');

type AppState = Record<string, never>; // {} 를 의미

const middlewares = [thunk];
const mockStore = configureStore<AppState, ThunkDispatch<AppState, any, any>>(
  middlewares
);

describe('thunks', () => {
  context('when data fetching success', () => {
    beforeEach(() => {
      (fetchResume as jest.Mock).mockResolvedValue({});
      (updateResume as jest.Mock).mockResolvedValue({});
      (addEmploymentHistory as jest.Mock).mockResolvedValue([]);
      (removeEmploymentHistory as jest.Mock).mockResolvedValue([]);
    });

    it('dispatches loadResume action', async () => {
      const store = mockStore({});

      await store.dispatch(loadResume());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startLoadResume',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeLoadResume',
        payload: undefined,
      });
    });

    it('dispatches changeResume action', async () => {
      const store = mockStore({});

      await store.dispatch(changeResume());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startLoadResume',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeLoadResume',
        payload: undefined,
      });
    });

    it('dispatches createEmploymentHistory action', async () => {
      const store = mockStore({});

      await store.dispatch(createEmploymentHistory());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startCreateEmploymentHistory',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeCreateEmploymentHistory',
        payload: undefined,
      });
    });

    it('dispatches deleteEmploymentHistory action', async () => {
      const store = mockStore({});

      await store.dispatch(deleteEmploymentHistory('First'));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startDeleteEmploymentHistory',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeDeleteEmploymentHistory',
        payload: undefined,
      });
    });
  });

  context('when data fetching fail', () => {
    const error = new Error('Fail');

    beforeEach(() => {
      (fetchResume as jest.Mock).mockRejectedValue(error);
      (updateResume as jest.Mock).mockRejectedValue(error);
      (addEmploymentHistory as jest.Mock).mockRejectedValue(error);
      (removeEmploymentHistory as jest.Mock).mockRejectedValue(error);
    });

    it('dispatches loadResume action', async () => {
      const store = mockStore({});

      await store.dispatch(loadResume());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startLoadResume',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failLoadResume',
        payload: error,
      });
    });

    it('dispatches changeResume action', async () => {
      const store = mockStore({});

      await store.dispatch(changeResume());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startLoadResume',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failLoadResume',
        payload: error,
      });
    });

    it('dispatches createEmploymentHistory action', async () => {
      const store = mockStore({});

      await store.dispatch(createEmploymentHistory());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startCreateEmploymentHistory',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failCreateEmploymentHistory',
        payload: error,
      });
    });

    it('dispatches deleteEmploymentHistory action', async () => {
      const store = mockStore({});

      await store.dispatch(deleteEmploymentHistory('First'));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startDeleteEmploymentHistory',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failDeleteEmploymentHistory',
        payload: error,
      });
    });
  });
});
