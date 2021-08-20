import Image from 'next/image';

import {
  InputName,
  EmploymentHistory as EmploymentHistoryType,
} from '@/types/Resume';

import CareerContainer from '../../containers/CareerContainer';

import Container from './style';

type Props = {
  employmentHistories: EmploymentHistoryType[];
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
  onClickAddCareer: () => void;
};

export default function Careers({
  employmentHistories,
  onChange,
  onClickDeleteCareer,
  onClickAddCareer,
}: Props) {
  return (
    <Container>
      <h5>경력</h5>
      <p>근무 경력을 최근순으로 입력해주세요.</p>
      <ul>
        {employmentHistories.map((employmentHistory) => (
          <CareerContainer
            key={employmentHistory.id}
            employmentHistory={employmentHistory}
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
