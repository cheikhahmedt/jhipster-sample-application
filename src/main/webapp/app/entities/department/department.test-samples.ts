import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 22042,
  departmentName: 'prestigious bidet',
};

export const sampleWithPartialData: IDepartment = {
  id: 25364,
  departmentName: 'qua internationalize',
};

export const sampleWithFullData: IDepartment = {
  id: 25378,
  departmentName: 'vulgarise',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'which',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
