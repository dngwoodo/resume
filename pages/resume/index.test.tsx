import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Resume from './resume';

jest.mock('react-redux');

describe('Resume', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        resume: {
          title: '이력서 제목',
          basic: {
            name: '',
            jobTitle: '',
            email: '',
            phone: '',
            address: '',
            selfIntroduction: '',
          },
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

  it('renders title', () => {
    const { getByText, container } = render(<Resume />);

    expect(getByText('이력서 제목')).toBeInTheDocument();
    expect(container).toContainHTML('<img');
  });
});
