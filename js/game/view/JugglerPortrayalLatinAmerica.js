// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import variablesGameScreenIcon_svg from '../../../images/latin-america/variablesGameScreenIcon_svg.js';
import level1Icon_svg from '../../../images/latin-america/level1Icon_svg.js';
import level2Icon_svg from '../../../images/latin-america/level2Icon_svg.js';
import level3Icon_svg from '../../../images/latin-america/level3Icon_svg.js';
import level4Icon_svg from '../../../images/latin-america/level4Icon_svg.js';
import level5Icon_svg from '../../../images/latin-america/level5Icon_svg.js';
import level6Icon_svg from '../../../images/latin-america/level6Icon_svg.js';
import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';

const latinAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty;

const JugglerPortrayalLatinAmerica = new JugglerPortrayal(
  latinAmericaString,
  level1Icon_svg,
  level2Icon_svg,
  level3Icon_svg,
  level4Icon_svg,
  level5Icon_svg,
  level6Icon_svg,
  variablesGameScreenIcon_svg,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalLatinAmerica;