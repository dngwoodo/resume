import { PeriodInputWrapper } from '../EmploymentHistory/style';

type Props = {
  label: string;
  id: string;
  startDatePlaceholder: string;
  endDatePlaceholder: string;
  startDateName: string;
  endDateName: string;
  startDateValue: string;
  endDateValue: string;
  // TODO: any 없애기
  onChange: (event: any) => void;
};

export default function PeriodInput({
  label,
  id,
  startDatePlaceholder,
  endDatePlaceholder,
  startDateName,
  endDateName,
  startDateValue,
  endDateValue,
  onChange,
}: Props) {
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
