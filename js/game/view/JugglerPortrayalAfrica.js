// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import africaLevel2Icon_svg from '../../../images/africa/africaLevel2Icon_svg.js';
import africaLevel3Icon_svg from '../../../images/africa/africaLevel3Icon_svg.js';
import africaLevel4Icon_svg from '../../../images/africa/africaLevel4Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/africa/africaLevel5Icon_svg.js';
import africaVariablesGameScreenIcon_svg from '../../../images/africa/africaVariablesGameScreenIcon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/usa/usaLevel6Icon_svg.js';

const JugglerPortrayalAfrica = new JugglerPortrayal(
  'africa',
  usaLevel1Icon_svg,
  africaLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaLevel4Icon_svg,
  africaLevel5Icon_svg,
  usaLevel6Icon_svg,
  africaVariablesGameScreenIcon_svg
);

export default JugglerPortrayalAfrica;