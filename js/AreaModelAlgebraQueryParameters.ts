// Copyright 2024-2026, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { QueryStringMachine } from '../../query-string-machine/js/QueryStringMachineModule.js';
import getGameLevelsSchema from '../../vegas/js/getGameLevelsSchema.js';

const AreaModelAlgebraQueryParameters = QueryStringMachine.getAll( {

  // The levels to show in the Game screen.
  gameLevels: getGameLevelsSchema( 6 )
} );

export default AreaModelAlgebraQueryParameters;
