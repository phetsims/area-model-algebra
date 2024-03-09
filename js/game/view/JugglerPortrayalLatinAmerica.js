// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import latinAmericaLevel1Icon_svg from '../../../images/latinAmerica/latinAmericaLevel1Icon_svg.js';
import latinAmericaLevel2Icon_svg from '../../../images/latinAmerica/latinAmericaLevel2Icon_svg.js';
import latinAmericaLevel3Icon_svg from '../../../images/latinAmerica/latinAmericaLevel3Icon_svg.js';
import latinAmericaLevel4Icon_svg from '../../../images/latinAmerica/latinAmericaLevel4Icon_svg.js';
import latinAmericaLevel5Icon_svg from '../../../images/latinAmerica/latinAmericaLevel5Icon_svg.js';
import latinAmericaLevel6Icon_svg from '../../../images/latinAmerica/latinAmericaLevel6Icon_svg.js';
import latinAmericaVariablesGameScreenIcon_svg from '../../../images/latinAmerica/latinAmericaVariablesGameScreenIcon_svg.js';

const latinAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty;

const JugglerPortrayalLatinAmerica = new JugglerPortrayal(
  latinAmericaString,
  latinAmericaLevel1Icon_svg,
  latinAmericaLevel2Icon_svg,
  latinAmericaLevel3Icon_svg,
  latinAmericaLevel4Icon_svg,
  latinAmericaLevel5Icon_svg,
  latinAmericaLevel6Icon_svg,
  latinAmericaVariablesGameScreenIcon_svg,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalLatinAmerica;