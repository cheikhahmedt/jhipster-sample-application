import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 24663,
};

export const sampleWithPartialData: ILocation = {
  id: 12259,
  postalCode: 'from even tabletop',
  stateProvince: 'boohoo rival',
};

export const sampleWithFullData: ILocation = {
  id: 25253,
  streetAddress: 'yippee round quizzically',
  postalCode: 'behind tensely',
  city: 'Lake Ford',
  stateProvince: 'times',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
