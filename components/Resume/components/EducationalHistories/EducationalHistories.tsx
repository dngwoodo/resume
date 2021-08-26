import Image from 'next/image';

import { InputName, EducationalHistory as EducationalHistoryType } from '@/types/Resume';

import Container from './style';

import EducationalHistory from '../EducationalHistory';

type Props = {
  educationalHistories: EducationalHistoryType[];
  onChange: ({ id, name, value }: { id: string; name: InputName<EducationalHistoryType>; value: string }) => void;
  onClickDeleteEducationalHistory: (id: string) => void;
  onClickAddEducationalHistory: () => void;
};

export default function EmploymentHistories({
  educationalHistories,
  onChange,
  onClickDeleteEducationalHistory,
  onClickAddEducationalHistory,
}: Props) {
  return (
    <Container>
      <h5>학력</h5>
      <p>최종 학력 순서로 입력해주세요.</p>
      <ul>
        {educationalHistories.map((educationalHistory) => (
          <EducationalHistory
            key={educationalHistory.id}
            educationalHistory={educationalHistory}
            onChange={onChange}
            onClickDeleteEducationalHistory={onClickDeleteEducationalHistory}
          />
        ))}
      </ul>
      <button type='button' onClick={onClickAddEducationalHistory}>
        <div>
          <div>
            <Image src='/assets/plus.png' alt='add-employment-history' layout='fill' />
          </div>
        </div>
        <span>학력 추가하기</span>
      </button>
    </Container>
  );
}
