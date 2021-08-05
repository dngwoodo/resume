import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('renders text, image, progress-bar', () => {
    const { getByText, getByTestId } = render(<ProgressBar />);
    const questionMarker = document.querySelector('img')!;

    expect(getByText('35%')).toBeInTheDocument();
    expect(getByText('프로필 완성도')).toBeInTheDocument();

    expect(getByText('10%')).toBeInTheDocument();
    expect(getByText('프로필 추가 요약')).toBeInTheDocument();
    expect(questionMarker).toBeInTheDocument();

    expect(getByTestId('progress-bar')).toBeInTheDocument();
  });
});
