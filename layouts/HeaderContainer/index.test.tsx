import { fireEvent, render } from '@testing-library/react';
import { ReactChild } from 'react';

import MENUS from '@/fixtures/menus';
import HeaderContainer from './HeaderContainer';

jest.mock('next/link', () => {
  return ({ children }: { children: ReactChild }) => {
    return children;
  };
});

describe('Header', () => {
  it("listens 'menu' click event", () => {
    const { getByRole } = render(<HeaderContainer />);

    MENUS.forEach(({ title }) => {
      fireEvent.click(getByRole('link', { name: title }));

      expect(getByRole('link', { name: title })).toHaveStyle('color: #5F75EE');
    });
  });
});
