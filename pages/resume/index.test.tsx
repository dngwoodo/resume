import { render } from '@testing-library/react';

import Resume from './resume';

describe('Resume', () => {
  it('renders title', () => {
    const { getByText, container } = render(<Resume />);

    expect(getByText('이력서 제목')).toBeInTheDocument();
    expect(container).toContainHTML('<img');
  });
});
