import reducer, {
  initialState,
  changeTitle,
  changeBasicField,
  changeEmploymentHistoryField,
  changeEducationalHistoryField,
} from '@/redux/slice';

import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';
import EDUCATIONAL_HISTORIES from '@/fixtures/educationalHistories';

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

  describe('changeEducationalHistoryField', () => {
    it('changes employment history field', () => {
      const { educationalHistories } = reducer(
        { ...initialState, educationalHistories: EDUCATIONAL_HISTORIES },
        changeEducationalHistoryField({
          id: 'First',
          name: 'school',
          value: '동래고등학교',
        })
      );

      expect(educationalHistories[0].school).toBe('동래고등학교');
    });
  });
});
