import { ChangeEvent } from 'react';

import { Container, InputWrapper, TextAreaWrapper } from './style';

type Props = {
  name: string;
  occupation: string;
  email: string;
  phoneNumber: string;
  address: string;
  introduction: string;
  // eslint-disable-next-line no-unused-vars
  onChange: ({ name, value }: { name: string; value: string }) => void;
};

export default function Basic({
  name,
  occupation,
  email,
  phoneNumber,
  address,
  introduction,
  onChange,
}: Props) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    onChange({
      name: event.target.name,
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
        <label htmlFor='occupation'>직업군</label>
        <input
          id='occupation'
          type='text'
          name='occupation'
          value={occupation}
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
        <label htmlFor='phoneNumber'>휴대전화</label>
        <input
          id='phoneNumber'
          type='text'
          name='phoneNumber'
          value={phoneNumber}
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
        <label htmlFor='introduction'>Introduction</label>
        <textarea
          id='introduction'
          name='introduction'
          value={introduction}
          onChange={handleChange}
          placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
        />
      </TextAreaWrapper>
    </Container>
  );
}
