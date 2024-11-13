/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1,.cls-3{stroke:#000;fill:none}.cls-1{stroke-linejoin:round;stroke-linecap:round}.cls-3{stroke-miterlimit:10}.cls-11,.cls-12,.cls-16,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-7{fill:#faac8e}.cls-8{fill:#fd0243}.cls-11{fill:#07bab5}.cls-12{fill:#cbaa99}.cls-16{fill:#e3c357}</style></defs><path d="M112.9 145.5v.4c-1 .2-1.9.4-2.7.9l-1.5-1.1q2.1-1.35 3.6-3c.2 1 .4 1.9.7 2.9Z" class="cls-11"/><path d="M110.4 133.6c.6 3 1.2 6.2 1.8 9.1-2.5 2.8-6.6 4.9-10 5.9-.2-2.4-.4-4.9-.6-7.3 4-.9 7.5-3.9 8.9-7.7Z" class="cls-8"/><path d="m108.6 145.7 1.5 1.1c-2.5 1.4-4.2 4.4-5 6.8-4.3 2.4 1.5 3-2.4 3.1-.1-2.6-.3-5.2-.5-8 2.1-.6 4.4-1.6 6.4-2.9Z" class="cls-11"/><path d="M108.1 123.7c.8 2.8 1.5 6.3 2.2 9.9-1.4 3.8-4.9 6.9-8.9 7.7-.3-2.9-.6-5.9-1-8.8 3.7-1.5 6.6-4.9 7.6-8.8Z" class="cls-16"/><path d="M100.2 130.3c-.3-2.4-.5-4.3-1.3-7.3 2.3-1.4 3.7-4.1 3.7-6.8 3.6 2.1 4.2 3.6 5.5 7.5-.9 3.9-3.8 7.3-7.6 8.8-.1-.7-.2-1.5-.3-2.2" class="cls-7"/><path d="M104.3 178.7c.3 2.8.4 5 .3 10.3-15.5 6.1-33.8 6.3-49.7 1.5 1-1.8 1.4-5.2 1.5-8.7 14.1 3.7 41.3.8 47.9-3.1" class="cls-8"/><path d="M104.3 178.7c-6.6 3.9-33.8 6.8-47.9 3.1.1-3.1 0-6.8-.1-9.7 15.7 3 40.4-.1 47-4.5.3 3.8.8 8.9 1 11Z" class="cls-11"/><path d="M102.9 161.3c.1 2.3.3 4.4.4 6.4-6.6 4.4-31.3 7.5-47 4.5-.2-2.4-.2-5.3-.5-9.6 15.4.5 36.3-.1 46.8-5.9 0 1.6.2 3.1.3 4.6" class="cls-8"/><path d="M102.7 116.2c0 2.7-1.5 5.4-3.7 6.8-.8-3.2-2.4-9.4-4.9-10.6 2.6.8 6.1 2.3 8.6 3.8" class="cls-11"/><path d="M102.1 148.6c.2 2.8.4 5.5.5 8-10.5 5.7-31.4 6.4-46.8 5.9-.2-4.9-.7-10.3-1.5-13.3 14.7 1.9 32 0 47.5-4.9.1 1.4.2 2.9.3 4.3" class="cls-16"/><path d="M100.5 132.5c.5 4 1 7.9 1.3 11.9-15.5 4.8-32.8 6.8-47.5 4.9-.2-.7-.4-1.3-.7-1.6.3-3.8.7-8.3 1.1-12.3 14.6.5 39.8-2.1 45.4-5 .1.7.2 1.5.3 2.2Z" class="cls-7"/><path d="M98.9 123c.7 3 .9 4.9 1.3 7.3-5.7 2.8-30.8 5.5-45.4 5 .5-5.2 1-11.2-2.6-15.3 4.9 1 7.7 1.3 13.7 1 8.4 7.7 7 4.1 12.5-4.1 0 0 7 9.6 8.6 7.1.5-.8 1.1-2.3 1.7-4q5.8-.8 8.6-2.6c.7 1.8 1.2 3.8 1.7 5.7Z" class="cls-11"/><path d="M96.1 83.3c1.6 14.7-9.3 15.5-11.5 23.2-1.3 3.6-.4 8-6.4 9.8-3.8.7-11.9-1-13.6-6-2-5.5-3.4-6.8-10.4-12.5h-1.1c2.1-.6 1.8-3 .9-4.6-3-9.8-8.2-33 2.2-39.2 5.6 6.2 16.2 10 24.4 11.2 11 .5 12.7 6.2 15.6 18.1ZM87 85.5l.3-.4c-3.5 1.4-17 2.7-16.3 3.3 4.6 4.9 14.9 4.7 16-3ZM86.6 74c1.7-.6-.8-7-2.4-6.2-1.7.5.8 6.9 2.4 6.2m-19.7 5.7c2-.7-.8-7.7-2.7-6.9-2 .7.8 7.7 2.7 6.9" class="cls-12"/><path d="M94 112.3c1.1.5 2.2 2.4 3.2 5q-2.8 1.9-8.6 2.6c1.1-3 2.3-6.7 4-7.9.4 0 .9.2 1.4.3" class="cls-8"/><path d="M92.6 112c-6.6 8-2.9 20.1-14.2 4.9l-.1-.6c6-1.8 5.1-6.2 6.4-9.8 2.6.7 7.3 2.7 8.9 5-.3 0-.7.2-1 .5" class="cls-8"/><path d="M87.3 85.1C85.8 92.8 76 93.7 71 88.4c-.7-.6 12.7-1.9 16.3-3.3" style="stroke-width:0;fill:#fff"/><path d="M86.6 70.4c1.6 4-1 5-2.5 1-1.6-4 1-5 2.5-1" class="cls-6"/><path d="M78.3 116.3v.6c-2.9 3.1-3.7 9.9-7.1 8.1-3.4-1.9-10.3-9.6-14.1-8.7-.2-4 3.4-6.9 6.4-8.6 1.1 6.5 9.5 9.7 14.7 8.6Z" class="cls-8"/><path d="M67.1 75.7c1.8 4.4-1.3 5.6-3 1.2-1.8-4.4 1.3-5.6 3-1.2" class="cls-6"/><path d="M65.9 120.9c-6.1.3-8.8 0-13.7-1-1-1.1-2.5-2-4.6-2.6l10.2-4.2c-.5 1-.7 2-.7 3.2 2.3-.5 5.7 2.1 8.8 4.7Z" class="cls-8"/><path d="M54.3 123.9c.7 2.1.8 4.4.8 6.8-5.2 0-11.2-3.8-13.2-8.7 3.3-7.2 11-4.5 12.5 1.9Z" class="cls-11"/><path d="M54.8 135.3c-.1 1.4-.3 2.8-.5 4.1-4.3 1.8-10.8-1-15.5-8.7.4-3 1.2-5.8 3-8.7 2 4.9 8 8.6 13.2 8.7 0 1.5-.2 3-.3 4.5Z" class="cls-7"/><path d="M96.4 56.7c-8.1-12-13.9-18.2-32.8-16.6-3.6.7-11.5 1.3-11.3 6.1-16.7 6-19.1 25.2-14.2 40.2-.3 5.5 19.4 18.8 15.9 6.8-3-9.8-8.2-33 2.2-39.2 19.2 19.4 36.5-.9 40.9 33.4 5.3-8.4 3.1-22.2-.6-30.8Z" style="stroke-width:0;fill:#1a2636"/><path d="M54.3 139.4c-.3 2.9-.5 5.6-.7 8.2-2.2 2.2-15.5-2-16.5-7.5l1.7-9.3c4.7 7.7 11.2 10.5 15.5 8.7Z" class="cls-16"/><path d="M53.6 147.5c-.2 3-.5 5.8-.8 7.9-5.7.2-12.7-2.8-17.4-6.4l1.7-9c1 5.5 14.3 9.6 16.5 7.5" class="cls-8"/><path d="M48.4 160.2c-4.9 0-8.7-1-12.9-3.9-.4-.4-.8-.8-1.3-1.2l1.1-6c4.7 3.7 11.7 6.6 17.4 6.4-.5 3.6-1.3 4.7-4.4 4.8Z" class="cls-11"/><path d="M140.4 142.5c-4.3-1.5-9.7.2-13.2 3-2.5-1-6.4.7-7.1 3.3-.1-.8-.2-1.4-.7-2.1-5.8-3-13 .6-14.4 6.8-4.3 2.4 1.5 3-2.4 3.1-1.1 10.4 8.2 8.6 14.4 4.9.7.9 1.8 1.6 2.9 1.7-1.8 5.6 7.4 5.3 5.3-.4 1-.3 1.9-1 2.4-1.9 2.1 1.7 5.9 1.8 6.3-1.5 1.2-.1 2.6.6 3.6-.3 1.6-2.5 4.1-8.9-1.5-6.5-2.3.5-4.9-1.1-3.3-3.5 1.8-2.7 6.6-3.6 7.7-6.5Zm-85.7 32.2c-2.7-2.7-2.9 3.6-5.4 2.3.6-1.4 1.3-3.4 0-4.6-.5-1.1-1-2.3-1.7-3.3 0-3.7.4-7.1.8-8.8-4.9 0-8.7-1-12.9-3.9-.4 2.5-2.1 6.6-.7 9-7 2.3-13.3 11.4-.6 6.2 2.7 2.4-1 12.8 6.4 8.3 1 2.4 4.2 2 6 .5 3.7 3.4 11.1-.9 8.2-5.7Z" class="cls-12"/><path d="M93.6 74.1c5.8 14.8 1.5 21.1-7.1 28.7 0 0-1 1.7-1.8 3.7-1.3 3.6-.4 8-6.4 9.8-3.8.7-11.9-1-13.6-6-2-5.5-3.4-6.8-10.4-12.5" class="cls-3"/><path d="M84.1 71.4c1.5 4 4.1 3 2.5-1s-4.1-3-2.5 1m-20 5.5c1.7 4.5 4.8 3.3 3-1.2-1.7-4.5-4.8-3.2-3 1.2m12.5 5.3c1.5-3 6.9-7.9 8.9-2.5" class="cls-1"/><path d="M35.5 156.3c22.1 12.3 16.6-4.7 19.2-20.3" class="cls-3"/><path d="M57.8 113.1c-9.9 4-17.5 5-19 17.6-1.3 7.2-3.2 17.2-4.5 24.4.4.5.9.9 1.3 1.2m56.5-44.4c19.2 3 16.8 18.6 20.7 33.6m-6.1 18.8c3.5 1 7.4-1.6 10.3-2.8m-10.7 2.7c.1 0 .3.1.4.1" class="cls-3"/><path d="M120.2 148.9c-.1-.8-.2-1.4-.7-2.1-7.1-3.7-14.7 2.3-15.1 9.7-.3 1.9-1 6.7 1.9 7.7m-58.7 4.9c.1-4.5.3-7.3 1.1-10m-13.2-2.8c-.4 2.5-2.1 6.6-.7 9" class="cls-3"/><path d="M106.7 164.3c-2.2-.7-3.1-1-3.8-3.1" class="cls-3"/><path d="M104.6 189c-15.5 6.1-33.8 6.3-49.7 1.5 3-9.1 1.6-33.7-1.3-43m46.4-18.7c2.6 20.5 3.8 39.6 4.6 60.2" style="stroke-linecap:round;stroke:#000;fill:none;stroke-miterlimit:10"/><path d="M65.8 64.8c-5.3-.1-7.2 2.2-7.9 3.5" class="cls-3"/><path d="M87.3 85.1c-3.5 1.4-17 2.7-16.3 3.3 4.6 4.9 14.9 4.7 16-3" class="cls-1"/><path d="M102.6 156.6c4 0-1.9-.7 2.4-3.1" class="cls-3"/><path d="M63.6 107.7c-3 1.7-6.7 4.6-6.4 8.6 3.8-.8 10.7 6.9 14.1 8.7s4.2-5.1 7.2-8.1c12.5 16.8 7.2 0 15.2-5.3-1.6-2.3-6.3-4.3-8.9-5" class="cls-1"/><path d="M47.6 117.3c8.5 2.3 7.8 11.7 7.1 18.8m45.3-7.3c-.7-4.5-2.2-13.8-5.9-16.4" class="cls-3"/><path d="M88.6 119.9q5.8-.8 8.6-2.6m-45 2.6c4.9 1 7.7 1.3 13.7 1m-11.5 14.3c15 .5 40.1-2 46.2-5.2m-46.3 19.2c14.7 1.9 32 0 47.5-4.9m-46 18.2c15.4.5 36.3-.1 46.8-5.9m-46.3 15.5c15.7 3 40.4-.1 47-4.5m-47.1 14.1c14.1 3.8 41.4.9 48-3M58.6 96.5c5.6 4.8 4.2 4.7 12.1 4.5M131 55.5c0 .1.1.3.2.4m-11 95c-1-3.7 3.8-6.7 7-5.4 3.5-2.8 8.8-4.5 13.2-3-1 2.9-5.9 3.8-7.7 6.5-1.6 2.4 1 4 3.3 3.4m-8.1 3.4c1.5 2.4 3.2-1.9 5-1.2 3.3 3.9-.3 10.3-5.5 6.1" class="cls-3"/><path d="M120.1 149.5c-5.5 1.2-6.1 13.3 0 13.7m13.5-8.1c.5-1.1 1.4-2 2.5-2.6 5.6-2.5 3.1 4 1.5 6.5-1 .9-2.4.2-3.6.3" class="cls-3"/><path d="M121.3 159.7c-1.3 1.7-1.9 4.7-1 6.7 1.4 1.2 4.9 1.2 5.2-1.1.4-2.1-1.6-8.1-4.2-5.6Z" class="cls-3"/><path d="M125.3 162.8c1.1-.3 1.9-1.1 2.4-2.1m-78.4 11.7c-1.1-4.4-4.3-5.3-8.1-6.3-7-5.9-24 12.1-7 5.4 2.6 2.2-.5 7.6 3 9.2 3.7.7 6.5-4.1 7.9-7 .3-4.6-5.3-1.3-6.7.7" class="cls-3"/><path d="M40.5 179.6c2 4.3 7.6.5 8.9-2.6 2.4-4.1-1.5-7-4.5-3.1" class="cls-3"/><path d="M46.2 180.1c5.6 5.4 13.2-4.9 6.8-5.9-1.5.5-1.6 3.9-3.7 2.9M56.1 54c19.2 19.4 36.5-.9 40.9 33.4 7.5-13.9 1.4-34.5-11.5-43.1-4.2-2.7-10.2-5.7-21.9-4.3-10 1-15.3 4.7-7.4 13.9Z" class="cls-3"/><path d="M52.2 46.2c-16.7 6-19.1 25.2-14.2 40.2-.3 5.5 19.4 18.8 15.9 6.8-3-9-8.5-35.4 3.1-39.4M41.8 122c2 4.8 7.9 8.5 13 8.7m-16 0c4.7 7.7 11.2 10.5 15.5 8.7m-17.2.7c1 5.5 14.3 9.6 16.5 7.5m-19.3.5c4.9 4.2 12.3 7.6 18.6 7.4m49.7-39.9c.2 3-1.4 6-3.9 7.5m9.4.6c-.9 4-3.9 7.4-7.7 8.8m10.2.5c-1.3 4.2-5.1 7.6-9.4 8.4m11.5.6c-2.5 3.3-6.9 5.5-10.8 6.6" class="cls-3"/><path d="M117 103.9h20.8v20.8H117z" style="stroke-width:0;fill:#00a553" transform="rotate(-26.2 127.191 114.308)"/><path d="M95.8 13.9h20.7v20.7H95.8z" style="stroke-width:0;fill:#b52d00" transform="rotate(-31 106.1 24.182)"/><path d="m37.3 38.3-11 17.6-17.6-11 11-17.6z" style="stroke-width:0;fill:#5b2ac2"/><path d="m91.976 20.674 17.743-10.661 10.661 17.743-17.743 10.661zm21.476 88.795 18.663-9.183 9.183 18.663-18.663 9.183zM37.3 38.3l-11 17.6-17.6-11 11-17.6z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M41.1 148.3h20.8v20.8H41.1z" style="stroke-miterlimit:10;fill:#0047fd;stroke:#fff" transform="rotate(-79.7 51.419 158.682)"/></svg>')}`;
export default image;