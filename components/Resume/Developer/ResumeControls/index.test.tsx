import { render } from '@testing-library/react';

import ResumeControls from './ResumeControls';

describe('ResumeControls', () => {
  it("renders '이력서 제목'", () => {
    const { getByText } = render(<ResumeControls />);

    expect(getByText('이력서 제목')).toBeInTheDocument();
  });
});
