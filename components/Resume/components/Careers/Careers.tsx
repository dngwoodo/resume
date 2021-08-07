/* eslint-disable no-unused-vars */
import Image from 'next/image';

import CareerContainer from '../../containers/CareerContainer';

type Props = {
  careers: {
    id: number;
    title: string;
    jobDetail: string;
    company: string;
    startDate: string;
    endDate: string;
    region: string;
    description: string;
  }[];
  onChange: ({
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
  }) => void;
  onClickDeleteCareer: (id: number) => void;
  onClickAddCareer: () => void;
};

export default function Careers({
  careers,
  onChange,
  onClickDeleteCareer,
  onClickAddCareer,
}: Props) {
  return (
    <div>
      <ul>
        {careers.map((career) => (
          <CareerContainer
            key={career.id}
            career={career}
            onChange={onChange}
            onClickDeleteCareer={onClickDeleteCareer}
          />
        ))}
      </ul>
      <button type='button' onClick={onClickAddCareer}>
        <div>
          <Image src='/assets/plus.png' alt='add-career' layout='fill' />
        </div>
        경력 추가하기
      </button>
    </div>
  );
}
