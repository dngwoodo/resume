import { ChangeEvent } from 'react';

import Image from 'next/image';

import {
  EmploymentHistory as EmploymentHistoryType,
  InputName,
} from '@/types/Resume';

import {
  Container,
  Title,
  EmploymentHistoryDetail,
  TextAreaContainer,
} from './style';

import Input from '../Input';
import PeriodInput from '../PeriodInput';

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
  isShowDetail: boolean;
  onClickToggle: () => void;
  onClickDeleteEmploymentHistory: (id: string) => void;
};

export default function EmploymentHistory({
  employmentHistory,
  onChange,
  isShowDetail,
  onClickToggle,
  onClickDeleteEmploymentHistory,
}: Props) {
  const { id, jobTitle, employer, startDate, endDate, address, description } =
    employmentHistory;

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    onChange({
      id,
      name: event.target.name as InputName<EmploymentHistoryType>,
      value: event.target.value,
    });
  }

  function handleClick() {
    onClickDeleteEmploymentHistory(id);
  }

  return (
    <Container isShowDetail={isShowDetail}>
      <button type='button' onClick={handleClick}>
        <div data-testid='delete-employment-history' />
      </button>
      <Title
        isShowDetail={isShowDetail}
        data-testid='employment-history-title'
        onClick={onClickToggle}
        aria-hidden='true'
      >
        <div>
          <p>{jobTitle || '제목을 입력해주세요.'}</p>
          <p>
            {startDate && endDate
              ? `${startDate} - ${endDate}`
              : '근무 기간을 입력해주세요.'}
          </p>
        </div>
        <button type='button'>
          <Image
            src='/assets/arrow.png'
            alt='dropdown-toggle'
            layout='fill'
            data-testid='dropdown-toggle'
          />
        </button>
      </Title>
      <EmploymentHistoryDetail
        data-testid='employment-history-detail'
        isShowDetail={isShowDetail}
      >
        <Input
          label='직무 내용'
          id='employment-history-job-detail'
          placeholder='직무를 입력해주세요.'
          name='jobTitle'
          value={jobTitle}
          onChange={handleChange}
        />
        <Input
          label='회사명'
          id='employment-history-employer'
          placeholder='회사명을 입력하세요.'
          name='employer'
          value={employer}
          onChange={handleChange}
        />
        <PeriodInput
          label='근무 기간'
          id='employment-history-period'
          startDatePlaceholder='2020.10'
          endDatePlaceholder='2021.03'
          startDateName='start-date'
          endDateName='end-date'
          startDateValue={startDate}
          endDateValue={endDate}
          onChange={handleChange}
        />
        <Input
          label='지역'
          id='employment-history-address'
          placeholder='지역을 입력해주세요.'
          name='address'
          value={address}
          onChange={handleChange}
        />
        <TextAreaContainer>
          <label htmlFor='employment-history-description'>경력 기술</label>
          <textarea
            id='employment-history-description'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
          />
        </TextAreaContainer>
      </EmploymentHistoryDetail>
    </Container>
  );
}
