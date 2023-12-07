// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all images for the Level Juggler in Area Model Algebra. Collects the images to support selecting a
 * different juggler character for localization.
 *
 * @author Luisa Vargas
 */

import areaModelAlgebra from '../../areaModelAlgebra.js';
import JugglerPortrayalAfrica from './JugglerPortrayalAfrica.js';
import JugglerPortrayalAfricaModest from './JugglerPortrayalAfricaModest.js';
import JugglerPortrayalAsia from './JugglerPortrayalAsia.js';
import JugglerPortrayalLatinAmerica from './JugglerPortrayalLatinAmerica.js';
import JugglerPortrayalOceania from './JugglerPortrayalOceania.js';
import JugglerPortrayalUSA from './JugglerPortrayalUSA.js';

const JugglerImages = {
  JUGGLER_PORTRAYALS: [
    JugglerPortrayalAfrica,
    JugglerPortrayalAfricaModest,
    JugglerPortrayalAsia,
    JugglerPortrayalLatinAmerica,
    JugglerPortrayalOceania,
    JugglerPortrayalUSA
  ]
};

areaModelAlgebra.register( 'JugglerImages', JugglerImages );
export default JugglerImages;