export type Basic = {
  name: string;
  occupation: string;
  email: string;
  phoneNumber: string;
  address: string;
  introduction: string;
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

export type CareerInputName =
  | 'jobDetail'
  | 'company'
  | 'startDate'
  | 'endDate'
  | 'region'
  | 'description';
