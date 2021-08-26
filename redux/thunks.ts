import { Dispatch } from 'redux';

import {
  addEmploymentHistory, //
  removeEmploymentHistory,
  updateResume,
  fetchResume,
  addEducationalHistory,
  removeEducationalHistory,
} from '@/services/resume';

import {
  startLoadResume,
  completeLoadResume,
  failLoadResume,
  startCreateEmploymentHistory,
  completeCreateEmploymentHistory,
  failCreateEmploymentHistory,
  startDeleteEmploymentHistory,
  completeDeleteEmploymentHistory,
  failDeleteEmploymentHistory,
  startDeleteEducationalHistory,
  completeDeleteEducationalHistory,
  failDeleteEducationalHistory,
  startCreateEducationalHistory,
  completeCreateEducationalHistory,
  failCreateEducationalHistory,
} from '@/redux/slice';

export function loadResume() {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadResume());
    try {
      const { data } = await fetchResume();
      dispatch(completeLoadResume(data));
    } catch (error) {
      dispatch(failLoadResume(error));
    }
  };
}

export function changeResume() {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadResume());
    try {
      const { data } = await updateResume(); // TODO: 나중에는 받아온 데이터를 넣어야함.
      dispatch(completeLoadResume(data));
    } catch (error) {
      dispatch(failLoadResume(error));
    }
  };
}

export function createEmploymentHistory() {
  return async (dispatch: Dispatch) => {
    dispatch(startCreateEmploymentHistory());
    try {
      const { data } = await addEmploymentHistory();
      dispatch(completeCreateEmploymentHistory(data));
    } catch (error) {
      dispatch(failCreateEmploymentHistory(error));
    }
  };
}

export function deleteEmploymentHistory(id: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startDeleteEmploymentHistory());
    try {
      const { data } = await removeEmploymentHistory(id);
      dispatch(completeDeleteEmploymentHistory(data));
    } catch (error) {
      dispatch(failDeleteEmploymentHistory(error));
    }
  };
}

export function createEducationalHistory() {
  return async (dispatch: Dispatch) => {
    dispatch(startCreateEducationalHistory());
    try {
      const { data } = await addEducationalHistory();
      dispatch(completeCreateEducationalHistory(data));
    } catch (error) {
      dispatch(failCreateEducationalHistory(error));
    }
  };
}

export function deleteEducationalHistory(id: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startDeleteEducationalHistory());
    try {
      const { data } = await removeEducationalHistory(id);
      dispatch(completeDeleteEducationalHistory(data));
    } catch (error) {
      dispatch(failDeleteEducationalHistory(error));
    }
  };
}
