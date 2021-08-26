import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeEducationalHistoryField } from '@/redux/slice';
import { createEducationalHistory, deleteEducationalHistory } from '@/redux/thunks';

import { EducationalHistory, InputName } from '@/types/Resume';

import EducationalHistories from '../../components/EducationalHistories';

export default function EducationalHistoriesContainer() {
  const { educationalHistories } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function handleChange({ id, name, value }: { id: string; name: InputName<EducationalHistory>; value: string }) {
    dispatch(changeEducationalHistoryField({ id, name, value }));
  }

  function handleClickDeleteEducationalHistory(id: string) {
    dispatch(deleteEducationalHistory(id));
  }

  function handleClickAddEducationalHistory() {
    dispatch(createEducationalHistory());
  }

  return (
    <EducationalHistories
      educationalHistories={educationalHistories}
      onChange={handleChange}
      onClickDeleteEducationalHistory={handleClickDeleteEducationalHistory}
      onClickAddEducationalHistory={handleClickAddEducationalHistory}
    />
  );
}
