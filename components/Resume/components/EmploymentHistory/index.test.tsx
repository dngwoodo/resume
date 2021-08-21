import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import { EMPLOYMENT_HISTORY_LABELS } from '@/fixtures/labels';
import { EMPLOYMENT_HISTORY_PLACEHOLDERS } from '@/fixtures/placeholders';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import EmploymentHistory from './EmploymentHistory';

describe('EmploymentHistory', () => {
  const handleChange = jest.fn();
  const handleClickDeleteEmploymentHistory = jest.fn();

  /**
   * 할일
   * label이 있어야함 v
   * check용 input이 있어야함 v
   * label과 input이 연결되어져 있어야함 v
   * label을 클릭했을 때 checkbox가 check 됨 v
   */

  function renderEmploymentHistory() {
    return render(
      <EmploymentHistory
        employmentHistory={{
          ...EMPLOYMENT_HISTORIES[0],
          jobTitle: given.jobTitle,
          startDate: given.startDate,
          endDate: given.endDate,
        }}
        onChange={handleChange}
        onClickDeleteEmploymentHistory={handleClickDeleteEmploymentHistory}
      />
    );
  }

  it('renders label, input', () => {
    const { getByTestId, getByRole } = renderEmploymentHistory();

    expect(getByTestId('employment-history-title')).toBeInTheDocument();
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('listens label click event', () => {
    const { getByTestId, getByRole } = renderEmploymentHistory();

    fireEvent.click(getByTestId('employment-history-title'));
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBeTruthy();

    fireEvent.click(getByTestId('employment-history-title'));
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBeFalsy();
  });

  it('renders title, period', () => {
    const { getByText } = renderEmploymentHistory();

    expect(getByText('제목을 입력해주세요.')).toBeInTheDocument();
    expect(getByText('근무 기간을 입력해주세요.')).toBeInTheDocument();
  });

  context('with jobTitle', () => {
    beforeEach(() => {
      given('jobTitle', () => '프론트엔드');
    });

    it('renders jobTitle', () => {
      const { getByText } = renderEmploymentHistory();

      expect(getByText('프론트엔드')).toBeInTheDocument();
    });
  });

  context('with startDate, endDate', () => {
    beforeEach(() => {
      given('startDate', () => '2020.01');
      given('endDate', () => '2021.03');
    });

    it('renders startDate, endDate', () => {
      const { getByText } = renderEmploymentHistory();

      expect(getByText('2020.01 - 2021.03')).toBeInTheDocument();
    });
  });

  it('renders input controls, dropdown-toggle', () => {
    const {
      getByLabelText,
      getAllByLabelText,
      getByPlaceholderText,
      getByTestId,
    } = renderEmploymentHistory();

    EMPLOYMENT_HISTORY_PLACEHOLDERS.forEach(
      (EMPLOYMENT_HISTORY_PLACEHOLDER) => {
        expect(
          getByPlaceholderText(EMPLOYMENT_HISTORY_PLACEHOLDER)
        ).toBeInTheDocument();
      }
    );

    EMPLOYMENT_HISTORY_LABELS.forEach((EMPLOYMENT_HISTORY_LABEL) => {
      if (EMPLOYMENT_HISTORY_LABEL === '근무 기간') {
        expect(
          getAllByLabelText(EMPLOYMENT_HISTORY_LABEL)[0]
        ).toBeInTheDocument();
        expect(
          getAllByLabelText(EMPLOYMENT_HISTORY_LABEL)[1]
        ).toBeInTheDocument();
        return;
      }

      expect(getByLabelText(EMPLOYMENT_HISTORY_LABEL)).toBeInTheDocument();
    });

    expect(getByTestId('dropdown-toggle')).toBeInTheDocument();
  });

  it("renders 'delete-employment-history' button", () => {
    const { getByTestId } = renderEmploymentHistory();

    expect(getByTestId('delete-employment-history')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByPlaceholderText } = renderEmploymentHistory();

    EMPLOYMENT_HISTORY_PLACEHOLDERS.forEach(
      (EMPLOYMENT_HISTORY_PLACEHOLDER) => {
        fireEvent.change(getByPlaceholderText(EMPLOYMENT_HISTORY_PLACEHOLDER), {
          target: { value: 'test' },
        });
      }
    );

    expect(handleChange).toBeCalledTimes(
      EMPLOYMENT_HISTORY_PLACEHOLDERS.length
    );
  });

  it("listens 'delete-employment-history' click events", () => {
    const { getByTestId } = renderEmploymentHistory();

    fireEvent.click(getByTestId('delete-employment-history'));

    expect(handleClickDeleteEmploymentHistory).toBeCalled();
  });
});
