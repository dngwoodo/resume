import { Dispatch } from 'redux';

import {
  addCareer,
  removeCareer,
  updateResume,
  fetchResume,
} from '@/services/resume';

import { setResume, setCareers } from '@/redux/slice';

export function loadResume() {
  return async (dispatch: Dispatch) => {
    const { data } = await fetchResume();
    dispatch(setResume(data));
  };
}

// TODO: 실제로는 데이터를 받아서 반환해주는 로직으로 변경 해야함.
export function changeResume() {
  return async (dispatch: Dispatch) => {
    const { data } = await updateResume();

    dispatch(setResume(data)); // setResume에 받아온 데이터를 넣어야함.
  };
}

export function createCareer() {
  return async (dispatch: Dispatch) => {
    const { data } = await addCareer();
    dispatch(setCareers(data));
  };
}

export function deleteCareer(id: string) {
  return async (dispatch: Dispatch) => {
    const { data } = await removeCareer(id);
    dispatch(setCareers(data));
  };
}
