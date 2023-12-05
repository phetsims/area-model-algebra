// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_png from '../../../mipmaps/africa/variablesGameScreenIcon_png.js';
import level1Icon_png from '../../../mipmaps/usa/level1Icon_png.js';
import level2Icon_png from '../../../mipmaps/africa/level2Icon_png.js';
import level3Icon_png from '../../../mipmaps/africa/level3Icon_png.js';
import level4Icon_png from '../../../mipmaps/africa/level4Icon_png.js';
import level5Icon_png from '../../../mipmaps/africa/level5Icon_png.js';
import level6Icon_png from '../../../mipmaps/usa/level6Icon_png.js';
import JugglerCharacterSet from '../../../../area-model-common/js/game/view/JugglerCharacterSet.js';

const africaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty;

const JugglerCharacterSetAfrica = new JugglerCharacterSet(
  africaString,
  level1Icon_png,
  level2Icon_png,
  level3Icon_png,
  level4Icon_png,
  level5Icon_png,
  level6Icon_png,
  variablesGameScreenIcon_png,
  AFRICA_REGION_AND_CULTURE_ID
);

export default JugglerCharacterSetAfrica;