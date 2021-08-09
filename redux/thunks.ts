import { Dispatch } from 'redux';

import {
  addCareer,
  removeCareer,
  updateResume,
  fetchResume,
} from '@/services/resume';

import {
  startLoadResume,
  completeLoadResume,
  failLoadResume,
  startCreateCareer,
  completeCreateCareer,
  failCreateCareer,
  startDeleteCareer,
  completeDeleteCareer,
  failDeleteCareer,
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

export function createCareer() {
  return async (dispatch: Dispatch) => {
    dispatch(startCreateCareer());
    try {
      const { data } = await addCareer();
      dispatch(completeCreateCareer(data));
    } catch (error) {
      dispatch(failCreateCareer(error));
    }
  };
}

export function deleteCareer(id: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startDeleteCareer());
    try {
      const { data } = await removeCareer(id);
      dispatch(completeDeleteCareer(data));
    } catch (error) {
      dispatch(failDeleteCareer(error));
    }
  };
}
