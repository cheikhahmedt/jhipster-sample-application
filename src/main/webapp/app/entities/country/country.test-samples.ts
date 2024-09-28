import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 12449,
};

export const sampleWithPartialData: ICountry = {
  id: 28143,
  countryName: 'since wherever drat',
};

export const sampleWithFullData: ICountry = {
  id: 15333,
  countryName: 'annual',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
