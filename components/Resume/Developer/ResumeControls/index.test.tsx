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
          basic: {
            name: '',
            occupation: '',
            email: '',
            phoneNumber: '',
            address: '',
            introduction: '',
          },
          careers: [
            {
              id: '0',
              title: '',
              jobDetail: '',
              company: '',
              startDate: '',
              endDate: '',
              region: '',
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
});
