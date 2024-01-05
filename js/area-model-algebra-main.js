// Copyright 2018-2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import ExploreScreen from '../../area-model-common/js/screens/ExploreScreen.js';
import GenericScreen from '../../area-model-common/js/screens/GenericScreen.js';
import VariablesScreen from '../../area-model-common/js/screens/VariablesScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import AreaModelAlgebraStrings from './AreaModelAlgebraStrings.js';
import GameScreen from './game/GameScreen.js';
import JugglerImages from './game/view/JugglerImages.js';

const areaModelAlgebraTitleStringProperty = AreaModelAlgebraStrings[ 'area-model-algebra' ].titleStringProperty;

const preferencesModel = new PreferencesModel( {
  localizationOptions: {
    portrayals: JugglerImages.JUGGLER_PORTRAYALS
  }
} );

const simOptions = {
  preferencesModel: preferencesModel,
  credits: {
    leadDesign: 'Amy Hanson, Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson',
    team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
    graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
  }
};

simLauncher.launch( () => {
  const sim = new Sim( areaModelAlgebraTitleStringProperty, [
    new ExploreScreen(),
    new GenericScreen(),
    new VariablesScreen(),
    new GameScreen( preferencesModel )
  ], simOptions );
  sim.start();
} );

