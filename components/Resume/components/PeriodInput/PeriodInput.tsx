import { InputName } from '@/types/Resume';
import { ChangeEvent } from 'react';

import { PeriodInputWrapper } from '../EmploymentHistory/style';

type Props<T> = {
  label: string;
  id: string;
  startDatePlaceholder: string;
  endDatePlaceholder: string;
  startDateName: InputName<T>;
  endDateName: InputName<T>;
  startDateValue: string;
  endDateValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function PeriodInput<T>({
  label,
  id,
  startDatePlaceholder,
  endDatePlaceholder,
  startDateName,
  endDateName,
  startDateValue,
  endDateValue,
  onChange,
}: Props<T>) {
  return (
    <PeriodInputWrapper>
      <label id={id}>{label}</label>
      <div>
        <input
          aria-labelledby={id}
          type='text'
          placeholder={startDatePlaceholder}
          value={startDateValue}
          name={startDateName}
          onChange={onChange}
        />
        <input
          aria-labelledby={id}
          type='text'
          placeholder={endDatePlaceholder}
          value={endDateValue}
          name={endDateName}
          onChange={onChange}
        />
      </div>
    </PeriodInputWrapper>
  );
}
