import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import { EDUCATIONAL_HISTORY_LABELS } from '@/fixtures/labels';
import { EDUCATIONAL_HISTORY_PLACEHOLDERS } from '@/fixtures/placeholders';

import EDUCATIONAL_HISTORIES from '@/fixtures/educationalHistories';

import EducationalHistory from './EducationalHistory';

describe('EducationalHistory', () => {
  const handleChange = jest.fn();
  const handleClickDeleteEducationalHistory = jest.fn();

  /**
   * 할일
   * label이 있어야함 v
   * check용 input이 있어야함 v
   * label과 input이 연결되어져 있어야함 v
   * label을 클릭했을 때 checkbox가 check 됨 v
   */

  function renderEducationalHistory() {
    return render(
      <EducationalHistory
        educationalHistory={{
          ...EDUCATIONAL_HISTORIES[0],
          school: given.school,
          startDate: given.startDate,
          endDate: given.endDate,
        }}
        onChange={handleChange}
        onClickDeleteEducationalHistory={handleClickDeleteEducationalHistory}
      />
    );
  }

  it('renders label, input', () => {
    const { getByTestId, getByRole } = renderEducationalHistory();

    expect(getByTestId('educational-history-title')).toBeInTheDocument();
    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('listens label click event', () => {
    const { getByTestId, getByRole } = renderEducationalHistory();

    fireEvent.click(getByTestId('educational-history-title'));
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBeTruthy();

    fireEvent.click(getByTestId('educational-history-title'));
    expect((getByRole('checkbox') as HTMLInputElement).checked).toBeFalsy();
  });

  it('renders title, period', () => {
    const { getByText } = renderEducationalHistory();

    expect(getByText('제목을 입력해주세요.')).toBeInTheDocument();
    expect(getByText('재학 기간을 입력해주세요.')).toBeInTheDocument();
  });

  context('with school', () => {
    beforeEach(() => {
      given('school', () => '서울대학교');
    });

    it('renders school', () => {
      const { getByText } = renderEducationalHistory();

      expect(getByText('서울대학교')).toBeInTheDocument();
    });
  });

  context('with startDate, endDate', () => {
    beforeEach(() => {
      given('startDate', () => '2020.01');
      given('endDate', () => '2021.03');
    });

    it('renders startDate, endDate', () => {
      const { getByText } = renderEducationalHistory();

      expect(getByText('2020.01 - 2021.03')).toBeInTheDocument();
    });
  });

  it('renders input controls, dropdown-toggle', () => {
    const { getByLabelText, getAllByLabelText, getByPlaceholderText, getByTestId } = renderEducationalHistory();

    EDUCATIONAL_HISTORY_PLACEHOLDERS.forEach((EDUCATIONAL_HISTORY_PLACEHOLDER) => {
      expect(getByPlaceholderText(EDUCATIONAL_HISTORY_PLACEHOLDER)).toBeInTheDocument();
    });

    EDUCATIONAL_HISTORY_LABELS.forEach((EDUCATIONAL_HISTORY_LABEL) => {
      if (EDUCATIONAL_HISTORY_LABEL === '재학 기간') {
        expect(getAllByLabelText(EDUCATIONAL_HISTORY_LABEL)[0]).toBeInTheDocument();
        expect(getAllByLabelText(EDUCATIONAL_HISTORY_LABEL)[1]).toBeInTheDocument();
        return;
      }

      expect(getByLabelText(EDUCATIONAL_HISTORY_LABEL)).toBeInTheDocument();
    });

    expect(getByTestId('dropdown-toggle')).toBeInTheDocument();
  });

  it("renders 'delete-educational-history' button", () => {
    const { getByTestId } = renderEducationalHistory();

    expect(getByTestId('delete-educational-history')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByPlaceholderText } = renderEducationalHistory();

    EDUCATIONAL_HISTORY_PLACEHOLDERS.forEach((EDUCATIONAL_HISTORY_PLACEHOLDER) => {
      fireEvent.change(getByPlaceholderText(EDUCATIONAL_HISTORY_PLACEHOLDER), {
        target: { value: 'test' },
      });
    });

    expect(handleChange).toBeCalledTimes(EDUCATIONAL_HISTORY_PLACEHOLDERS.length);
  });

  it("listens 'delete-educational-history' click events", () => {
    const { getByTestId } = renderEducationalHistory();

    fireEvent.click(getByTestId('delete-educational-history'));

    expect(handleClickDeleteEducationalHistory).toBeCalled();
  });
});
