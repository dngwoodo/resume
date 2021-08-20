import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeCareerField } from '@/redux/slice';
import { createCareer, deleteCareer } from '@/redux/thunks';

import { EmploymentHistory, InputName } from '@/types/Resume';

import Careers from '../../components/Careers';

export default function CareersContainer() {
  const { employmentHistories } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function handleChange({
    id,
    name,
    value,
  }: {
    id: string;
    name: InputName<EmploymentHistory>;
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

  return (
    <Careers
      employmentHistories={employmentHistories}
      onChange={handleChange}
      onClickDeleteCareer={handleClickDeleteCareer}
      onClickAddCareer={handleClickAddCareer}
    />
  );
}
