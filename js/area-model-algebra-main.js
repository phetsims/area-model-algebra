// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const ExploreScreen = require( 'AREA_MODEL_COMMON/screens/ExploreScreen' );
  const GenericScreen = require( 'AREA_MODEL_COMMON/screens/GenericScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const VariablesGameScreen = require( 'AREA_MODEL_COMMON/screens/VariablesGameScreen' );
  const VariablesScreen = require( 'AREA_MODEL_COMMON/screens/VariablesScreen' );

  // strings
  const areaModelAlgebraTitleString = require( 'string!AREA_MODEL_ALGEBRA/area-model-algebra.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
      graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
    },
    supportsSound: true
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
} );
