import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeCareerField } from '@/redux/slice';
import { createCareer, deleteCareer, loadCareers } from '@/redux/thunks';

import { CareerInputName } from '@/types/Resume';
import { useEffect } from 'react';

import Careers from '../../components/Careers';

export default function CareersContainer() {
  const { careers } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function handleChange({
    id,
    name,
    value,
  }: {
    id: string;
    name: CareerInputName;
    value: string;
  }) {
    dispatch(changeCareerField({ id, name, value }));
  }

  function handleClickDeleteCareer(id: string) {
    dispatch(deleteCareer(id));
  }

  function handleClickAddCareer() {
    dispatch(createCareer());
  }

  useEffect(() => {
    dispatch(loadCareers());
  }, [dispatch]);

  return (
    <Careers
      careers={careers}
      onChange={handleChange}
      onClickDeleteCareer={handleClickDeleteCareer}
      onClickAddCareer={handleClickAddCareer}
    />
  );
}
