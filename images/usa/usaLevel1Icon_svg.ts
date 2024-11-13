/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1,.cls-3{stroke:#000;fill:none}.cls-1{stroke-linejoin:round;stroke-linecap:round}.cls-3{stroke-miterlimit:10}.cls-6,.cls-9{stroke-width:0}.cls-6{fill:#4f4f4f}.cls-9{fill:#b18d6b}</style></defs><path d="M105 140.5c.2 1 .4 1.8.6 2.7-3.3.3-5.7 2.9-7.1 5.5-1.5.8-2.4.7-3.8.8-.1-1.9-.3-3.8-.4-5.8 3.8.4 7.6-.8 10.7-3.1Z" class="cls-6"/><path d="M94.7 149.4c.5 14.6 2.5 26.5 2.2 40.6-15.9 6.3-34.8 6.5-51.2 1.6 3-9.7 2-36.6-1.3-46.7 0 .7-.1 1.4-.2 2-5.9 2.3-13 .7-17.4-3.8 1.7-8.8 3-23 6.8-30.7 2.5-5.4 12.5-5.5 17.3-7.1 3.2 12.7 32.3 15.9 28.2-.9 5.9 1 16.6 3 18.2 5.3 2.9 4.1 5.5 20.8 7.8 31-3.1 2.3-6.9 3.5-10.7 3.1.2 2 .3 3.9.4 5.8Z" style="stroke-width:0;fill:#d66749"/><path d="M36.5 79.8c.8 0 1.5.3 2.2.7 5 5.5 4.1-4.1 2.2-12.6-3-22.3 40.3-27.7 42.8-5.5 3.5 19.4 6.7 24.7-7.7 38.3 3.3 12.6-13.3 15.4-19.5 4.9-2.1-5.5-4.7-9.4-12-15.4-2.6 6-16.9-9.8-7.9-10.5Zm42-8.7c1.7-.6-.8-7.2-2.5-6.4-1.7.5.9 7.2 2.5 6.4M58.3 77c2-.7-.8-7.9-2.8-7.1-2 .7.8 7.9 2.8 7.1" class="cls-9"/><path d="M81.9 54.5c.1.4 1.3 4.2 1.8 7.8-2.5-22.2-45.8-16.8-42.8 5.5 2 8.5 2.8 18.1-2.2 12.6-.7-.4-1.4-.7-2.2-.7-5.2-9.9-7.2-22.6-1.9-29.2 11.7-14.4 42.6-20.1 47.3 4" style="stroke-width:0;fill:#1e160d"/><path d="M79.1 104.3c4.1 16.9-25 13.6-28.2.9l4.9-1.1c2.9 10.5 21.6 10.3 20.4-.2.7 0 1.7.3 2.9.4" class="cls-6"/><path d="M78.6 67.4c1.6 4.1-1 5.2-2.6 1-1.7-4.1 1-5.2 2.6-1m-20.2 5.4c1.8 4.6-1.3 5.8-3.1 1.2s1.3-5.8 3.1-1.2" style="stroke-width:0"/><path d="M44.3 146.9c-1.1 9.6-14 6.1-18.1 0l.6-3.8c4.5 4.5 11.5 6.1 17.4 3.8Z" class="cls-6"/><path d="M133.9 139.7c-4.5-1.5-9.9.2-13.6 3.1-2.6-1.1-6.6.7-7.3 3.4-.1-.8-.2-1.5-.7-2.2-4.9-2.4-11.6-.7-13.8 4.6-1.5.8-2.4.7-3.8.8q.3 5.1.6 9.6c2.5 6 10.5 2.5 14.6.2.7.9 1.8 1.6 3 1.7-1.8 5.8 7.6 5.5 5.4-.4 1-.3 1.9-1 2.4-2 2.2 1.8 6.1 1.9 6.5-1.6 1.2-.1 2.7.6 3.7-.3 1.6-2.6 4.2-9.2-1.5-6.6-2.4.5-5-1.2-3.4-3.6 1.8-2.8 6.8-3.7 7.9-6.7m-88.2 33.1c-2.7-2.7-3 3.7-5.6 2.4.6-1.4 1.3-3.6 0-4.7-.5-1.2-1-2.4-1.7-3.4 0-5.1 1.7-13.9 2.2-15-5.5 1.5-9.4.2-13.4-4.2-.3 2.9-3.5 12.5-2 15.3-7.2 2.4-13.6 11.7-.6 6.3 2.7 2.5-1 13.2 6.5 8.6 1.1 2.5 4.4 2 6.1.6 3.8 3.5 11.4-.9 8.5-5.8Z" class="cls-9"/><path d="M36.5 79.8c-5.2-9.9-7.2-22.6-1.9-29.3 11.7-14.4 42.6-20.1 47.3 4 2.3 8.1 2.2 12.6 4.8 23.9 2.2 11-8.9 20.1-10.7 22.3 3.3 12.6-13.3 15.4-19.5 4.9-2-5.5-4.7-9.6-12.1-15.4" class="cls-3"/><path d="M76 68.4c1.6 4.2 4.3 3.1 2.6-1-1.6-4.2-4.3-3.1-2.6 1M55.3 74c1.8 4.6 4.9 3.4 3.1-1.2s-4.9-3.4-3.1 1.2" class="cls-1"/><path d="M64.9 85.4c4.3 1.1 8.9.4 12.8-1.8" class="cls-3"/><path d="M38.7 80.5c-3.3-2.3-6.8 1.4-4.4 4.7 1.5 2.4 9 10.6 10.2 4.4" class="cls-1"/><path d="M83.6 62.4c-2.5-22.2-45.8-16.8-42.8 5.5 2 8.5 2.8 18.1-2.2 12.6m17.2 23.6c-6.1 2.2-19 2.1-22.2 8.2-4.2 9.2-5.4 24.3-7.4 34.5 4.4 5.6 10 7.1 16.4 4.6 3.2-5.5 1.6-10.7 3.1-18.4m30.5-29.1c5.9.9 19 3.1 21.1 5.7 3.2 4.6 5.8 23.4 8.4 33.6m-6.5 19c3.6 1 7.6-1.6 10.6-2.9" class="cls-3"/><path d="M113.1 146.3c-.1-.8-.2-1.5-.7-2.2-7.3-3.7-15.1 2.3-15.5 9.9-.3 1.9-1 7 2 8.1m-60.5 5c0-5.1 1.7-13.9 2.2-15m-13.5-4.2c-.3 2.9-3.5 12.5-2 15.3" class="cls-3"/><path d="M99.2 162.2c-2.3-.7-3.1-1.1-4-3.2" class="cls-3"/><path d="M96.9 190c-15.9 6.3-34.8 6.5-51.2 1.6 3-9.7 2-36.6-1.3-46.7m47.9-19.4c2.8 21.8 4.1 42.9 4.7 64.5" style="stroke-linecap:round;stroke:#000;fill:none;stroke-miterlimit:10"/><path d="M57.1 62.8c-5.5-.1-7.4 2.8-8.2 4.2m20.9-7.1c3.8-3.7 7.8-1.3 8.6-.1m16.3 89.6c1.4 0 2.4 0 3.9-.8M69.9 78.3c1.2-3.4 6.2-6.1 7.9-1.3m51.6 72.9v.1m-16.3-1.6v-1.5c.1-3.1 4.6-5.2 7.3-4 3.6-2.9 9.1-4.7 13.6-3.1-1.1 3-6.1 3.9-7.9 6.7-1.6 2.4 1 4.1 3.4 3.5m-8.4 3.4c1.5 2.5 3.3-1.9 5.1-1.2 3.4 4-.3 10.6-5.6 6.3m-7.6-11.6c-5.6 1.2-6.3 13.6 0 14.1" class="cls-3"/><path d="M126.9 152.6c.8-2 4.4-4.6 6.1-2.3.3 2.1-1.2 4.4-2.1 6.3-1 .9-2.5.2-3.7.4m-13 .4c-1.3 1.7-2 4.8-1.1 6.9 1.5 1.3 5 1.3 5.3-1.1.4-2.2-1.6-8.3-4.3-5.7Zm4.1 3.1c1.1-.3 2-1.1 2.5-2.2m-80.6 12.2c-1.2-4.6-4.3-5.4-8.4-6.5-7.2-6.1-24.7 12.5-7.2 5.5 2.6 2.3-.5 7.8 3 9.5 3.8.8 6.7-4.2 8.1-7.2.4-4.8-5.4-1.4-6.8.8" class="cls-3"/><path d="M31 177.9c2.1 4.4 7.8.5 9.1-2.7 2.4-4.4-1.4-7.2-4.6-3.2" class="cls-3"/><path d="M36.9 178.4c5.8 5.5 13.6-5 7-6.1-1.6.5-1.7 4-3.8 3m10.8-70.1c3.1 12.7 32.3 16 28.2-.9M26.8 143c4.5 4.5 11.5 6.1 17.5 3.8m50-3.2c3.8.4 7.6-.8 10.7-3.1" class="cls-3"/><path d="M106.4 103.5h20.8v20.8h-20.8z" style="stroke-width:0;fill:#00a553" transform="rotate(-26.2 116.643 113.892)"/><path d="M106.4 103.5h20.8v20.8h-20.8z" style="fill:none;stroke-miterlimit:10;stroke:#fff" transform="rotate(-26.2 116.643 113.892)"/></svg>')}`;
export default image;