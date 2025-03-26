// Copyright 2024-2025, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import { QueryStringMachine } from '../../query-string-machine/js/QueryStringMachineModule.js';
import getGameLevelsSchema from '../../vegas/js/getGameLevelsSchema.js';
import areaModelAlgebra from './areaModelAlgebra.js';

const AreaModelAlgebraQueryParameters = QueryStringMachine.getAll( {

  // The levels to show in the Game screen.
  gameLevels: getGameLevelsSchema( 6 )
} );

areaModelAlgebra.register( 'AreaModelAlgebraQueryParameters', AreaModelAlgebraQueryParameters );

export default AreaModelAlgebraQueryParameters;