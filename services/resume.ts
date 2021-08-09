import { v4 as uuid } from 'uuid';

let dummyCareers = [
  {
    id: 'First',
    jobDetail: '',
    company: '',
    startDate: '',
    endDate: '',
    region: '',
    description: '',
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchCareers() {
  await sleep(200);
  return { data: dummyCareers };
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

export async function changeResume() {
  await sleep(200);
}
