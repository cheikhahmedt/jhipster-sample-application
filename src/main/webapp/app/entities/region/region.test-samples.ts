import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 31736,
};

export const sampleWithPartialData: IRegion = {
  id: 6057,
  regionName: 'quintuple',
};

export const sampleWithFullData: IRegion = {
  id: 14459,
  regionName: 'rally',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
