import { render } from '@testing-library/react';

import Home from './index.page';

describe('Home', () => {
  it('renders post titles', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Hello')).toBeInTheDocument();
  });
});
