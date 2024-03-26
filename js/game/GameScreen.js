// Copyright 2023-2024, University of Colorado Boulder

/**
 * Extends the "Game" screen in Area Model Algebra, serves to pass in the JugglerImages.
 *
 * @author Luisa Vargas
 */

import VariablesGameScreen from '../../../area-model-common/js/screens/VariablesGameScreen.js';
import areaModelAlgebra from '../areaModelAlgebra.js';
import AreaModelAlgebraImages from '../AreaModelAlgebraImages.js';
import AreaModelAlgebraQueryParameters from '../AreaModelAlgebraQueryParameters.js';

class GameScreen extends VariablesGameScreen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @public
   */
  constructor( preferencesModel ) {

    super( preferencesModel, AreaModelAlgebraImages.gameHomeScreenIconImageProperty,
      [
        AreaModelAlgebraImages.level1ImageProperty,
        AreaModelAlgebraImages.level2ImageProperty,
        AreaModelAlgebraImages.level3ImageProperty,
        AreaModelAlgebraImages.level4ImageProperty,
        AreaModelAlgebraImages.level5ImageProperty,
        AreaModelAlgebraImages.level6ImageProperty
      ],
      AreaModelAlgebraQueryParameters.gameLevels );
  }
}

areaModelAlgebra.register( 'GameScreen', GameScreen );
export default GameScreen;