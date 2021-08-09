import reducer, {
  changeCareerField,
  changeBasicField,
  initialState,
  setCareers,
  setTitle,
} from '@/redux/slice';
import CAREERS from '@/fixtures/careers';

describe('slice', () => {
  describe('setTitle', () => {
    it('changes title', () => {
      const { title } = reducer(initialState, setTitle('열정! 열정! 열정!'));

      expect(title).toBe('열정! 열정! 열정!');
    });
  });

  describe('setCareers', () => {
    it('changes careers', () => {
      const { careers } = reducer(initialState, setCareers(CAREERS));

      expect(careers).toEqual(CAREERS);
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
      const { careers } = reducer(
        { ...initialState, careers: CAREERS },
        changeCareerField({
          id: 'First',
          name: 'jobDetail',
          value: '프론트엔드',
        })
      );

      expect(careers[0].jobDetail).toBe('프론트엔드');
    });
  });
});
