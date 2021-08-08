import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import { CAREER_LABELS } from '@/fixtures/labels';
import { CAREER_PLACEHOLDERS } from '@/fixtures/placeholders';

import CAREERS from '@/fixtures/careers';

import Career from './Career';

describe('Career', () => {
  const handleChange = jest.fn();
  const handleClickToggle = jest.fn();
  const handleClickDeleteCareer = jest.fn();

  function renderCareer() {
    return render(
      <Career
        career={{
          ...CAREERS[0],
          jobDetail: given.jobDetail,
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
      given('jobDetail', () => '프론트엔드');
    });

    it('renders jobDetail', () => {
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

    CAREER_PLACEHOLDERS.forEach((CAREER_PLACEHOLDER) => {
      expect(getByPlaceholderText(CAREER_PLACEHOLDER)).toBeInTheDocument();
    });

    CAREER_LABELS.forEach((CAREER_LABEL) => {
      if (CAREER_LABEL === '근무 기간') {
        expect(getAllByLabelText(CAREER_LABEL)[0]).toBeInTheDocument();
        expect(getAllByLabelText(CAREER_LABEL)[1]).toBeInTheDocument();
        return;
      }

      expect(getByLabelText(CAREER_LABEL)).toBeInTheDocument();
    });

    expect(getByTestId('dropdown-toggle')).toBeInTheDocument();
  });

  it("renders 'delete-career' button", () => {
    const { getByTestId } = renderCareer();

    expect(getByTestId('delete-career')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByPlaceholderText } = renderCareer();

    CAREER_PLACEHOLDERS.forEach((CAREER_PLACEHOLDER) => {
      fireEvent.change(getByPlaceholderText(CAREER_PLACEHOLDER), {
        target: { value: 'test' },
      });
    });

    expect(handleChange).toBeCalledTimes(CAREER_PLACEHOLDERS.length);
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
