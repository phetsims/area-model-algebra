// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all images for the Level Juggler in Area Model Algebra. Collects the images to support selecting a
 * different juggler character for localization.
 *
 * @author Luisa Vargas
 */

import areaModelAlgebra from '../../areaModelAlgebra.js';
import JugglerCharacterSetAfrica from './JugglerCharacterSetAfrica.js';
import JugglerCharacterSetAfricaModest from './JugglerCharacterSetAfricaModest.js';
import JugglerCharacterSetAsia from './JugglerCharacterSetAsia.js';
import JugglerCharacterSetLatinAmerica from './JugglerCharacterSetLatinAmerica.js';
import JugglerCharacterSetOceania from './JugglerCharacterSetOceania.js';
import JugglerCharacterSetUSA from './JugglerCharacterSetUSA.js';

const JugglerImages = {
  JUGGLER_CHARACTER_SETS: [
    JugglerCharacterSetAfrica,
    JugglerCharacterSetAfricaModest,
    JugglerCharacterSetAsia,
    JugglerCharacterSetLatinAmerica,
    JugglerCharacterSetOceania,
    JugglerCharacterSetUSA
  ]
};

areaModelAlgebra.register( 'JugglerImages', JugglerImages );
export default JugglerImages;