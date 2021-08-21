import { InputName } from '@/types/Resume';
import { ChangeEvent } from 'react';

import { InputWrapper } from '../Basic/style';

type Props<T> = {
  label: string;
  id: string;
  placeholder: string;
  name: InputName<T>;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input<T>({ label, id, placeholder, name, value, onChange }: Props<T>) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        name={name} //
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
