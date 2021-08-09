import { Career } from '@/types/Resume';
import { v4 as uuid } from 'uuid';

import { initialState } from '@/redux/slice';

let dummyCareers: Career[] = [];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchResume() {
  await sleep(200);
  return { data: initialState };
}

export async function updateResume() {
  await sleep(200);
}

export async function addCareer() {
  await sleep(200);

  dummyCareers = [
    ...dummyCareers,
    {
      id: uuid(),
      jobDetail: '',
      company: '',
      startDate: '',
      endDate: '',
      region: '',
      description: '',
    },
  ];
  return { data: dummyCareers };
}

export async function removeCareer(id: string) {
  await sleep(200);

  dummyCareers = dummyCareers.filter((CAREER) => CAREER.id !== id);
  return { data: dummyCareers };
}
