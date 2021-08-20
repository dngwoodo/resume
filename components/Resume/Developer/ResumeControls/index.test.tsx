import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ResumeControls from './ResumeControls';

jest.mock('react-redux');

describe('ResumeControls', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          title: '이력서 제목',
          name: '',
          jobTitle: '',
          email: '',
          phone: '',
          address: '',
          selfIntroduction: '',
          employmentHistories: [
            {
              id: '0',
              jobTitle: '',
              employer: '',
              startDate: '',
              endDate: '',
              address: '',
              description: '',
            },
          ],
        },
      })
    );
  });

  it("renders '이력서 제목'", () => {
    const { getByText } = render(<ResumeControls />);

    expect(getByText('이력서 제목')).toBeInTheDocument();
  });

  it('loads resume', () => {
    render(<ResumeControls />);

    expect(dispatch).toBeCalledTimes(1);
  });
});
