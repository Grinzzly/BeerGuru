import React from 'react';
import PropTypes from 'prop-types';

import {
  ErrorInfo,
  Loader,
} from '../../ui-kit';

import { SimilarBeer } from './SimilarBeer';

import './SimilarBeers.css';

export const SimilarBeers = ({ similarBeers: { similars, isLoading, isError } }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorInfo />;
  }

  return (
    <ul className="beer-list-similars">
      {
        similars
          .filter(beer => beer)
          .map(beer => <SimilarBeer key={beer} {...beer} />)
      }
    </ul>
  );
};

SimilarBeers.propTypes = {
  similarBeers: PropTypes.shape({
    similars: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  }),
};

SimilarBeers.defaultProps = {
  similarBeers: {},
};
