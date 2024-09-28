import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 29126,
};

export const sampleWithPartialData: IJob = {
  id: 16117,
  jobTitle: 'Future Response Facilitator',
  maxSalary: 14026,
};

export const sampleWithFullData: IJob = {
  id: 23664,
  jobTitle: 'Dynamic Usability Engineer',
  minSalary: 12116,
  maxSalary: 2232,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
