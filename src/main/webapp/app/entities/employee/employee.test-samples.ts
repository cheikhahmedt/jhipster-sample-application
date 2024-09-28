import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 20326,
};

export const sampleWithPartialData: IEmployee = {
  id: 18806,
  firstName: 'Burnice',
  email: 'Spencer.Mosciski57@gmail.com',
  phoneNumber: 'voluminous gazebo alongside',
  hireDate: dayjs('2024-09-27T13:37'),
  salary: 3593,
  commissionPct: 4220,
};

export const sampleWithFullData: IEmployee = {
  id: 11217,
  firstName: 'Dakota',
  lastName: 'Harris',
  email: 'Danny.Gislason@yahoo.com',
  phoneNumber: 'worriedly',
  hireDate: dayjs('2024-09-28T01:25'),
  salary: 6361,
  commissionPct: 8125,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
