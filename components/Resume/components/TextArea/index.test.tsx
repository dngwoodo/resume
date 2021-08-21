import { fireEvent, render } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
  /**
   * 할일
   * label 출력 v
   * textarea 출력 v
   * label과 textarea가 연결되어져있어야 함 v
   * textarea는 placeholder를 가짐 v
   * props로 가지고 있어야됌 v
   * textarea는 name 속성을 가지고 있음 v
   * name 값은 props로 받음 v
   * value가 출력됌 v
   * value는 props로 받음 v
   * value가 변경되면 onChange 실행 v
   * onChange는 props로 받음 v
   */

  const handleChange = jest.fn();

  function renderTextArea() {
    return render(
      <TextArea
        label='경력 기술'
        id='textarea'
        placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.'
        name='textarea'
        value='저는 프론트엔드 개발자입니다.'
        onChange={handleChange}
      />
    );
  }

  it('renders label, textarea', () => {
    const { getByText, getByPlaceholderText } = renderTextArea();

    expect(getByText('경력 기술')).toBeInTheDocument();
    expect(getByPlaceholderText('간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.')).toBeInTheDocument();
  });

  it('connects label and textarea', () => {
    const { getByLabelText } = renderTextArea();

    expect(getByLabelText('경력 기술')).toBeInTheDocument();
  });

  it('has name attribute', () => {
    const { getByPlaceholderText } = renderTextArea();

    expect(getByPlaceholderText('간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요.')).toHaveAttribute(
      'name',
      'textarea'
    );
  });

  it('renders textarea value', () => {
    const { getByDisplayValue } = renderTextArea();

    expect(getByDisplayValue('저는 프론트엔드 개발자입니다.')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByDisplayValue } = renderTextArea();

    fireEvent.change(getByDisplayValue('저는 프론트엔드 개발자입니다.'), {
      target: { value: '저는 백엔드 개발자입니다.' },
    });

    expect(handleChange).toBeCalled();
  });
});
