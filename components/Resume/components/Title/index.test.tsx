import { render } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();

  it('renders title', () => {
    const { getByText, container } = render(<Title onClick={handleClick} onInput={handleInput} />);

    expect(getByText('이력서 제목')).toBeInTheDocument();
    expect(container).toContainHTML('<img');
  });
});
