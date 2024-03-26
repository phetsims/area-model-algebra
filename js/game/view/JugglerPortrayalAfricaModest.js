// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import africaLevel3Icon_svg from '../../../images/africa/africaLevel3Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/africa/africaLevel5Icon_svg.js';
import africaModestLevel2Icon_svg from '../../../images/africaModest/africaModestLevel2Icon_svg.js';
import africaModestLevel4Icon_svg from '../../../images/africaModest/africaModestLevel4Icon_svg.js';
import africaModestGameHomeScreenIcon_svg from '../../../images/africaModest/africaModestGameHomeScreenIcon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/usa/usaLevel6Icon_svg.js';

const JugglerPortrayalAfricaModest = new JugglerPortrayal(
  'africaModest',
  usaLevel1Icon_svg,
  africaModestLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaModestLevel4Icon_svg,
  africaLevel5Icon_svg,
  usaLevel6Icon_svg,
  africaModestGameHomeScreenIcon_svg
);

export default JugglerPortrayalAfricaModest;