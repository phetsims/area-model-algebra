// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_png from '../../../mipmaps/asia/variablesGameScreenIcon_png.js';
import level1Icon_png from '../../../mipmaps/asia/level1Icon_png.js';
import level2Icon_png from '../../../mipmaps/usa/level2Icon_png.js';
import level3Icon_png from '../../../mipmaps/asia/level3Icon_png.js';
import level4Icon_png from '../../../mipmaps/asia/level4Icon_png.js';
import level5Icon_png from '../../../mipmaps/asia/level5Icon_png.js';
import level6Icon_png from '../../../mipmaps/asia/level6Icon_png.js';
import JugglerCharacterSet from '../../../../area-model-common/js/game/view/JugglerCharacterSet.js';

const asiaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty;

const JugglerCharacterSetAsia = new JugglerCharacterSet(
  asiaString,
  level1Icon_png,
  level2Icon_png,
  level3Icon_png,
  level4Icon_png,
  level5Icon_png,
  level6Icon_png,
  variablesGameScreenIcon_png,
  ASIA_REGION_AND_CULTURE_ID
);

export default JugglerCharacterSetAsia;