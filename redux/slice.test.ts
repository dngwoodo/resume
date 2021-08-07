import reducer, {
  addCareer,
  changeCareerField,
  changeResumeField,
  deleteCareer,
  initialState,
  setTitle,
} from './slice';

describe('slice', () => {
  describe('setTitle', () => {
    it('changes title', () => {
      const { title } = reducer(initialState, setTitle('열정! 열정! 열정!'));

      expect(title).toBe('열정! 열정! 열정!');
    });
  });

  describe('changeResumeField', () => {
    it('changes resume field', () => {
      const {
        basic: { name },
      } = reducer(
        initialState,
        changeResumeField({ name: 'name', value: '김동우' })
      );

      expect(name).toBe('김동우');
    });
  });

  describe('addCareer', () => {
    it('adds career of resume', () => {
      const { careers } = reducer(initialState, addCareer());

      expect(careers).toHaveLength(2);
    });
  });

  describe('deleteCareer', () => {
    it('deletes career of resume', () => {
      const { careers } = reducer(initialState, deleteCareer(0));

      expect(careers).toHaveLength(0);
    });
  });

  describe('changeCareerField', () => {
    it('changes field of career', () => {
      const { careers } = reducer(
        initialState,
        changeCareerField({ id: 0, name: 'title', value: '프론트엔드' })
      );

      expect(careers.find((career) => career.id === 0)!.title).toBe(
        '프론트엔드'
      );
    });
  });
});
