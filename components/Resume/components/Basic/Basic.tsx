import { Basic as BasicType, InputName } from '@/types/Resume';
import { ChangeEvent } from 'react';

import { Container, InputWrapper, TextAreaWrapper } from './style';

type Props = {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  selfIntroduction: string;
  onChange: ({
    name,
    value,
  }: {
    name: InputName<BasicType>;
    value: string;
  }) => void;
};

export default function Basic({
  name,
  jobTitle,
  email,
  phone,
  address,
  selfIntroduction,
  onChange,
}: Props) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    onChange({
      name: event.target.name as InputName<BasicType>,
      value: event.target.value,
    });
  }

  return (
    <Container>
      <InputWrapper>
        <label htmlFor='name'>이름</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='이름을 입력해주세요.'
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='jobTitle'>직업군</label>
        <input
          id='jobTitle'
          type='text'
          name='jobTitle'
          value={jobTitle}
          onChange={handleChange}
          placeholder='직업군을 입력해주세요.'
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='email'>이메일</label>
        <input
          id='email'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='이메일을 입력해주세요.'
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='phone'>휴대전화</label>
        <input
          id='phone'
          type='text'
          name='phone'
          value={phone}
          onChange={handleChange}
          placeholder='휴대폰 번호를 입력해주세요.'
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='address'>거주지</label>
        <input
          id='address'
          type='text'
          name='address'
          value={address}
          onChange={handleChange}
          placeholder='거주지를 입력해주세요.'
        />
      </InputWrapper>
      <TextAreaWrapper>
        <label htmlFor='selfIntroduction'>Introduction</label>
        <textarea
          id='selfIntroduction'
          name='selfIntroduction'
          value={selfIntroduction}
          onChange={handleChange}
          placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
        />
      </TextAreaWrapper>
    </Container>
  );
}
