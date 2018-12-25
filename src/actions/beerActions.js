import {
  GET_BEER_REQUESTED,
  GET_BEER_DONE,
  GET_BEER_FAILED,
  GET_BEER_SIMILARS_REQUESTED,
  GET_BEER_SIMILARS_DONE,
  GET_BEER_SIMILARS_FAILED,
} from './types';

export const getBeerRequested = () => ({
  type: GET_BEER_REQUESTED,
});

export const getBeerDone = beer => ({
  type: GET_BEER_DONE,
  payload: beer,
});

export const getBeerFailed = () => ({
  type: GET_BEER_FAILED,
});

export const getBeerSimilarsRequested = () => ({
  type: GET_BEER_SIMILARS_REQUESTED,
});

export const getBeerSimilarsDone = similarbeers => ({
  type: GET_BEER_SIMILARS_DONE,
  payload: similarbeers,
});

export const getBeerSimilarsFailed = () => ({
  type: GET_BEER_SIMILARS_FAILED,
});
