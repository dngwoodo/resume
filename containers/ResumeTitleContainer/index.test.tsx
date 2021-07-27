import { fireEvent, render } from '@testing-library/react';

import ResumeTitle from './ResumeTitleContainer';

describe('ResumeTitle', () => {
  it('listens change event', () => {
    const { getByText } = render(<ResumeTitle />);

    expect(getByText('이력서 제목')).toBeInTheDocument();

    fireEvent.change(getByText('이력서 제목'), {
      target: { textContent: '나라 사랑' },
    });

    expect(getByText('나라 사랑')).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByText, getByTestId } = render(<ResumeTitle />);

    expect(getByText('이력서 제목')).not.toHaveFocus();

    fireEvent.click(getByTestId('title-control'));

    expect(getByText('이력서 제목')).toHaveFocus();
  });
});
