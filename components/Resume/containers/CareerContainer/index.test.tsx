import { fireEvent, render } from '@testing-library/react';

import CareerContainer from './CareerContainer';

describe('CareerContainer', () => {
  const CAREER = {
    id: '',
    title: '',
    jobDetail: '',
    company: '',
    startDate: '',
    endDate: '',
    region: '',
    description: '',
  };
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('listens click event', () => {
    const { getByTestId } = render(
      <CareerContainer
        career={CAREER}
        onChange={handleChange}
        onClickDeleteCareer={handleClick}
      />
    );

    fireEvent.click(getByTestId('career-title'));

    expect(getByTestId('career-detail')).toHaveStyle('height: auto');
  });
});
