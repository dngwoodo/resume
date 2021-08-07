import { fireEvent, render } from '@testing-library/react';

import CAREERS from '@/fixtures/careers';

import CareerContainer from './CareerContainer';

describe('CareerContainer', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('listens click event', () => {
    const { getByTestId } = render(
      <CareerContainer
        career={CAREERS[0]}
        onChange={handleChange}
        onClickDeleteCareer={handleClick}
      />
    );

    expect(getByTestId('career-detail')).toHaveStyle('height: 0px');

    fireEvent.click(getByTestId('career-title'));

    expect(getByTestId('career-detail')).toHaveStyle('height: auto');
  });
});
