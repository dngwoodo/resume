import Image from 'next/image';

import {
  InputName,
  EmploymentHistory as EmploymentHistoryType,
} from '@/types/Resume';

import Container from './style';

import EmploymentHistory from '../EmploymentHistory';

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
  onClickDeleteEmploymentHistory: (id: string) => void;
  onClickAddEmploymentHistory: () => void;
};

export default function EmploymentHistories({
  employmentHistories,
  onChange,
  onClickDeleteEmploymentHistory,
  onClickAddEmploymentHistory,
}: Props) {
  return (
    <Container>
      <h5>경력</h5>
      <p>근무 경력을 최근순으로 입력해주세요.</p>
      <ul>
        {employmentHistories.map((employmentHistory) => (
          <EmploymentHistory
            key={employmentHistory.id}
            employmentHistory={employmentHistory}
            onChange={onChange}
            onClickDeleteEmploymentHistory={onClickDeleteEmploymentHistory}
          />
        ))}
      </ul>
      <button type='button' onClick={onClickAddEmploymentHistory}>
        <div>
          <div>
            <Image
              src='/assets/plus.png'
              alt='add-employment-history'
              layout='fill'
            />
          </div>
        </div>
        <span>경력 추가하기</span>
      </button>
    </Container>
  );
}
