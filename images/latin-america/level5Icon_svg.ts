/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3{stroke:#000;fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-11,.cls-13{stroke-width:0}.cls-11{fill:#cc9975}.cls-13{fill:#f0da7d}</style></defs><path d="M115.2 143c.2.9.4 1.8.6 2.5-3.2.3-5.5 2.7-6.8 5.3-1.4.7-2.3.7-3.7.7-.1-1.8-.2-3.7-.4-5.6 3.7.4 7.3-.8 10.3-3Z" class="cls-13"/><path d="M105.3 151.6c.5 14 2.4 25.4 2.1 38.9-15.3 6-33.4 6.2-49.1 1.5 2.9-9.3 1.9-35.2-1.2-44.8 0 .7-.1 1.3-.2 1.9-5.7 2.2-12.5.7-16.7-3.6 1.6-8.5 2.9-22.1 6.5-29.5 2.4-5.2 12-5.3 16.6-6.8 3 12.3 30.8 15.1 27-.9 5.7.9 15.9 2.9 17.5 5 2.8 3.9 5.3 19.9 7.5 29.7-3 2.2-6.6 3.4-10.3 3 .2 1.9.3 3.7.4 5.6Z" style="stroke-width:0;fill:#5daf5f"/><path d="M57 94.8c-2 5-11.8-5.2-10.3-8.4 3-5.9 9.4 6.2 7.7-4.4-4-14.3 24.7-15.5 28.5-25C91 43.2 96 76 97.6 83.3c2.1 10.6-8.5 19.3-10.3 21.4 3.1 12-12.7 14.9-18.7 4.7-2-5.3-4.5-9.1-11.5-14.7Zm32.7-18.4c1.7-.5-.8-6.9-2.4-6.1-1.6.5.8 6.9 2.4 6.1m-19.4 5.7c1.9-.6-.8-7.6-2.7-6.8-2 .6.8 7.6 2.7 6.8" class="cls-11"/><path d="M94.7 62.2c0 .3.3 4.4.6 7.8-3.4-8.3-6.1-23.1-12.4-12.9-4 6.5-15.9 9.8-26 15.3-5.9 4.3 1.1 18.8-5.4 12.9-1.5-1-4.1-.9-4.8 1C29.5 64 56.2 35.4 81.4 43c6.1 2.8 11.7 12.9 13.3 19.1Z" style="stroke-width:0;fill:#1e160d"/><path d="M90.3 108.3c3.8 16-24 13.2-27 .9l4.7-1.1c2.6 10.1 20.9 9.8 19.5-.2.7 0 1.6.2 2.8.4" class="cls-13"/><path d="M89.8 72.8c1.6 4-1 5-2.5 1-1.6-4 1-5 2.5-1m-19.3 5.3c1.8 4.4-1.3 5.6-3 1.2-1.8-4.4 1.3-5.6 3-1.2" style="stroke-width:0"/><path d="M56.9 149.1c-1 9.2-13.4 5.9-17.3 0l.6-3.6c4.3 4.3 11.1 5.9 16.7 3.6" class="cls-13"/><path d="M142.9 142.3c-4.3-1.5-9.5.2-13 3-2.5-1-6.3.7-7 3.3-.1-.7-.2-1.4-.7-2.1-4.7-2.3-11.2-.6-13.3 4.4-1.4.7-2.3.7-3.7.7.2 3.2.4 6.3.5 9.2 2.4 5.8 10.1 2.4 14 .2.7.9 1.7 1.6 2.9 1.6-1.7 5.5 7.4 5.2 5.2-.4 1-.3 1.9-1 2.3-1.9 2.1 1.7 5.9 1.8 6.2-1.5 1.2-.1 2.6.6 3.6-.3 1.6-2.4 4.1-8.8-1.5-6.4-2.3.5-4.8-1.1-3.3-3.4 1.8-2.7 6.5-3.6 7.6-6.4ZM58.3 174c-2.6-2.6-2.9 3.6-5.3 2.3.6-1.3 1.3-3.4 0-4.5-.5-1.1-.9-2.3-1.7-3.3 0-4.9 1.7-13.4 2.1-14.4-5.3 1.4-9.1.2-12.9-4.1-.3 2.8-3.4 12-1.9 14.7-6.9 2.3-13.1 11.2-.6 6.1 2.7 2.4-1 12.7 6.3 8.2 1 2.4 4.2 1.9 5.9.5 3.6 3.4 11-.9 8.1-5.6Z" class="cls-11"/><path d="M46.7 86.4c-17.2-22.3 9.5-50.9 34.7-43.3 6.1 2.8 11.7 12.9 13.3 19.1.2 21 10.1 25.9-7.4 42.7 3.1 12-12.7 14.9-18.7 4.7-2-5.3-4.6-9.1-11.6-14.8" class="cls-3"/><path d="M87.3 73.8c1.5 4 4.1 3 2.5-1-1.5-4-4.1-3-2.5 1m-19.8 5.4c1.7 4.4 4.7 3.2 3-1.2s-4.7-3.2-3 1.2" class="cls-1"/><path d="M76.7 90.1c4.2 1 8.5.3 12.3-1.8" class="cls-3"/><path d="M51.5 85.4c-3.2-2.2-6.5 1.4-4.2 4.5 1.5 2.3 8.6 10.1 9.8 4.2" class="cls-1"/><path d="M95.2 70c-3.4-8.3-6.1-23.1-12.4-12.9-4 6.5-15.9 9.8-26 15.3-5.9 4.3 1.1 18.8-5.4 12.9M68 108.1c-5.9 2.1-18.2 2-21.3 7.9-4 8.8-5.2 23.3-7.1 33.1 4.2 5.3 9.6 6.9 15.7 4.4 3.1-5.3 1.6-10.2 3-17.7m29.2-27.9c5.7.9 18.2 3 20.2 5.5 3.1 4.4 5.6 22.5 8.1 32.3m-6.2 18.1c3.4 1 7.3-1.5 10.2-2.8" class="cls-3"/><path d="M122.9 148.5c-.1-.7-.2-1.4-.7-2.1-7-3.6-14.4 2.2-14.9 9.5-.3 1.8-1 6.7 1.9 7.7m-58 4.9c0-4.9 1.7-13.4 2.1-14.4m-12.9-4c-.3 2.8-3.4 12-1.9 14.7" class="cls-3"/><path d="M109.6 163.8c-2.2-.7-3-1-3.8-3" class="cls-3"/><path d="M107.4 190.5c-15.3 6-33.4 6.2-49.1 1.5 2.9-9.3 1.9-35.2-1.2-44.8" class="cls-2"/><path d="M102.9 128.7c2.6 20.9 4 41.2 4.5 61.9" class="cls-2"/><path d="M69.2 68.5c-5.3-.1-7.1 2.7-7.9 4m20.1-6.8c3.6-3.5 7.5-1.2 8.3-.1m15.6 86c1.4 0 2.3 0 3.7-.7M81.4 83.3c1.2-3.3 6-5.9 7.6-1.2m33.9 68.5c-1-3.7 3.7-6.6 7-5.3 3.5-2.8 8.7-4.5 13-3-1 2.8-5.8 3.7-7.6 6.4-1.6 2.3 1 3.9 3.3 3.4m-8 3.3c1.5 2.4 3.2-1.9 4.9-1.2 3.3 3.8-.4 10.1-5.4 6" class="cls-3"/><path d="M122.9 149.1c-5.4 1.2-6 13.1 0 13.5m13.3-7.9c.8-1.9 4.3-4.4 5.9-2.2.3 2-1.2 4.2-2 6-1 .9-2.4.2-3.5.3" class="cls-3"/><path d="M124 159.2c-1.3 1.7-1.9 4.7-1 6.6 1.4 1.2 4.8 1.2 5.1-1.1.4-2.1-1.5-8-4.1-5.5Z" class="cls-3"/><path d="M128 162.3c1-.3 1.9-1.1 2.4-2.1m-77.5 16.1h.1m-.1-4.5c-1.1-4.3-4.3-5.3-8-6.3-6.9-5.8-23.7 12-7 5.3 2.6 2.2-.5 7.5 2.9 9.1 3.6.7 6.4-4.1 7.8-6.9.3-4.6-5.2-1.3-6.6.7" class="cls-3"/><path d="M44.2 178.9c2 4.2 7.5.5 8.8-2.6 2.4-4.1-1.5-6.9-4.4-3.1" class="cls-3"/><path d="M49.8 179.4c5.5 5.3 13.1-4.8 6.8-5.9-1.5.5-1.6 3.8-3.6 2.8m10.2-67.2c3 12.4 30.8 15.2 27-.9m-50.1 37.3c4.3 4.3 11.1 5.9 16.8 3.7m48-3.2c3.7.4 7.3-.8 10.3-3" class="cls-3"/><path d="M120.7 34.1h24v24h-24z" style="fill:#b52d00;stroke-width:0" transform="rotate(-41.9 132.537 46.102)"/><path d="M120.7 101.7h24v24h-24z" style="stroke-width:0;fill:#0047fd" transform="rotate(-26.2 132.798 113.575)"/><path d="M59.7 2.3h24v24h-24z" style="stroke-width:0;fill:#00a553" transform="rotate(-6.6 71.374 14.556)"/><path d="m23.9 48.3 4.5 23.6-23.6 4.5L.4 52.8z" style="stroke-width:0;fill:#5b2ac2"/><path d="M58.377 3.727 82.222 1.01l2.717 23.846-23.846 2.717zM116.7 108.061l21.534-10.596L148.831 119l-21.535 10.597zM28.4 71.9 4.8 76.4.4 52.8l23.5-4.5zm87.408-26.73 17.891-15.997 15.997 17.892-17.892 15.997z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M43.1 148.3h20.8v20.8H43.1z" style="stroke-miterlimit:10;stroke:#fff;fill:#b52d00" transform="rotate(-79.7 53.407 158.614)"/></svg>')}`;
export default image;