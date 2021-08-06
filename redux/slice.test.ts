import reducer, { changeResumeField, initialState, setTitle } from './slice';

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
});
