import { fireEvent, render } from '@testing-library/react';

import PeriodInput from './PeriodInput';

describe('PeriodInput', () => {
  /**
   * 할일
   * label 출력 v
   * input 2개 출력 v
   * label과 2개의 input은 연결되어있어야 함. v
   * label의 id값과 input의 aria-labelledBy값은 props로 받음. v
   * placeholder를 가지고 있음 v
   * label값을 props로 받아야함. v
   * placeholder값을 props로 받아야함. v
   * value를 출력 v
   * value는 props로 받음 v
   * input들은 name 속성을 가지고 있음 v
   * name값을 props로 받음 v
   * value변경 시 onChange 함수가 호출됨 v
   */

  const handleChange = jest.fn();

  function renderPeriodInput() {
    return render(
      <PeriodInput
        label='근무 기간'
        id='name'
        startDatePlaceholder='2020.10'
        endDatePlaceholder='2021.03'
        startDateValue='2019.03'
        endDateValue='2021.08'
        startDateName='start-date'
        endDateName='end-date'
        onChange={handleChange}
      />
    );
  }

  it('renders label, two inputs', () => {
    const { getByText, getByPlaceholderText } = renderPeriodInput();

    expect(getByText('근무 기간')).toBeInTheDocument();
    expect(getByPlaceholderText('2020.10')).toBeInTheDocument();
    expect(getByPlaceholderText('2021.03')).toBeInTheDocument();
  });

  it('connects label and two inputs', () => {
    const { getAllByLabelText } = renderPeriodInput();

    expect(getAllByLabelText('근무 기간')).toHaveLength(2);
  });

  it('renders input value', () => {
    const { getByDisplayValue } = renderPeriodInput();

    expect(getByDisplayValue('2019.03')).toBeInTheDocument();
    expect(getByDisplayValue('2021.08')).toBeInTheDocument();
  });

  it('has name attribute', () => {
    const { getByDisplayValue } = renderPeriodInput();

    expect(getByDisplayValue('2019.03')).toHaveAttribute('name', 'start-date');
    expect(getByDisplayValue('2021.08')).toHaveAttribute('name', 'end-date');
  });

  it('listens change event', () => {
    const { getByDisplayValue } = renderPeriodInput();

    fireEvent.change(getByDisplayValue('2019.03'), {
      target: { value: '2020.05' },
    });
    expect(handleChange).toBeCalledTimes(1);

    fireEvent.change(getByDisplayValue('2021.08'), {
      target: { value: '2020.05' },
    });
    expect(handleChange).toBeCalledTimes(2);
  });
});
