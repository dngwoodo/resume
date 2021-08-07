import { fireEvent, render } from '@testing-library/react';

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
        career={CAREERS[0]}
        onChange={handleChange}
        isShowDetail={false}
        onClickToggle={handleClickToggle}
        onClickDeleteCareer={handleClickDeleteCareer}
      />
    );
  }

  it('renders input controls, period, dropdown-toggle', () => {
    const { getByLabelText, getByPlaceholderText, getByTestId, getByText } =
      renderCareer();

    CAREER_PLACEHOLDERS.forEach((CAREER_PLACEHOLDER) => {
      expect(getByPlaceholderText(CAREER_PLACEHOLDER)).toBeInTheDocument();
    });

    CAREER_LABELS.forEach((CAREER_LABEL) => {
      expect(getByLabelText(CAREER_LABEL)).toBeInTheDocument();
    });

    expect(getByText('근무 기간을 입력해주세요.')).toBeInTheDocument();
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

    expect(getByTestId('career-detail')).toHaveStyle('height: auto');
  });

  it("listens 'delete-career' click events", () => {
    const { getByTestId } = renderCareer();

    fireEvent.click(getByTestId('delete-career'));

    expect(handleClickDeleteCareer).toBeCalled();
  });
});
