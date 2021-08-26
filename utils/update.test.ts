import { initialState } from '@/redux/slice';
import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import update, { createChangedState } from './update';

describe('createChangedState', () => {
  it('creates changed state', () => {
    expect(createChangedState(initialState, { loadings: { loadResume: true } })).toEqual({
      loadings: {
        ...initialState.loadings,

        loadResume: true,
      },
    });
  });
});

describe('update', () => {
  it('updates state', () => {
    expect(update(initialState, { title: '프론트엔드' })).toEqual({
      ...initialState,
      title: '프론트엔드',
    });

    expect(update(initialState, { employmentHistories: EMPLOYMENT_HISTORIES })).toEqual({
      ...initialState,
      employmentHistories: EMPLOYMENT_HISTORIES,
    });

    expect(update(initialState, { loadings: { loadResume: true } }, { errors: { loadResume: null } })).toEqual({
      ...initialState,
      loadings: {
        ...initialState.loadings,
        loadResume: true,
      },
      errors: {
        ...initialState.errors,
        loadResume: null,
      },
    });
  });
});
