import { InputWrapper } from '../Basic/style';

type Props = {
  label: string;
  id: string;
  placeholder: string;
  name: string;
  value: string;
  // TODO: any 변경 필요
  onChange: (event: any) => void;
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
