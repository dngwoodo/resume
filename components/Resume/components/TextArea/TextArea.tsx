import { ChangeEvent } from 'react';

type Props = {
  label: string;
  id: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
}: Props) {
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
