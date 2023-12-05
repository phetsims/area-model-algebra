// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_png from '../../../mipmaps/africa-modest/variablesGameScreenIcon_png.js';
import level1Icon_png from '../../../mipmaps/africa-modest/level1Icon_png.js';
import level2Icon_png from '../../../mipmaps/africa-modest/level2Icon_png.js';
import level3Icon_png from '../../../mipmaps/africa-modest/level3Icon_png.js';
import level4Icon_png from '../../../mipmaps/africa-modest/level4Icon_png.js';
import level5Icon_png from '../../../mipmaps/africa-modest/level5Icon_png.js';
import level6Icon_png from '../../../mipmaps/africa-modest/level6Icon_png.js';
import JugglerCharacterSet from '../../../../area-model-common/js/game/view/JugglerCharacterSet.js';

const africaModestString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const JugglerCharacterSetAfricaModest = new JugglerCharacterSet(
  africaModestString,
  level1Icon_png,
  level2Icon_png,
  level3Icon_png,
  level4Icon_png,
  level5Icon_png,
  level6Icon_png,
  variablesGameScreenIcon_png,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default JugglerCharacterSetAfricaModest;