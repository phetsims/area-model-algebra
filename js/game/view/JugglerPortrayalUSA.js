// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import usaLevel1Icon_svg from '../../../images/localized/usaLevel1Icon_svg.js';
import usaLevel2Icon_svg from '../../../images/localized/usaLevel2Icon_svg.js';
import usaLevel3Icon_svg from '../../../images/localized/usaLevel3Icon_svg.js';
import usaLevel4Icon_svg from '../../../images/localized/usaLevel4Icon_svg.js';
import usaLevel5Icon_svg from '../../../images/localized/usaLevel5Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/localized/usaLevel6Icon_svg.js';
import usaVariablesGameScreenIcon_svg from '../../../images/localized/usaVariablesGameScreenIcon_svg.js';

const unitedStatesOfAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty;

const JugglerPortrayalUSA = new JugglerPortrayal(
  unitedStatesOfAmericaString,
  usaLevel1Icon_svg,
  usaLevel2Icon_svg,
  usaLevel3Icon_svg,
  usaLevel4Icon_svg,
  usaLevel5Icon_svg,
  usaLevel6Icon_svg,
  usaVariablesGameScreenIcon_svg,
  USA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalUSA;