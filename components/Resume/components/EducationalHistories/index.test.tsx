import { fireEvent, render } from '@testing-library/react';

import EDUCATIONAL_HISTORIES from '@/fixtures/educationalHistories';

import EducationalHistories from './EducationalHistories';

describe('EducationalHistories', () => {
  const handleChange = jest.fn();
  const handleClickDeleteEducationalHistory = jest.fn();
  const handleClickAddEducationalHistory = jest.fn();

  function renderEducationalHistories() {
    return render(
      <EducationalHistories
        educationalHistories={EDUCATIONAL_HISTORIES}
        onChange={handleChange}
        onClickDeleteEducationalHistory={handleClickDeleteEducationalHistory}
        onClickAddEducationalHistory={handleClickAddEducationalHistory}
      />
    );
  }

  it('renders title, description', () => {
    const { getByText } = renderEducationalHistories();

    expect(getByText('학력')).toBeInTheDocument();
    expect(getByText('최종 학력 순서로 입력해주세요.')).toBeInTheDocument();
  });

  it('renders button', () => {
    const { getByText } = renderEducationalHistories();

    expect(getByText('학력 추가하기')).toBeInTheDocument();
  });

  it("listens '학력 추가하기' click event", () => {
    const { getByText } = renderEducationalHistories();

    fireEvent.click(getByText('학력 추가하기'));

    expect(handleClickAddEducationalHistory).toBeCalled();
  });
});
