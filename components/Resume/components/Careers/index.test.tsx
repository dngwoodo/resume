import { fireEvent, render } from '@testing-library/react';

import CAREERS from '@/fixtures/careers';

import Careers from './Careers';

describe('Careers', () => {
  const handleChange = jest.fn();
  const handleClickDeleteCareer = jest.fn();
  const handleClickAddCareer = jest.fn();

  function renderCareers() {
    return render(
      <Careers
        careers={CAREERS}
        onChange={handleChange}
        onClickDeleteCareer={handleClickDeleteCareer}
        onClickAddCareer={handleClickAddCareer}
      />
    );
  }

  it('renders button', () => {
    const { getByText } = renderCareers();

    expect(getByText('경력 추가하기')).toBeInTheDocument();
  });

  it("listens '경력 추가하기' click event", () => {
    const { getByText } = renderCareers();

    fireEvent.click(getByText('경력 추가하기'));

    expect(handleClickAddCareer).toBeCalled();
  });
});
