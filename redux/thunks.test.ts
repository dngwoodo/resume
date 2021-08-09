import { ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  loadResume,
  changeResume,
  createCareer,
  deleteCareer,
} from '@/redux/thunks';

import {
  addCareer,
  fetchResume,
  updateResume,
  removeCareer,
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
      (addCareer as jest.Mock).mockResolvedValue([]);
      (removeCareer as jest.Mock).mockResolvedValue([]);
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

    it('dispatches createCareer action', async () => {
      const store = mockStore({});

      await store.dispatch(createCareer());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startCreateCareer',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeCreateCareer',
        payload: undefined,
      });
    });

    it('dispatches deleteCareer action', async () => {
      const store = mockStore({});

      await store.dispatch(deleteCareer('First'));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startDeleteCareer',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/completeDeleteCareer',
        payload: undefined,
      });
    });
  });

  context('when data fetching fail', () => {
    const error = new Error('Fail');

    beforeEach(() => {
      (fetchResume as jest.Mock).mockRejectedValue(error);
      (updateResume as jest.Mock).mockRejectedValue(error);
      (addCareer as jest.Mock).mockRejectedValue(error);
      (removeCareer as jest.Mock).mockRejectedValue(error);
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

    it('dispatches createCareer action', async () => {
      const store = mockStore({});

      await store.dispatch(createCareer());

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startCreateCareer',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failCreateCareer',
        payload: error,
      });
    });

    it('dispatches deleteCareer action', async () => {
      const store = mockStore({});

      await store.dispatch(deleteCareer('First'));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'resume/startDeleteCareer',
        payload: undefined,
      });

      expect(actions[1]).toEqual({
        type: 'resume/failDeleteCareer',
        payload: error,
      });
    });
  });
});
