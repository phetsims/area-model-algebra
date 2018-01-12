// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var areaModelAlgebra = require( 'AREA_MODEL_ALGEBRA/areaModelAlgebra' );

  /**
   * @param {AreaModelAlgebraModel} areaModelAlgebraModel
   * @constructor
   */
  function AreaModelAlgebraScreenView( areaModelAlgebraModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        areaModelAlgebraModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  areaModelAlgebra.register( 'AreaModelAlgebraScreenView', AreaModelAlgebraScreenView );

  return inherit( ScreenView, AreaModelAlgebraScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );