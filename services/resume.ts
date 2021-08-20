import { v4 as uuid } from 'uuid';

import { EmploymentHistory } from '@/types/Resume';

import { initialState } from '@/redux/slice';
import { store } from '@/redux/store';

let dummyEmploymentHistories: EmploymentHistory[] = [];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchResume() {
  await sleep(200);

  return { data: initialState };
}

export async function updateResume() {
  await sleep(200);

  const {
    resume: { title, basic, employmentHistories },
  } = store.getState();

  return { data: { title, basic, employmentHistories } };
}

export async function addEmploymentHistory() {
  await sleep(200);

  const {
    resume: { employmentHistories },
  } = store.getState();

  dummyEmploymentHistories = [
    ...employmentHistories,
    {
      id: uuid(),
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      address: '',
      description: '',
    },
  ];

  return { data: dummyEmploymentHistories };
}

export async function removeEmploymentHistory(id: string) {
  await sleep(200);

  dummyEmploymentHistories = dummyEmploymentHistories.filter(
    (dummyEmploymentHistory) => dummyEmploymentHistory.id !== id
  );

  return { data: dummyEmploymentHistories };
}
