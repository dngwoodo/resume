import { Basic as BasicType, InputName } from '@/types/Resume';
import { ChangeEvent } from 'react';
import Input from '../Input';

import { Container, TextAreaWrapper } from './style';

type Props = {
  basic: BasicType;
  onChange: ({
    name,
    value,
  }: {
    name: InputName<BasicType>;
    value: string;
  }) => void;
};

export default function Basic({ basic, onChange }: Props) {
  const { name, jobTitle, email, phone, address, selfIntroduction } = basic;

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
      <Input
        label='이름'
        id='basic-name'
        placeholder='이름을 입력해주세요.'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <Input
        label='직업군'
        id='basic-job-title'
        placeholder='직업군을 입력해주세요.'
        name='jobTitle'
        value={jobTitle}
        onChange={handleChange}
      />
      <Input
        label='이메일'
        id='basic-email'
        placeholder='이메일을 입력해주세요'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <Input
        label='휴대전화'
        id='basic-phone'
        placeholder='휴대폰 번호를 입력해주세요.'
        name='phone'
        value={phone}
        onChange={handleChange}
      />
      <Input
        label='거주지'
        id='basic-address'
        placeholder='거주지를 입력해주세요.'
        name='address'
        value={address}
        onChange={handleChange}
      />
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
