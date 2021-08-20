import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPLOYMENT_HISTORY_PLACEHOLDERS } from '@/fixtures/placeholders';
import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import EmploymentHistoriesContainer from './EmploymentHistoriesContainer';

jest.mock('react-redux');

describe('EmploymentHistoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          employmentHistories: EMPLOYMENT_HISTORIES,
        },
      })
    );
  });

  it("listens '경력 추가하기' click event", () => {
    const { getByText } = render(<EmploymentHistoriesContainer />);

    fireEvent.click(getByText('경력 추가하기'));

    expect(dispatch).toBeCalled();
  });

  it("listens 'delete-employment-history' click event", () => {
    const { getByTestId } = render(<EmploymentHistoriesContainer />);

    fireEvent.click(getByTestId('delete-employment-history'));

    expect(dispatch).toBeCalled();
  });

  it('listens change event', () => {
    const { getByPlaceholderText } = render(<EmploymentHistoriesContainer />);

    EMPLOYMENT_HISTORY_PLACEHOLDERS.forEach(
      (EMPLOYMENT_HISTORY_PLACEHOLDER) => {
        fireEvent.change(getByPlaceholderText(EMPLOYMENT_HISTORY_PLACEHOLDER), {
          target: { value: 'test' },
        });
      }
    );

    expect(dispatch).toBeCalledTimes(EMPLOYMENT_HISTORY_PLACEHOLDERS.length);
  });
});
