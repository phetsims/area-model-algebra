// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaLevel1Icon_svg from '../../../images/asia/asiaLevel1Icon_svg.js';
import asiaLevel3Icon_svg from '../../../images/asia/asiaLevel3Icon_svg.js';
import asiaLevel4Icon_svg from '../../../images/asia/asiaLevel4Icon_svg.js';
import asiaLevel5Icon_svg from '../../../images/asia/asiaLevel5Icon_svg.js';
import asiaLevel6Icon_svg from '../../../images/asia/asiaLevel6Icon_svg.js';
import asiaVariablesGameScreenIcon_svg from '../../../images/asia/asiaVariablesGameScreenIcon_svg.js';
import usaLevel2Icon_svg from '../../../images/usa/usaLevel2Icon_svg.js';

const asiaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty;

const JugglerPortrayalAsia = new JugglerPortrayal(
  asiaString,
  asiaLevel1Icon_svg,
  usaLevel2Icon_svg,
  asiaLevel3Icon_svg,
  asiaLevel4Icon_svg,
  asiaLevel5Icon_svg,
  asiaLevel6Icon_svg,
  asiaVariablesGameScreenIcon_svg,
  ASIA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAsia;