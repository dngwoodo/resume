/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { Career as CareerType, CareerInputName } from '@/types/Resume';

import Career from '../../components/Career';

type Props = {
  career: CareerType;
  onChange: ({
    id,
    name,
    value,
  }: {
    id: number;
    name: CareerInputName;
    value: string;
  }) => void;
  onClickDeleteCareer: (id: number) => void;
};

export default function CareerContainer({
  career,
  onChange,
  onClickDeleteCareer,
}: Props) {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  function handleClickToggle() {
    setIsShowDetail(!isShowDetail);
  }

  return (
    <Career
      career={career}
      onChange={onChange}
      isShowDetail={isShowDetail}
      onClickToggle={handleClickToggle}
      onClickDeleteCareer={onClickDeleteCareer}
    />
  );
}
