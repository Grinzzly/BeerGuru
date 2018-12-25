import {
  GET_BEERS_REQUESTED,
  GET_BEERS_DONE,
  GET_BEERS_FAILED,
} from './types';

export const getBeersRequested = () => ({
  type: GET_BEERS_REQUESTED,
});

export const getBeersDone = data => ({
  type: GET_BEERS_DONE,
  payload: data,
});

export const getBeersFailed = () => ({
  type: GET_BEERS_FAILED,
});
