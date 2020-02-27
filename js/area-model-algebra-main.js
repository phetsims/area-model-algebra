// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import ExploreScreen from '../../area-model-common/js/screens/ExploreScreen.js';
import GenericScreen from '../../area-model-common/js/screens/GenericScreen.js';
import VariablesGameScreen from '../../area-model-common/js/screens/VariablesGameScreen.js';
import VariablesScreen from '../../area-model-common/js/screens/VariablesScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import areaModelAlgebraStrings from './area-model-algebra-strings.js';

const areaModelAlgebraTitleString = areaModelAlgebraStrings[ 'area-model-algebra' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Hanson, Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson',
    team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
    graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
  }
};

SimLauncher.launch( function() {
  const sim = new Sim( areaModelAlgebraTitleString, [
    new ExploreScreen(),
    new GenericScreen(),
    new VariablesScreen(),
    new VariablesGameScreen()
  ], simOptions );
  sim.start();
} );