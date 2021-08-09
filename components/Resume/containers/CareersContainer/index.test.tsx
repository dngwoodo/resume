import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { CAREER_PLACEHOLDERS } from '@/fixtures/placeholders';
import CAREERS from '@/fixtures/careers';

import CareersContainer from './CareersContainer';

jest.mock('react-redux');

describe('CareersContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          careers: CAREERS,
        },
      })
    );
  });

  it("listens '경력 추가하기' click event", () => {
    const { getByText } = render(<CareersContainer />);

    fireEvent.click(getByText('경력 추가하기'));

    expect(dispatch).toBeCalled();
  });

  it("listens 'delete-career' click event", () => {
    const { getByTestId } = render(<CareersContainer />);

    fireEvent.click(getByTestId('delete-career'));

    expect(dispatch).toBeCalled();
  });

  it('listens change event', () => {
    const { getByPlaceholderText } = render(<CareersContainer />);

    CAREER_PLACEHOLDERS.forEach((CAREER_PLACEHOLDER) => {
      fireEvent.change(getByPlaceholderText(CAREER_PLACEHOLDER), {
        target: { value: 'test' },
      });
    });

    expect(dispatch).toBeCalledTimes(CAREER_PLACEHOLDERS.length + 1);
  });
});
