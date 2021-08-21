export type Basic = {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  selfIntroduction: string;
};

export type EmploymentHistory = {
  id: string;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  address: string;
  description: string;
};

export type InputName<T> = Extract<keyof T, string>;
