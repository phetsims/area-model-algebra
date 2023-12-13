// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_svg from '../../../images/asia/variablesGameScreenIcon_svg.js';
import level1Icon_svg from '../../../images/asia/level1Icon_svg.js';
import level2Icon_svg from '../../../images/usa/level2Icon_svg.js';
import level3Icon_svg from '../../../images/asia/level3Icon_svg.js';
import level4Icon_svg from '../../../images/asia/level4Icon_svg.js';
import level5Icon_svg from '../../../images/asia/level5Icon_svg.js';
import level6Icon_svg from '../../../images/asia/level6Icon_svg.js';
import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';

const asiaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty;

const JugglerPortrayalAsia = new JugglerPortrayal(
  asiaString,
  level1Icon_svg,
  level2Icon_svg,
  level3Icon_svg,
  level4Icon_svg,
  level5Icon_svg,
  level6Icon_svg,
  variablesGameScreenIcon_svg,
  ASIA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAsia;