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
import JugglerCharacters from './view/JugglerCharacters.js';

class GameScreen extends VariablesGameScreen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @public
   */
  constructor( preferencesModel ) {

    super( preferencesModel, AreaModelAlgebraImages.gameHomeScreenIconImageProperty,
      gameAreaModel => new JugglerCharacters( gameAreaModel ),
      AreaModelAlgebraQueryParameters.gameLevels );
  }
}

areaModelAlgebra.register( 'GameScreen', GameScreen );
export default GameScreen;