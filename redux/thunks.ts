import {
  addCareer,
  removeCareer,
  updateResume,
  fetchCareers,
} from '@/services/resume';

import { setResume, setCareers } from '@/redux/slice';

export function loadCareers() {
  return async (dispatch: any) => {
    const { data } = await fetchCareers();
    dispatch(setCareers(data));
  };
}

export function createCareer() {
  return async (dispatch: any) => {
    const { data } = await addCareer();
    dispatch(setCareers(data));
  };
}

export function deleteCareer(id: string) {
  return async (dispatch: any) => {
    const { data } = await removeCareer(id);
    dispatch(setCareers(data));
  };
}

// TODO: 실제로는 데이터를 받아서 반환해주는 로직으로 변경 해야함.
export function changeResume() {
  return async (dispatch: any) => {
    await updateResume();

    dispatch(setResume()); // setResume에 받아온 데이터를 넣어야함.
  };
}
