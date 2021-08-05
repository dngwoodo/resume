import { render } from '@testing-library/react';

import ProgressBarContainer from './ProgressBarContainer';

describe('ProgressBarContainer', () => {
  it('renders text', () => {
    const { getByText } = render(<ProgressBarContainer />);

    expect(getByText('프로필 완성도')).toBeInTheDocument();
    expect(getByText('프로필 추가 요약')).toBeInTheDocument();
  });
});
