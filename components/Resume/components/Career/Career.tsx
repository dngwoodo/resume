/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

import Image from 'next/image';

import styled from '@emotion/styled';

import { CareerInputName } from '@/types/Resume';

type Props = {
  id: number;
  title: string;
  jobDetail: string;
  company: string;
  startDate: string;
  endDate: string;
  region: string;
  description: string;
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

const CareerDetail = styled.div(
  ({ isShowDetail }: { isShowDetail: boolean }) => ({
    height: isShowDetail ? 'auto' : '0px',
  })
);

export default function Career({
  id,
  title,
  jobDetail,
  company,
  startDate,
  endDate,
  region,
  description,
  onChange,
  isShowDetail,
  onClickToggle,
  onClickDeleteCareer,
}: Props) {
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
    <li>
      <button type='button' onClick={handleClick}>
        <Image
          src='/assets/delete'
          alt='add-career'
          layout='fill'
          data-testid='delete-career'
        />
      </button>
      <div
        data-testid='career-title'
        onClick={onClickToggle}
        aria-hidden='true'
      >
        <div>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='제목'
          />
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
      </div>
      <CareerDetail data-testid='career-detail' isShowDetail>
        <div>
          <label htmlFor='career-job-detail'>직무 내용</label>
          <input
            id='career-job-detail'
            type='text'
            name='jobDetail'
            value={jobDetail}
            onChange={handleChange}
            placeholder='직무를 입력해주세요.'
          />
        </div>
        <div>
          <label htmlFor='career-company'>회사명</label>
          <input
            id='career-company'
            type='text'
            name='company'
            value={company}
            onChange={handleChange}
            placeholder='회사명을 입력하세요.'
          />
        </div>
        <div>
          <label htmlFor='career-period'>근무 기간</label>
          <input
            id='career-period'
            type='text'
            name='startDate'
            value={startDate}
            onChange={handleChange}
            placeholder='2020.10'
          />
          <input
            type='text'
            name='endDate'
            value={endDate}
            onChange={handleChange}
            placeholder='2021.03'
          />
        </div>
        <div>
          <label htmlFor='career-region'>지역</label>
          <input
            type='text'
            id='career-region'
            name='region'
            value={region}
            onChange={handleChange}
            placeholder='지역을 입력해주세요.'
          />
        </div>
        <div>
          <label htmlFor='career-description'>경력 기술</label>
          <textarea
            id='career-description'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
          />
        </div>
      </CareerDetail>
    </li>
  );
}
