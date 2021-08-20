import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { changeEmploymentHistoryField } from '@/redux/slice';
import {
  createEmploymentHistory,
  deleteEmploymentHistory,
} from '@/redux/thunks';

import { EmploymentHistory, InputName } from '@/types/Resume';

import EmploymentHistories from '../../components/EmploymentHistories';

export default function EmploymentHistoriesContainer() {
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
    dispatch(changeEmploymentHistoryField({ id, name, value }));
  }

  function handleClickDeleteEmploymentHistory(id: string) {
    dispatch(deleteEmploymentHistory(id));
  }

  function handleClickAddEmploymentHistory() {
    dispatch(createEmploymentHistory());
  }

  return (
    <EmploymentHistories
      employmentHistories={employmentHistories}
      onChange={handleChange}
      onClickDeleteEmploymentHistory={handleClickDeleteEmploymentHistory}
      onClickAddEmploymentHistory={handleClickAddEmploymentHistory}
    />
  );
}
