// Copyright 2023, University of Colorado Boulder

/**
 * Extends the "Game" screen in Area Model Algebra, serves to pass in the JugglerImages.
 *
 * @author Luisa Vargas
 */

import VariablesGameScreen from '../../../area-model-common/js/screens/VariablesGameScreen.js';
import areaModelAlgebra from '../areaModelAlgebra.js';
import JugglerImages from '../game/view/JugglerImages.js';
import JugglerCharacters from './view/JugglerCharacters.js';

class GameScreen extends VariablesGameScreen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @public
   */
  constructor( preferencesModel ) {

    super( preferencesModel, JugglerImages.JUGGLER_PORTRAYALS,
        gameAreaModel => new JugglerCharacters( gameAreaModel ) );
  }
}

areaModelAlgebra.register( 'GameScreen', GameScreen );
export default GameScreen;