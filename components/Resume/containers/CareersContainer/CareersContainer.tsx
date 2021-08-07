import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { addCareer, changeCareerField, deleteCareer } from '@/redux/slice';

import Careers from '../../components/Careers';

export default function CareersContainer() {
  const { careers } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function handleChange({
    id,
    name,
    value,
  }: {
    id: number;
    name:
      | 'title'
      | 'jobDetail'
      | 'company'
      | 'startDate'
      | 'endDate'
      | 'region'
      | 'description';
    value: string;
  }) {
    dispatch(changeCareerField({ id, name, value }));
  }

  function handleClickDeleteCareer(id: number) {
    dispatch(deleteCareer(id));
  }

  function handleClickAddCareer() {
    dispatch(addCareer());
  }

  return (
    <Careers
      careers={careers}
      onChange={handleChange}
      onClickDeleteCareer={handleClickDeleteCareer}
      onClickAddCareer={handleClickAddCareer}
    />
  );
}
