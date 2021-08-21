import reducer, { initialState, changeTitle, changeEmploymentHistoryField, changeBasicField } from '@/redux/slice';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

describe('slice', () => {
  describe('changeTitle', () => {
    it('changes title', () => {
      const { title } = reducer(initialState, changeTitle('열정! 열정! 열정!'));

      expect(title).toBe('열정! 열정! 열정!');
    });
  });

  describe('changeBasicField', () => {
    it('changes resume field', () => {
      const { name } = reducer(initialState, changeBasicField({ name: 'name', value: '김동우' }));

      expect(name).toBe('김동우');
    });
  });

  describe('changeEmploymentHistoryField', () => {
    it('changes employment history field', () => {
      const { employmentHistories } = reducer(
        { ...initialState, employmentHistories: EMPLOYMENT_HISTORIES },
        changeEmploymentHistoryField({
          id: 'First',
          name: 'jobTitle',
          value: '프론트엔드',
        })
      );

      expect(employmentHistories[0].jobTitle).toBe('프론트엔드');
    });
  });
});
