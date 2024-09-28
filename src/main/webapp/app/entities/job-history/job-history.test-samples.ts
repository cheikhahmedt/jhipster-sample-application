import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 3087,
};

export const sampleWithPartialData: IJobHistory = {
  id: 5933,
};

export const sampleWithFullData: IJobHistory = {
  id: 30519,
  startDate: dayjs('2024-09-28T04:26'),
  endDate: dayjs('2024-09-28T11:18'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
