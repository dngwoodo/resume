import { InputName } from '@/types/Resume';
import { ChangeEvent } from 'react';

type Props<T> = {
  label: string;
  id: string;
  placeholder: string;
  name: InputName<T>;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea<T>({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
}: Props<T>) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
