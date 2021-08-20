import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import { EMPLOYMENT_HISTORY_LABELS } from '@/fixtures/labels';
import { EMPLOYMENT_HISTORY_PLACEHOLDERS } from '@/fixtures/placeholders';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

import Career from './Career';

describe('Career', () => {
  const handleChange = jest.fn();
  const handleClickToggle = jest.fn();
  const handleClickDeleteCareer = jest.fn();

  function renderCareer() {
    return render(
      <Career
        employmentHistory={{
          ...EMPLOYMENT_HISTORIES[0],
          jobTitle: given.jobTitle,
          startDate: given.startDate,
          endDate: given.endDate,
        }}
        onChange={handleChange}
        isShowDetail={false}
        onClickToggle={handleClickToggle}
        onClickDeleteCareer={handleClickDeleteCareer}
      />
    );
  }

  it('renders title, period', () => {
    const { getByText } = renderCareer();

    expect(getByText('제목을 입력해주세요.')).toBeInTheDocument();
    expect(getByText('근무 기간을 입력해주세요.')).toBeInTheDocument();
  });

  context('with jobTitle', () => {
    beforeEach(() => {
      given('jobTitle', () => '프론트엔드');
    });

    it('renders jobTitle', () => {
      const { getByText } = renderCareer();

      expect(getByText('프론트엔드')).toBeInTheDocument();
    });
  });

  context('with startDate, endDate', () => {
    beforeEach(() => {
      given('startDate', () => '2020.01');
      given('endDate', () => '2021.03');
    });

    it('renders startDate, endDate', () => {
      const { getByText } = renderCareer();

      expect(getByText('2020.01 - 2021.03')).toBeInTheDocument();
    });
  });

  it('renders input controls, dropdown-toggle', () => {
    const {
      getByLabelText,
      getAllByLabelText,
      getByPlaceholderText,
      getByTestId,
    } = renderCareer();

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

  it("renders 'delete-career' button", () => {
    const { getByTestId } = renderCareer();

    expect(getByTestId('delete-career')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByPlaceholderText } = renderCareer();

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

  it("listens 'career-title' click events", () => {
    const { getByTestId } = renderCareer();

    fireEvent.click(getByTestId('career-title'));

    expect(handleClickToggle).toBeCalled();
  });

  it("listens 'delete-career' click events", () => {
    const { getByTestId } = renderCareer();

    fireEvent.click(getByTestId('delete-career'));

    expect(handleClickDeleteCareer).toBeCalled();
  });
});
