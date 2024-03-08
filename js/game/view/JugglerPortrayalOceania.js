// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import oceaniaLevel1Icon_svg from '../../../images/localized/oceaniaLevel1Icon_svg.js';
import oceaniaLevel3Icon_svg from '../../../images/localized/oceaniaLevel3Icon_svg.js';
import oceaniaLevel4Icon_svg from '../../../images/localized/oceaniaLevel4Icon_svg.js';
import oceaniaLevel5Icon_svg from '../../../images/localized/oceaniaLevel5Icon_svg.js';
import oceaniaLevel6Icon_svg from '../../../images/localized/oceaniaLevel6Icon_svg.js';
import oceaniaVariablesGameScreenIcon_svg from '../../../images/localized/oceaniaVariablesGameScreenIcon_svg.js';
import usaLevel2Icon_svg from '../../../images/localized/usaLevel2Icon_svg.js';

const oceaniaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty;

const JugglerPortrayalOceania = new JugglerPortrayal(
  oceaniaString,
  oceaniaLevel1Icon_svg,
  usaLevel2Icon_svg,
  oceaniaLevel3Icon_svg,
  oceaniaLevel4Icon_svg,
  oceaniaLevel5Icon_svg,
  oceaniaLevel6Icon_svg,
  oceaniaVariablesGameScreenIcon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalOceania;