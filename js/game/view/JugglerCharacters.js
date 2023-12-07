// Copyright 2023, University of Colorado Boulder

/**
 * The JugglerController creates the images  of each version of the 'level' juggler ( level 1, level 2, level 3, level 4,
 * level 5, and level 6 ), as well as defines the visibility of each individual image based on the
 * regionAndCulturePortrayalProperty.
 *
 * @author Luisa Vargas
 *
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import { Image, Node } from '../../../../scenery/js/imports.js';
import areaModelAlgebra from '../../areaModelAlgebra.js';
import JugglerImages from './JugglerImages.js';

export default class JugglerCharacters {
  /**
   *
   * @param { GameAreaModel } sceneModel
   */
  constructor( sceneModel ) {

    const jugglerSets = JugglerImages.JUGGLER_PORTRAYALS;
    const regionAndCulturePortrayalProperty = sceneModel.regionAndCulturePortrayalProperty;

    const createVisibleProperty = set => {
      return new DerivedProperty( [ regionAndCulturePortrayalProperty ], portrayal => {
        return portrayal === set;
      } );
    };

    const levelOneImages = jugglerSets.map( set => new Image( set.levelOne,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const levelTwoImages = jugglerSets.map( set => new Image( set.levelTwo,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const levelThreeImages = jugglerSets.map( set => new Image( set.levelThree,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const levelFourImages = jugglerSets.map( set => new Image( set.levelFour,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const levelFiveImages = jugglerSets.map( set => new Image( set.levelFive,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const levelSixImages = jugglerSets.map( set => new Image( set.levelSix,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );

    const levelOneNode = new Node( { children: levelOneImages } );
    const levelTwoNode = new Node( { children: levelTwoImages } );
    const levelThreeNode = new Node( { children: levelThreeImages } );
    const levelFourNode = new Node( { children: levelFourImages } );
    const levelFiveNode = new Node( { children: levelFiveImages } );
    const levelSixNode = new Node( { children: levelSixImages } );

    /**
     * @public
     * @type {Node[]}
     */
    this.jugglerNodes = [ levelOneNode, levelTwoNode, levelThreeNode, levelFourNode, levelFiveNode, levelSixNode ];
  }
}

areaModelAlgebra.register( 'JugglerCharacters', JugglerCharacters );