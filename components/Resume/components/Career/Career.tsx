/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

import Image from 'next/image';

import { Career as CareerType, CareerInputName } from '@/types/Resume';

import { Container, Title, CareerDetail, PeriodInputWrapper } from './style';
import { InputWrapper, TextAreaWrapper } from '../Basic/style';

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
  isShowDetail: boolean;
  onClickToggle: () => void;
  onClickDeleteCareer: (id: number) => void;
};

export default function Career({
  career,
  onChange,
  isShowDetail,
  onClickToggle,
  onClickDeleteCareer,
}: Props) {
  const {
    id,
    title,
    jobDetail,
    company,
    startDate,
    endDate,
    region,
    description,
  } = career;

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    onChange({
      id,
      name: event.target.name as CareerInputName,
      value: event.target.value,
    });
  }

  function handleClick() {
    onClickDeleteCareer(id);
  }

  return (
    <Container isShowDetail={isShowDetail}>
      <button type='button' onClick={handleClick}>
        <div data-testid='delete-career' />
      </button>
      <Title
        isShowDetail={isShowDetail}
        data-testid='career-title'
        onClick={onClickToggle}
        aria-hidden='true'
      >
        <div>
          <p>{jobDetail || '제목을 입력해주세요.'}</p>
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
      <CareerDetail data-testid='career-detail' isShowDetail={isShowDetail}>
        <InputWrapper>
          <label htmlFor='career-job-detail'>직무 내용</label>
          <input
            id='career-job-detail'
            type='text'
            name='jobDetail'
            value={jobDetail}
            onChange={handleChange}
            placeholder='직무를 입력해주세요.'
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor='career-company'>회사명</label>
          <input
            id='career-company'
            type='text'
            name='company'
            value={company}
            onChange={handleChange}
            placeholder='회사명을 입력하세요.'
          />
        </InputWrapper>
        <PeriodInputWrapper>
          <label>근무 기간</label>
          <div>
            <input
              aria-label='career-start-date'
              type='text'
              name='startDate'
              value={startDate}
              onChange={handleChange}
              placeholder='2020.10'
            />
            <input
              aria-label='career-end-date'
              type='text'
              name='endDate'
              value={endDate}
              onChange={handleChange}
              placeholder='2021.03'
            />
          </div>
        </PeriodInputWrapper>
        <InputWrapper>
          <label htmlFor='career-region'>지역</label>
          <input
            type='text'
            id='career-region'
            name='region'
            value={region}
            onChange={handleChange}
            placeholder='지역을 입력해주세요.'
          />
        </InputWrapper>
        <TextAreaWrapper>
          <label htmlFor='career-description'>경력 기술</label>
          <textarea
            id='career-description'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
          />
        </TextAreaWrapper>
      </CareerDetail>
    </Container>
  );
}
