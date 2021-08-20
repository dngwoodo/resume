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
  PeriodInputWrapper,
} from './style';
import { InputWrapper, TextAreaWrapper } from '../Basic/style';

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
        <InputWrapper>
          <label htmlFor='employment-history-job-detail'>직무 내용</label>
          <input
            id='employment-history-job-detail'
            type='text'
            name='jobTitle'
            value={jobTitle}
            onChange={handleChange}
            placeholder='직무를 입력해주세요.'
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='employment-history-employer'>회사명</label>
          <input
            id='employment-history-employer'
            type='text'
            name='employer'
            value={employer}
            onChange={handleChange}
            placeholder='회사명을 입력하세요.'
          />
        </InputWrapper>
        <PeriodInputWrapper>
          <label id='employment-history-period'>근무 기간</label>
          <div>
            <input
              aria-labelledby='employment-history-period'
              type='text'
              name='startDate'
              value={startDate}
              onChange={handleChange}
              placeholder='2020.10'
            />
            <input
              aria-labelledby='employment-history-period'
              type='text'
              name='endDate'
              value={endDate}
              onChange={handleChange}
              placeholder='2021.03'
            />
          </div>
        </PeriodInputWrapper>
        <InputWrapper>
          <label htmlFor='employment-history-address'>지역</label>
          <input
            type='text'
            id='employment-history-address'
            name='address'
            value={address}
            onChange={handleChange}
            placeholder='지역을 입력해주세요.'
          />
        </InputWrapper>
        <TextAreaWrapper>
          <label htmlFor='employment-history-description'>경력 기술</label>
          <textarea
            id='employment-history-description'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
          />
        </TextAreaWrapper>
      </EmploymentHistoryDetail>
    </Container>
  );
}