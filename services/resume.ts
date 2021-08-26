import { v4 as uuid } from 'uuid';

import { EmploymentHistory, EducationalHistory } from '@/types/Resume';

import { initialState } from '@/redux/slice';
import { store } from '@/redux/store';

let dummyEmploymentHistories: EmploymentHistory[] = [];
let dummyEducationalHistories: EducationalHistory[] = [];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchResume() {
  await sleep(200);

  return { data: initialState };
}

export async function updateResume() {
  await sleep(200);

  const { resume } = store.getState();

  return {
    data: resume,
  };
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

export async function addEducationalHistory() {
  await sleep(200);

  const {
    resume: { educationalHistories },
  } = store.getState();

  dummyEducationalHistories = [
    ...educationalHistories,
    {
      id: uuid(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      grade: '',
      description: '',
    },
  ];

  return { data: dummyEducationalHistories };
}

export async function removeEducationalHistory(id: string) {
  await sleep(200);

  dummyEducationalHistories = dummyEducationalHistories.filter((value) => value.id !== id);

  return { data: dummyEducationalHistories };
}
