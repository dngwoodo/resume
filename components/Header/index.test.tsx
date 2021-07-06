import { render } from '@testing-library/react';

import MENUS from '@/fixtures/menus';
import Header from './Header';

describe('Header', () => {
  const handleClick = jest.fn();

  it('renders logo, nav, avatar, nickname', () => {
    const { getByRole, container } = render(
      <Header selectedMenuIndex={0} onClick={handleClick} />
    );

    MENUS.forEach(({ title }) => {
      expect(getByRole('link', { name: title })).toBeInTheDocument();
    });
    expect(container).toContainHTML('<img');
    expect(getByRole('heading', { name: 'Tam Tran' })).toBeInTheDocument();
  });
});
