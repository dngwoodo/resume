import { BASIC_LABELS } from '@/fixtures/labels';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import BasicContainer from './BasicContainer';

jest.mock('react-redux');

describe('BasicContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          name: '',
          occupation: '',
          email: '',
          phoneNumber: '',
          address: '',
          introduction: '',
        },
      })
    );
  });

  it('renders inputs', () => {
    const { getByLabelText } = render(<BasicContainer />);

    BASIC_LABELS.forEach((BASIC_LABEL) => {
      expect(getByLabelText(BASIC_LABEL)).toBeInTheDocument();
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = render(<BasicContainer />);

    BASIC_LABELS.forEach((BASIC_LABEL) => {
      fireEvent.change(getByLabelText(BASIC_LABEL), {
        target: { value: BASIC_LABEL },
      });
    });

    expect(dispatch).toBeCalledTimes(BASIC_LABELS.length);
  });
});
