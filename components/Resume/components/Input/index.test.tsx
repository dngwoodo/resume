import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  /**
   * 할일
   * label이 있어야함 v
   * input이 있어야함 v
   * input, label이 연결되어져있어야함 v
   * label값을 받아서 화면에 출력해줘야함. v
   * placeholder를 받아서 화면에 출력해줘야함. v
   * name을 받아서 name값을 넣어줘야함. v
   * id을 받아서 id값을 넣어줘야함. v
   * value를 받아서 화면에 출력해줘야함. v
   * value를 바꾸면 onChange가 호출돼야 됨. v
   */
  const handleChange = jest.fn();

  function renderInput() {
    return render(
      <Input
        id='employment-history-job-title'
        label='직무 내용'
        placeholder='직무를 입력해주세요'
        name='jobTitle'
        value='프론트엔드'
        onChange={handleChange}
      />
    );
  }

  it('renders label, input', () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } =
      renderInput();

    expect(getByText('직무 내용')).toBeInTheDocument();
    expect(getByPlaceholderText('직무를 입력해주세요')).toBeInTheDocument();
    expect(getByPlaceholderText('직무를 입력해주세요')).toHaveAttribute(
      'name',
      'jobTitle'
    );
    expect(getByDisplayValue('프론트엔드')).toBeInTheDocument();
  });

  it('connects label and input', () => {
    const { getByLabelText } = renderInput();

    expect(getByLabelText('직무 내용')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByDisplayValue } = renderInput();

    fireEvent.change(getByDisplayValue('프론트엔드'), {
      target: { value: '백엔드' },
    });

    expect(handleChange).toBeCalled();
  });
});
