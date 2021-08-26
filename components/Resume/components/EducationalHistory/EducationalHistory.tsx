import { ChangeEvent } from 'react';

import Image from 'next/image';

import { EducationalHistory as EducationalHistoryType, InputName } from '@/types/Resume';

import { Container, Title, Detail, TextAreaContainer, CheckBox } from './style';

import Input from '../Input';
import PeriodInput from '../PeriodInput';
import TextArea from '../TextArea';

type Props = {
  educationalHistory: EducationalHistoryType;
  onChange: ({ id, name, value }: { id: string; name: InputName<EducationalHistoryType>; value: string }) => void;
  onClickDeleteEducationalHistory: (id: string) => void;
};

export default function EducationalHistory({ educationalHistory, onChange, onClickDeleteEducationalHistory }: Props) {
  const { id, school, degree, startDate, endDate, grade, description } = educationalHistory;

  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    onChange({
      id,
      name: event.target.name as InputName<EducationalHistoryType>,
      value: event.target.value,
    });
  }

  function handleClick() {
    onClickDeleteEducationalHistory(id);
  }

  return (
    <Container>
      <button type='button' onClick={handleClick}>
        <div data-testid='delete-educational-history' />
      </button>
      <CheckBox id={id} type='checkbox' />
      <Title data-testid='educational-history-title' htmlFor={id}>
        <div>
          <p>{school || '제목을 입력해주세요.'}</p>
          <p>{startDate && endDate ? `${startDate} - ${endDate}` : '재학 기간을 입력해주세요.'}</p>
        </div>
        <button type='button'>
          <Image src='/assets/arrow.png' alt='dropdown-toggle' layout='fill' data-testid='dropdown-toggle' />
        </button>
      </Title>
      <Detail data-testid='educational-history-detail'>
        <Input<EducationalHistoryType>
          label='학교명'
          id='educational-history-school'
          placeholder='학교명을 입력해주세요.'
          name='school'
          value={school}
          onChange={handleChange}
        />
        <Input<EducationalHistoryType>
          label='전공 및 학위(예시: 경영학과 학사)'
          id='educational-history-degree'
          placeholder='전공을 입력해주세요.'
          name='degree'
          value={degree}
          onChange={handleChange}
        />
        <PeriodInput<EducationalHistoryType>
          label='재학 기간'
          id='educational-history-period'
          startDatePlaceholder='2020.10'
          endDatePlaceholder='2021.03'
          startDateName='startDate'
          endDateName='endDate'
          startDateValue={startDate}
          endDateValue={endDate}
          onChange={handleChange}
        />
        <Input<EducationalHistoryType>
          label='학점'
          id='educational-history-grade'
          placeholder='학점을 입력해주세요.'
          name='grade'
          value={grade}
          onChange={handleChange}
        />
        <TextAreaContainer>
          <TextArea<EducationalHistoryType>
            label='이수과목 또는 연구내용'
            id='educational-history-description'
            placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </TextAreaContainer>
      </Detail>
    </Container>
  );
}
