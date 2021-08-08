/* eslint-disable no-unused-vars */
import Image from 'next/image';

import { CareerInputName, Career as CareerType } from '@/types/Resume';

import CareerContainer from '../../containers/CareerContainer';

import Container from './style';

type Props = {
  careers: CareerType[];
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
  onClickAddCareer: () => void;
};

export default function Careers({
  careers,
  onChange,
  onClickDeleteCareer,
  onClickAddCareer,
}: Props) {
  return (
    <Container>
      <h5>경력</h5>
      <p>근무 경력을 최근순으로 입력해주세요.</p>
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
          <div>
            <Image src='/assets/plus.png' alt='add-career' layout='fill' />
          </div>
        </div>
        <span>경력 추가하기</span>
      </button>
    </Container>
  );
}
