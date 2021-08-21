import { ChangeEvent } from 'react';

import { InputWrapper } from '../Basic/style';

type Props = {
  label: string;
  id: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
}: Props) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
