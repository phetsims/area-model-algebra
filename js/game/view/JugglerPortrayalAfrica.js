// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaLevel2Icon_svg from '../../../images/localized/africaLevel2Icon_svg.js';
import africaLevel3Icon_svg from '../../../images/localized/africaLevel3Icon_svg.js';
import africaLevel4Icon_svg from '../../../images/localized/africaLevel4Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/localized/africaLevel5Icon_svg.js';
import africaVariablesGameScreenIcon_svg from '../../../images/localized/africaVariablesGameScreenIcon_svg.js';
import usaLevel1Icon_svg from '../../../images/localized/usaLevel1Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/localized/usaLevel6Icon_svg.js';

const africaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty;

const JugglerPortrayalAfrica = new JugglerPortrayal(
  africaString,
  usaLevel1Icon_svg,
  africaLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaLevel4Icon_svg,
  africaLevel5Icon_svg,
  usaLevel6Icon_svg,
  africaVariablesGameScreenIcon_svg,
  AFRICA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAfrica;