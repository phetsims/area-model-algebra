// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaLevel3Icon_svg from '../../../images/africa/africaLevel3Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/africa/africaLevel5Icon_svg.js';
import africaModestLevel2Icon_svg from '../../../images/africaModest/africaModestLevel2Icon_svg.js';
import africaModestLevel4Icon_svg from '../../../images/africaModest/africaModestLevel4Icon_svg.js';
import africaModestVariablesGameScreenIcon_svg from '../../../images/africaModest/africaModestVariablesGameScreenIcon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/usa/usaLevel6Icon_svg.js';

const africaModestString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const JugglerPortrayalAfricaModest = new JugglerPortrayal(
  africaModestString,
  usaLevel1Icon_svg,
  africaModestLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaModestLevel4Icon_svg,
  africaLevel5Icon_svg,
  usaLevel6Icon_svg,
  africaModestVariablesGameScreenIcon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAfricaModest;