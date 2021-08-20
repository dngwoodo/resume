import { useState } from 'react';

import {
  EmploymentHistory as EmploymentHistoryType,
  InputName,
} from '@/types/Resume';

import Career from '../../components/Career';

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
  onClickDeleteCareer: (id: string) => void;
};

export default function CareerContainer({
  employmentHistory,
  onChange,
  onClickDeleteCareer,
}: Props) {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  function handleClickToggle() {
    setIsShowDetail(!isShowDetail);
  }

  return (
    <Career
      employmentHistory={employmentHistory}
      onChange={onChange}
      isShowDetail={isShowDetail}
      onClickToggle={handleClickToggle}
      onClickDeleteCareer={onClickDeleteCareer}
    />
  );
}
