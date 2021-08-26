import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { EDUCATIONAL_HISTORY_PLACEHOLDERS } from '@/fixtures/placeholders';
import EDUCATIONAL_HISTORIES from '@/fixtures/educationalHistories';

import EducationalHistoriesContainer from './EducationalHistoriesContainer';

jest.mock('react-redux');

describe('EducationalHistoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          educationalHistories: EDUCATIONAL_HISTORIES,
        },
      })
    );
  });

  it("listens '학력 추가하기' click event", () => {
    const { getByText } = render(<EducationalHistoriesContainer />);

    fireEvent.click(getByText('학력 추가하기'));

    expect(dispatch).toBeCalled();
  });

  it("listens 'delete-educational-history' click event", () => {
    const { getByTestId } = render(<EducationalHistoriesContainer />);

    fireEvent.click(getByTestId('delete-educational-history'));

    expect(dispatch).toBeCalled();
  });

  it('listens change event', () => {
    const { getByPlaceholderText } = render(<EducationalHistoriesContainer />);

    EDUCATIONAL_HISTORY_PLACEHOLDERS.forEach((EDUCATIONAL_HISTORY_PLACEHOLDER) => {
      fireEvent.change(getByPlaceholderText(EDUCATIONAL_HISTORY_PLACEHOLDER), {
        target: { value: 'test' },
      });
    });

    expect(dispatch).toBeCalledTimes(EDUCATIONAL_HISTORY_PLACEHOLDERS.length);
  });
});
