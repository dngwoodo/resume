import { useState } from 'react';

import {
  EmploymentHistory as EmploymentHistoryType,
  InputName,
} from '@/types/Resume';

import EmploymentHistory from '../../components/EmploymentHistory';

type Props = {
  employmentHistory: EmploymentHistoryType;
  onChange: ({
    id,
    name,
    value,
  }: {
    id: string;
    name: InputName<EmploymentHistoryType>;
    value: string;
  }) => void;
  onClickDeleteEmploymentHistory: (id: string) => void;
};

export default function EmploymentHistoryContainer({
  employmentHistory,
  onChange,
  onClickDeleteEmploymentHistory,
}: Props) {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  function handleClickToggle() {
    setIsShowDetail(!isShowDetail);
  }

  return (
    <EmploymentHistory
      employmentHistory={employmentHistory}
      onChange={onChange}
      isShowDetail={isShowDetail}
      onClickToggle={handleClickToggle}
      onClickDeleteEmploymentHistory={onClickDeleteEmploymentHistory}
    />
  );
}
