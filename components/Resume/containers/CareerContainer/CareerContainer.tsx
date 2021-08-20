/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { Career as CareerType, InputName } from '@/types/Resume';

import Career from '../../components/Career';

type Props = {
  career: CareerType;
  onChange: ({
    id,
    name,
    value,
  }: {
    id: string;
    name: InputName<CareerType>;
    value: string;
  }) => void;
  onClickDeleteCareer: (id: string) => void;
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
