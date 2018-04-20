// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var ExploreScreen = require( 'AREA_MODEL_COMMON/screens/ExploreScreen' );
  var GenericScreen = require( 'AREA_MODEL_COMMON/screens/GenericScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var VariablesGameScreen = require( 'AREA_MODEL_COMMON/screens/VariablesGameScreen' );
  var VariablesScreen = require( 'AREA_MODEL_COMMON/screens/VariablesScreen' );

  // strings
  var areaModelAlgebraTitleString = require( 'string!AREA_MODEL_ALGEBRA/area-model-algebra.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Kathy Perkins, Ariel Paul, Susan Miller',
      qualityAssurance: 'Steele Dalton, Ethan Johnson, Liam Mulhall',
      graphicArts: 'Amanda McGarry, Diana Lopez Tavares'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelAlgebraTitleString, [
      new ExploreScreen(),
      new GenericScreen(),
      new VariablesScreen(),
      new VariablesGameScreen()
    ], simOptions );
    sim.start();
  } );
} );