import { fireEvent, render } from '@testing-library/react';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import EmploymentHistoryContainer from './EmploymentHistoryContainer';

describe('EmploymentHistoryContainer', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('listens click event', () => {
    const { getByTestId } = render(
      <EmploymentHistoryContainer
        employmentHistory={EMPLOYMENT_HISTORIES[0]}
        onChange={handleChange}
        onClickDeleteEmploymentHistory={handleClick}
      />
    );

    expect(getByTestId('employment-history-detail')).toHaveStyle('height: 0px');

    fireEvent.click(getByTestId('employment-history-title'));

    expect(getByTestId('employment-history-detail')).toHaveStyle(
      'height: auto'
    );
  });
});
