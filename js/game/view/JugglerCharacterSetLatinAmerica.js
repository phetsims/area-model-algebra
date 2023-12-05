// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_png from '../../../mipmaps/latin-america/variablesGameScreenIcon_png.js';
import level1Icon_png from '../../../mipmaps/latin-america/level1Icon_png.js';
import level2Icon_png from '../../../mipmaps/latin-america/level2Icon_png.js';
import level3Icon_png from '../../../mipmaps/latin-america/level3Icon_png.js';
import level4Icon_png from '../../../mipmaps/latin-america/level4Icon_png.js';
import level5Icon_png from '../../../mipmaps/latin-america/level5Icon_png.js';
import level6Icon_png from '../../../mipmaps/latin-america/level6Icon_png.js';
import JugglerCharacterSet from '../../../../area-model-common/js/game/view/JugglerCharacterSet.js';

const latinAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty;

const JugglerCharacterSetLatinAmerica = new JugglerCharacterSet(
  latinAmericaString,
  level1Icon_png,
  level2Icon_png,
  level3Icon_png,
  level4Icon_png,
  level5Icon_png,
  level6Icon_png,
  variablesGameScreenIcon_png,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);

export default JugglerCharacterSetLatinAmerica;