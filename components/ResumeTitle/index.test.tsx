import { render } from '@testing-library/react';

import ResumeTitle from './ResumeTitle';

describe('ResumeTitle', () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();

  it('renders title', () => {
    const { getByText, container } = render(
      <ResumeTitle onClick={handleClick} onInput={handleInput} />
    );

    expect(getByText('이력서 제목')).toBeInTheDocument();
    expect(container).toContainHTML('<img');
  });
});
