import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loadResume,
  changeResume,
  createCareer,
  deleteCareer,
} from '@/redux/thunks';
import { setResume } from '@/redux/slice';

jest.mock('@/services/resume');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('thunks', () => {
  it('dispatches loadResume action', async () => {
    const store = mockStore({});

    await store.dispatch<any>(loadResume());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setCareers',
      payload: undefined,
    });
  });

  it('dispatches changeResume action', async () => {
    const store = mockStore({});

    await store.dispatch<any>(changeResume());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setResume());
  });

  it('dispatches createCareer action', async () => {
    const store = mockStore({});

    await store.dispatch<any>(createCareer());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setCareers',
      payload: undefined,
    });
  });

  it('dispatches deleteCareer action', async () => {
    const store = mockStore({});

    await store.dispatch<any>(deleteCareer('First'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'resume/setCareers',
      payload: undefined,
    });
  });
});
