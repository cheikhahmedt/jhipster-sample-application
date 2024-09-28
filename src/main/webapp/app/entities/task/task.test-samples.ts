import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 10428,
};

export const sampleWithPartialData: ITask = {
  id: 13705,
  description: 'discontinue',
};

export const sampleWithFullData: ITask = {
  id: 15071,
  title: 'service nab after',
  description: 'incomparable',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
