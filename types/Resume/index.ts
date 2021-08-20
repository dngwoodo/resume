export type Basic = {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  selfIntroduction: string;
};

export type Career = {
  id: string;
  jobDetail: string;
  company: string;
  startDate: string;
  endDate: string;
  region: string;
  description: string;
};

export type InputName<T> = keyof T;
