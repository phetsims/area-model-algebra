/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1,.cls-3{stroke:#000;fill:none}.cls-1{stroke-linejoin:round;stroke-linecap:round}.cls-3{stroke-miterlimit:10}.cls-5,.cls-6,.cls-9{stroke-width:0}.cls-6{fill:#302826}.cls-9{fill:#dbc1b4}</style></defs><path d="M112 163.1c-.8-1.2-.3-2.9 0-4.2z" style="stroke-width:0;fill:#383838"/><path d="M47.3 95.5c-5.6 2.7-14.2-15.2-4.2-11.2.6.7 1.7.1 1.8-.8 0-.9-.6-1.7-1.2-2.3-3.4-2.1-.8-4.8.1-7.6 0-2.6-1.3-5.3 1.3-7.2 1.2-1.3 1.2-5.2 2.5-6 .2-1 17.3-2.6 23.2.6-1.1.4-.9 1.8.2 2.3 1 .4 2-.4 2.7-1 5.1 2.5 8.8 5.7 10.1 8.1.6 7.1 3.7 3.6 3.3 14.2-.4 12.5-4.6 13.8-8.9 17-.4.6-2 6.8-1.9 8.5-.4 2.1-5.7 6.3-9 6.7-3.2.3-9.8-2.6-10.3-5.3-.8-6.1-3.1-12.6-9.7-16M78.5 73c1.6-.5-.8-6.8-2.4-6.1-1.6.5.8 6.8 2.4 6.1m-6.7 18.5c6.4-1.1 6.6-5.6 6.4-5.9s-9.7 3.8-13.8 2.5c1.9 2.2 4.7 3.8 7.5 3.3ZM59.4 79c1.9-.6-.8-7.6-2.6-6.7-1.9.6.8 7.5 2.6 6.7m-2.2-11.5c.7-.4.9-1.6.2-1.9-2.8-1.8-10.5 2.9-6.6 4.3 1.9-1.5 4.1-2 6.3-2.4Z" class="cls-9"/><path d="M73.8 119.7c10.1 24.5 6.7 47.3 10.5 74.8-11.1 1.8-13.6 1.9-22.5.7.2-24.3-5.7-48.8 0-73.1h-.1q.3-.75.6-1.2c-3-2.8-4.6-5.4-5.3-9.5.4 2.7 7.1 5.6 10.3 5.3 3.4-.3 8.6-4.6 9-6.7-.3 3.5.9 6.7-2.1 9.2l-.4.3Z" style="stroke-width:0;fill:#f0efed"/><path d="M78.5 69.5c1.6 3.9-1 4.9-2.5 1-1.6-3.9 1-4.9 2.5-1" class="cls-5"/><path d="M78.1 85.7c1 4.5-9.4 9-13.8 2.5 4.1 1.3 13.6-2.8 13.8-2.5" style="stroke-width:0;fill:#fff"/><path d="M76.3 109.9v.3z" style="stroke-width:0;fill:#e0c6af"/><path d="M73.7 62.4c-.7.6-1.7 1.4-2.7 1-1.1-.5-1.3-1.9-.2-2.3 1 .4 2 .8 2.9 1.3" class="cls-6"/><path d="M99.9 146.8c1.1-1.1 2.6-1.8 4.3-2-2.2-9.2-4.9-24.7-7.9-29-1.8-2.5-11.8-4.8-15.7-5.3-.8-1.6-1.8-3.7-3.6-4.5-1.7 4.7 1.1 9.9-2.7 13.4l-.4.3c10.1 24.5 6.7 47.3 10.5 74.8 5-.8 10-1.7 11.9-2.5.2-13.3-1.8-25.1-2.2-38.7.7 0 1.5 0 2.2-.1.6-2.2 1.7-4.4 3.6-6.4M57 111.5c-.3-1.7-.6-3.6-1.2-5.6-2 1.3-3.4 3.4-4 5.7-11.4 3-16.1 1.7-19.6 15.2-1.1 7.7-2.2 15.3-3.3 23-.4 2.6-.9 3.5 1.7 4.6 12.3 3.6 13.9 4.3 15.1-8.9 3.3 10.7 4.6 36.5 1.7 46.6 4.6 1.4 9.5 2.5 14.4 3.2.2-24.3-5.7-48.8 0-73.1h-.1q.3-.75.6-1.2c-3-2.8-4.6-5.4-5.3-9.5" style="stroke-width:0;fill:#94535f"/><path d="M59.5 75.1c1.7 4.3-1.2 5.5-2.9 1.2s1.2-5.5 2.9-1.2" class="cls-5"/><path d="M57.4 65.6c1.4 1.5-1.1 2.5-2.4 2.3-1.6 0-2.8 1.3-4.1 2-3.9-1.4 3.8-6.2 6.6-4.3Z" class="cls-6"/><path d="M86.7 63.2c-2.6-3.7-2.2-9.8-5.5-13.6-2.7-3.6-7.1-4.6-11-6-5.3-4.4-6.7-2.8-12.4-.4-2.6.6-5.1-2.7-7.4-1.3-1.6.9-2.4 3-4.2 3.6-4.1-.2-8.3.8-10.6 4.6-3 8.2-10.6 11.3-7.6 21 .7 3.2-.6 9 2.5 12.4 4 6.2 2 6 9 9.8 1.4 2.1 7.2 5 9.4 3.3-.5-.3-1-.7-1.6-.9-5.6 2.7-14.2-15.2-4.2-11.2.6.7 1.7.1 1.8-.8 0-.9-.6-1.7-1.2-2.3-3.4-2.1-.8-4.8.1-7.6 0-2.6-1.3-5.3 1.3-7.2 1.2-1.3 1.2-5.2 2.5-6 7.4-3.5 32.3-.8 36.7 11.3.2 1.8 3.1 8.2 4.8 4.5 1.3-2.7-.6-10.6-2.3-13.1Z" style="stroke-width:0;fill:#5a4842"/><path d="M131.7 139.8c-4.3-1.5-9.5.2-12.9 3-2.7-1.1-7 1-7 4h-.7c0-.4-.2-.8-.5-1.2-6.1-3.2-13.3 1.2-14.4 7.5-.7 0-1.5 0-2.2.1.6 3.9-1 8.5 4 9.5 3.6 1.3 11.8 1.5 13.9.3 0 0 0-1.1 0 0 2.7 2 6.3.2 4.9-3.5 1-.3 1.8-1 2.3-1.9 2.1 1.7 5.8 1.8 6.2-1.5 1.2-.1 2.6.6 3.5-.3 1.5-2.4 4-8.7-1.5-6.3-2.3.5-4.8-1.1-3.2-3.4 1.8-2.6 6.5-3.5 7.5-6.4Zm-83.9 31.4c-2.6-2.6-2.9 3.6-5.3 2.3.6-1.3 1.3-3.4 0-4.5-.5-1.2-1-2.5-1.9-3.5.4-3.1 1-6.1 1.4-9.2-3.6.2-7.7-.4-11.1-1.9 0 2.5-.2 4.9-.6 7.3-6.9.4-16.5 12.1-2.6 6.4 2.6 2.4-1 12.5 6.2 8.1 1 2.3 4.2 1.9 5.8.5 3.6 3.4 10.9-.9 8.1-5.5" class="cls-9"/><path d="M48.8 96.4c-.4-.3-.9-.6-1.4-.8m29.5 10.3q-.6 2.4-.6 4.2c-.4 2.1-5.7 6.3-9 6.7-3.2.3-9.8-2.6-10.3-5.3-.9-5.8-2.3-11-8.2-15.1" class="cls-3"/><path d="M83.7 70.5c.6 7.1 3.7 3.6 3.3 14.2-.4 12.5-4.6 13.8-8.9 17 0 0-.7 2-1.3 4.2" class="cls-3"/><path d="M76 70.5c1.5 4 4 3 2.5-1s-4-3-2.5 1m-19.4 5.8c1.7 4.4 4.7 3.2 2.9-1.2-1.7-4.4-4.7-3.2-2.9 1.2" class="cls-1"/><path d="M64.2 88.3c4.5 6.5 14.9 1.9 13.8-2.5-.2-.3-9.7 3.8-13.8 2.5Z" class="cls-3"/><path d="M43.1 84.3c-7.8-3.2-4 6.9-.7 9.5 1.5 2.6 6.9 2.9 5.7-1.1M71.4 83c1.1-2.5 5.1-6.7 5.6-1.3" class="cls-1"/><path d="M52 111.5c-.2 0-11.8 3-12 3.1-10.8 6.3-8.3 24.3-11.1 35.2-2.1 6.5 8.9 6.5 13 6.6 4.5-.7 3.8-16.8 5.2-21.1m33.4-24.9c3.9.6 13.9 2.8 15.7 5.3 3 4.2 5.5 19.6 7.9 28.7m-6 18.4c3.5 1.2 11.7 1.5 13.8.3" class="cls-3"/><path d="M111.1 146.8c0-.4-.2-.8-.5-1.2-12.1-6.1-19.3 13.3-12.6 17.1" class="cls-3"/><path d="M98.1 162.8c-2.4-.8-2.9-1-3.8-3" class="cls-3"/><path d="M96.3 192.1c-15.5 4.6-33.8 5.2-48.8 0 2.9-10.1 1.6-36-1.8-46.6M91.5 128c2.7 22.2 4 42.4 4.8 64" style="stroke-linecap:round;stroke:#000;fill:none;stroke-miterlimit:10"/><path d="M57.4 65.6c-2.8-1.8-10.5 2.9-6.6 4.3 1.3-.7 2.5-1.9 4.1-2 1.3.2 3.9-.9 2.4-2.3Zm13.3-4.5c-1.1.4-.9 1.8.2 2.3 1.1.4 2.1-.5 2.8-1.1m38.2 85.7c-1-3.6 3.7-6.5 6.9-5.3 3.4-2.8 8.7-4.4 12.9-3-1 2.8-5.8 3.7-7.5 6.4-1.6 2.3 1 3.9 3.2 3.4m-8 3.3c1.4 2.4 3.1-1.8 4.9-1.2 3.3 3.8-.4 10-5.3 6" class="cls-3"/><path d="M125 152.1c.5-1.1 1.4-2 2.4-2.5 5.5-2.4 3 3.9 1.5 6.3-.9.9-2.4.2-3.5.3m-8.5 3.4c-2-7.9-6.9-.7-4.9 3.5 2.7 2 6.3.2 4.9-3.5Z" class="cls-3"/><path d="M116.9 159.6c1-.3 1.9-1.1 2.4-2.1m-76.8 11.6c-1-4.3-4.2-5.2-7.9-6.2-6.9-5.8-23.5 11.9-6.9 5.3 2.5 2.1-.5 7.5 2.9 9 3.6.7 6.4-4 7.7-6.8.3-4.5-5.2-1.3-6.5.7" class="cls-3"/><path d="M33.8 176.1c2 4.2 7.5.5 8.7-2.6 2.3-4-1.5-6.8-4.4-3" class="cls-3"/><path d="M39.5 176.5c5.4 5.2 13-4.7 6.7-5.8-1.5.5-1.6 3.8-3.6 2.8m4.9-113c7.3-3.5 32.4-.8 36.7 11.3.2 1.8 3.1 8.2 4.8 4.5 1.3-2.7-.6-10.6-2.3-13.1-2.6-3.7-2.2-9.8-5.5-13.6-2.7-3.6-7.1-4.6-11-6-5.3-4.4-6.8-2.8-12.4-.4-2.6.6-5.1-2.7-7.4-1.3-1.6.9-2.4 3-4.2 3.6-10.3-.6-9.7 5.3-14.4 11.8-4.6 3.9-4.9 8.8-3.7 13.8.2 9.4 1.3 11.2 6.9 19.6 1.4 1.4 3.6 1.1 4.6 2.6 1.4 2.1 7.2 5 9.4 3.3" class="cls-3"/><path d="M43.1 84.3c.6.7 1.7.1 1.8-.8.1-1.9-2.4-2.7-2.9-4.3-.6-1.9 1.5-3.6 1.8-5.5.3-1.8-.9-3.8 0-5.5 2.3-1.7 2.4-5.9 3.8-7.7m10.2 37.4c3.8 1.4 7.9 2.7 11.9 1.8m-14 6.2c-8.1 5.4-3 19.2 3.4 23.7.6-1.9 1.8-6.4 3.1-8.6-3-2.8-4.6-5.4-5.3-9.5m19.4-1.6c-.4 3.6.9 7-2.1 9.5 2.1 2.6 4.3 5.2 6.4 7.8 1.4-6.7 2.5-16.1-3.3-21.1" class="cls-3"/><path d="M61.8 122.1c-5.7 24.4.4 49 0 73.4m12-75.8c10.1 24.6 6.7 47.7 10.6 75.4m9.2-41.8c.9 0 1.8-.1 2.7-.2m-65.4 1.2c0 2.5-.2 5.1-.6 7.6m11.7-5.5c-.5 3-.9 6.1-1.4 9.1m6.9-105c-2.5.9-3.7-2.9-5.7-3.7-3.9-1-8 .8-7-5.4m76.6 95.3c-7.7 2.5-7.4 14.2.4 16.3" class="cls-3"/><path d="M106.4 103.5h20.8v20.8h-20.8z" style="stroke-width:0;fill:#00a553" transform="rotate(-26.2 116.643 113.892)"/><path d="M106.4 103.5h20.8v20.8h-20.8z" style="fill:none;stroke-miterlimit:10;stroke:#fff" transform="rotate(-26.2 116.643 113.892)"/></svg>')}`;
export default image;