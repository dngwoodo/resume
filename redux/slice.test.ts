import reducer, {
  changeCareerField,
  changeBasicField,
  initialState,
  setCareers,
  setTitle,
} from '@/redux/slice';
import EMPLOYMENT_HISTORIES from '@/fixtures/employmentHistories';

describe('slice', () => {
  describe('setTitle', () => {
    it('changes title', () => {
      const { title } = reducer(initialState, setTitle('열정! 열정! 열정!'));

      expect(title).toBe('열정! 열정! 열정!');
    });
  });

  describe('setCareers', () => {
    it('changes careers', () => {
      const { employmentHistories } = reducer(
        initialState,
        setCareers(EMPLOYMENT_HISTORIES)
      );

      expect(employmentHistories).toEqual(EMPLOYMENT_HISTORIES);
    });
  });

  describe('changeBasicField', () => {
    it('changes resume field', () => {
      const {
        basic: { name },
      } = reducer(
        initialState,
        changeBasicField({ name: 'name', value: '김동우' })
      );

      expect(name).toBe('김동우');
    });
  });

  describe('changeCareerField', () => {
    it('changes career field', () => {
      const { employmentHistories } = reducer(
        { ...initialState, employmentHistories: EMPLOYMENT_HISTORIES },
        changeCareerField({
          id: 'First',
          name: 'jobTitle',
          value: '프론트엔드',
        })
      );

      expect(employmentHistories[0].jobTitle).toBe('프론트엔드');
    });
  });
});
