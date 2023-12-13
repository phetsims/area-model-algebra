// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_svg from '../../../images/usa/variablesGameScreenIcon_svg.js';
import level1Icon_svg from '../../../images/usa/level1Icon_svg.js';
import level2Icon_svg from '../../../images/usa/level2Icon_svg.js';
import level3Icon_svg from '../../../images/usa/level3Icon_svg.js';
import level4Icon_svg from '../../../images/usa/level4Icon_svg.js';
import level5Icon_svg from '../../../images/usa/level5Icon_svg.js';
import level6Icon_svg from '../../../images/usa/level6Icon_svg.js';
import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';

const unitedStatesOfAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty;

const JugglerPortrayalUSA = new JugglerPortrayal(
  unitedStatesOfAmericaString,
  level1Icon_svg,
  level2Icon_svg,
  level3Icon_svg,
  level4Icon_svg,
  level5Icon_svg,
  level6Icon_svg,
  variablesGameScreenIcon_svg,
  USA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalUSA;