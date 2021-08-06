import { ChangeEvent } from 'react';

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
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <label htmlFor='name'>이름</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='occupation'>직업군</label>
        <input
          id='occupation'
          type='text'
          name='occupation'
          value={occupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>이메일</label>
        <input
          id='email'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='phoneNumber'>휴대전화</label>
        <input
          id='phoneNumber'
          type='text'
          name='phoneNumber'
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='address'>거주지</label>
        <input
          id='address'
          type='text'
          name='address'
          value={address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='introduction'>Introduction</label>
        <input
          id='introduction'
          type='textarea'
          name='introduction'
          value={introduction}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
