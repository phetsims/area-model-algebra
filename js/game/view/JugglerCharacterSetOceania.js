// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_png from '../../../mipmaps/oceania/variablesGameScreenIcon_png.js';
import level1Icon_png from '../../../mipmaps/oceania/level1Icon_png.js';
import level2Icon_png from '../../../mipmaps/oceania/level2Icon_png.js';
import level3Icon_png from '../../../mipmaps/oceania/level3Icon_png.js';
import level4Icon_png from '../../../mipmaps/oceania/level4Icon_png.js';
import level5Icon_png from '../../../mipmaps/oceania/level5Icon_png.js';
import level6Icon_png from '../../../mipmaps/oceania/level6Icon_png.js';
import JugglerCharacterSet from '../../../../area-model-common/js/game/view/JugglerCharacterSet.js';

const oceaniaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty;

const JugglerCharacterSetOceania = new JugglerCharacterSet(
  oceaniaString,
  level1Icon_png,
  level2Icon_png,
  level3Icon_png,
  level4Icon_png,
  level5Icon_png,
  level6Icon_png,
  variablesGameScreenIcon_png,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default JugglerCharacterSetOceania;