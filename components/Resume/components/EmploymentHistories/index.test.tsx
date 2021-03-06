import { fireEvent, render } from '@testing-library/react';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import EmploymentHistories from './EmploymentHistories';

describe('EmploymentHistories', () => {
  const handleChange = jest.fn();
  const handleClickDeleteEmploymentHistory = jest.fn();
  const handleClickAddEmploymentHistory = jest.fn();

  function renderEmploymentHistories() {
    return render(
      <EmploymentHistories
        employmentHistories={EMPLOYMENT_HISTORIES}
        onChange={handleChange}
        onClickDeleteEmploymentHistory={handleClickDeleteEmploymentHistory}
        onClickAddEmploymentHistory={handleClickAddEmploymentHistory}
      />
    );
  }

  it('renders button', () => {
    const { getByText } = renderEmploymentHistories();

    expect(getByText('경력 추가하기')).toBeInTheDocument();
  });

  it("listens '경력 추가하기' click event", () => {
    const { getByText } = renderEmploymentHistories();

    fireEvent.click(getByText('경력 추가하기'));

    expect(handleClickAddEmploymentHistory).toBeCalled();
  });
});
