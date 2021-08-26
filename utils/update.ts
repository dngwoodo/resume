import { InitialState, ResumeState } from '@/redux/slice';

type State = ResumeState & InitialState;

// TODO: any 타입 변경 필요

export function createChangedState(state: State, changedState: any): Partial<State> {
  const key = Object.keys(changedState)[0] as Extract<keyof State, string>;
  return {
    [key]: {
      ...(state[key] as Partial<State>),
      ...(changedState[key] as any),
    },
  };
}

function update(state: State, ...changedStates: any[]): State {
  let result = state;
  changedStates.forEach((changedState) => {
    const key = Object.keys(changedState)[0] as Extract<keyof State, string>;
    result =
      !Array.isArray(changedState[key]) && typeof changedState[key] === 'object'
        ? { ...result, ...createChangedState(result, changedState) }
        : { ...result, ...changedState };
  });
  return result;
}

export default update;
