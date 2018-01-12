// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var areaModelAlgebra = require( 'AREA_MODEL_ALGEBRA/areaModelAlgebra' );
  var AreaModelAlgebraModel = require( 'AREA_MODEL_ALGEBRA/area-model-algebra/model/AreaModelAlgebraModel' );
  var AreaModelAlgebraScreenView = require( 'AREA_MODEL_ALGEBRA/area-model-algebra/view/AreaModelAlgebraScreenView' );

  /**
   * @constructor
   */
  function AreaModelAlgebraScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new AreaModelAlgebraModel(); },
      function( model ) { return new AreaModelAlgebraScreenView( model ); },
      options
    );
  }

  areaModelAlgebra.register( 'AreaModelAlgebraScreen', AreaModelAlgebraScreen );

  return inherit( Screen, AreaModelAlgebraScreen );
} );