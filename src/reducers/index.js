import { combineReducers } from 'redux';

import beers from './beers';
import beer from './beer';

export default combineReducers({
  beers,
  beer,
});
