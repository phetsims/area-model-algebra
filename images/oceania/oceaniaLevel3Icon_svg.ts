/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3{stroke:#000;fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-13,.cls-6,.cls-8,.cls-9{stroke-width:0}.cls-8{fill:#d90203}.cls-9{fill:#bf9465}.cls-13{fill:#e6c1ae}</style></defs><path d="M88.9 139.9c0 7.2-2.7 15.9-.7 24.6-1.6-.1-5.2-.6-6.9.7 1.9.6 5.3 3.9 4.5 3.5-2.2 1.3-3.2 4.9-2.4 7.5 1.2-1.2 2.7-2 4.3-2.2 1.1 2.5 1.5 3.2 3.7 4.4 1.1 4.4 2.2 8.5 2.8 12-12.6 4.9-27.6 5-41.4 2.4 4.2-2.8 8.7-4.9 13.5-6.4-4.9-.9-10 0-14.2 2.7 1.5-5.6 9.5-7.3 13.7-10.8-3.9-.4-8 .6-11.2 2.9 1.3-5 3.7-9.7 7.1-13.5-5.2 2.5-9.2 7.3-10.9 12.8-.2-2.4-2.8-5.4-4.9-6.5.4-5.7.6-10.1.4-12.7h.5c1.5 1.6 3.5 2.8 5.8 3.1-.9-1.9-1.4-4-1.5-6.1 3.6-.8 6.8-1.7 7.7-5.4-1.6.7-3.3-1.3-5-1.5 2.1-3.6 1.2-5.7-1.2-8.4 1.2 1.3-3.6 4.9-3.6 4.9-1.2-1.2-4-4.1-6.1-4.8.1-.4.2-.8.4-1.2-.8-.1-3-1-5.6-2.1 2.1-1.4 3.6-3.4 4.6-5.4-.5.2-1.1.3-1.7.5 1.9-2.4 4-5.4 3.4-8.6l-1.4.4c.6-1 .8-2.2.5-3.3-1.9.7-3.5 1.9-4.7 3.5l-.3-.9c-2.6 1.4-4.6 3.8-5.7 6.5-.1-.3-.3-.6-.4-1-1.1 1.3-1.8 3.3-1.7 5l-1.6-.8c4.7-8.9 6.3-20.1 17.9-24.5 2.4 1.3 4.8 9 5.6 11.8 2.5 7.7 20.2 3.9 26.1 2.4.3 1.1.6 2.3.9 3.4-2.8 1.8-6.9 4.1-7.8 4.6-1.4.8-17-3.2-22.3-4.7l3.2 8c2.9 2.2 19 5.9 21.2 5.1.6-.2 5.1-3.6 6.7-4.8.6 2-2.1 8.4 2.1 8 3.3-9.8 2.9-23.1-2.2-34.2h.2c6.4.7 8.1 5.1 10.8 10.1-1.3.4-3.3 1.8-3.4 3.1 1.3 0 2.6.3 3.6.9-.6 2.2-.6 4.4.2 6.4.8-1.2 1.8-2.4 2.9-3.2.9 2 1.9 4.1 3.1 6.1-1.9 2-5.2 4.9-8.5 5.6Zm1.2 47.9c-2.1-1-1.8-5.2-4.4-5.1.8-2.3-2-4.6-4.1-3.7 1.7-3.9-4.8-6.1-5.5-1.8-3.3-3-6.4 3-2.3 4.2-1.6.5-2.1 3.7-1 5 1.6 1.9 4.7-.4 4.7-.4-.1.4 2.6 4.9 4.7 2.1 3.5 3.9 4.5-2.4 7.9-.4Zm-7.3-29.6c2.6-3.6 1.9-9.4-1.5-12.1.4 3.1-1.8 7.9-4.2 10.2 2-3.3 2.8-7.3 2.1-11-5.5.2-9.4 5.9-11.2 10.6.8-.3 1.5-.6 2.3-1-2.3 3.7-4.9 8.2-3.5 12.7.6-.3 1.3-.5 1.9-.8-.7 1.5-.8 3.2-.2 4.7 2.5-1.3 4.6-3.2 6.1-5.7.2.4.4.8.6 1.3 3.4-2.4 5.9-6 7-10.1.2.4.5.9.7 1.3Z" class="cls-8"/><path d="M94.3 128.2c-1.2.9-2.1 2-2.9 3.2-.8-1.9-.8-4.2-.2-6.4l1.4-.6c.5 1.2 1.1 2.5 1.7 3.8" class="cls-13"/><path d="m92.7 124.5-1.4.6c-1-.8-2.6-.8-3.7-1 .7-1.4 2.1-2.6 3.5-3 .5 1.1 1 2.3 1.6 3.4m-1.3 53.8c-2.2-1.2-2.6-1.8-3.7-4.4-1.6.2-3.1 1-4.3 2.2-.8-2.6.2-6.2 2.4-7.5.8.4-2.5-2.9-4.5-3.5 1.8-1.2 5.3-.8 6.9-.7.8 4.4 2 9.2 3.1 13.8Zm-2.8 7.6c.3.8.8 1.5 1.5 1.9-3.4-2-4.5 4.3-7.9.4.8-1.1 1.1-2.8.4-3.4 1.4.2 2.7-.8 3.1-2.1 1.7-.2 2.3 2 2.9 3.2" class="cls-13"/><path d="M82.2 188.2c-2 2.8-4.8-1.7-4.7-2.1-4 3.3-7.7-1.4-3.7-4.6-4.2-1.2-1-7.2 2.3-4.2.7-4.4 7.2-2.1 5.5 1.8 4.5-1.7 6 6 1 5.8.7.6.5 2.4-.4 3.4Zm2.1-36.9c.5 2.4 0 4.9-1.4 6.9-.2-.4-.5-.9-.7-1.3-1 4-3.5 7.7-7 10.1-.2-.4-.4-.8-.6-1.3-1.4 2.4-3.6 4.4-6.1 5.7-.5-1.5-.4-3.2.2-4.7-.6.3-1.3.5-1.9.8-1.3-4.5 1.2-9 3.5-12.7-.8.3-1.5.6-2.3 1 1.8-4.6 5.7-10.3 11.2-10.6.6 3.8-.1 7.8-2.1 11 2.5-2.3 4.6-7.1 4.2-10.2 1.5 1.1 2.5 3.2 2.9 5.2Z" class="cls-13"/><path d="M80.2 137.1c-.6-10.1-3-19.5-9.9-26.8 0-1.8.7-6.9.7-6.9 1.4-.4 2.7-1.2 3.9-2.2 7.4 9.8 10.9 27.1 8.8 38.3 0 .9-.5 5.4-1.5 5.7s-2.5-.6-2.4-1.6c.2-2.4.3-4.5.3-6.4Zm2-75.1c2.4 6.8.5 22.3-.1 19.5-1.5-9.3-2.6-8.1-2.6-14C75 55.4 52.3 52.8 49.3 54.1c-4.1 5.7-.3 23.4-9.4 31.7-4.4-2.3-5.7 2.9-4.1 5.4-9.5-4.5-15-30.1-3.4-39.5C48 33.6 76.4 41 82.2 62.1Z" style="stroke-width:0;fill:#4d300b"/><path d="M45.8 96c-2.8 3.5-9-1.8-10-4.8-1.6-2.5-.3-7.7 4.1-5.4 9.1-8.4 5.2-25.8 9.4-31.7 2.9-1.3 25.7 1.4 30.2 13.4 0 5.9 1.1 4.7 2.6 14 .9 6.2-2.8 19.4-11 21.9 0 0-.7 5-.7 6.8 4 4.4 6.9 9.6 8.1 15.3-33.7 6.7-21.4-2.4-31.6-14.1 1.5-.6 3.3-.9 5.2-1-.4-7.7-3.4-13.5-6.1-14.4Zm30.1-20.4c1.7-.5-.8-7-2.4-6.2-1.7.5.8 7 2.4 6.2m-20.4 5.7c2-.7-.8-7.8-2.7-6.9-2 .7.8 7.8 2.7 6.9" class="cls-9"/><path d="M79.2 128.9c.6 2.4.9 5 1 8.2-1.6 1.2-6.1 4.6-6.7 4.8-2.1.8-18.3-2.9-21.2-5.1l-3.2-8c5.4 1.5 20.9 5.5 22.3 4.7.9-.5 5-2.8 7.8-4.6" class="cls-13"/><path d="M76 72c1.6 4-1 5.1-2.5 1-1.6-4 1-5.1 2.5-1" class="cls-6"/><path d="M65.8 178.2c-4.2 3.5-12.3 5.2-13.7 10.8 4.2-2.6 9.4-3.6 14.2-2.7-4.8 1.4-9.3 3.6-13.5 6.3-3.3-.5-6.5-1.3-9.5-2.2.6-1.1 1.1-3.4 1.5-6.3 1.5.8 1.5 1.2 2.6 2.5.8-3.7.7-6.4-1.8-9.4 0-1.1.2-2.2.3-3.2 2.1 1.1 4.7 4.1 4.9 6.5 1.7-5.5 5.7-10.3 10.9-12.8-3.4 3.9-5.8 8.6-7.1 13.5 3.2-2.3 7.3-3.4 11.2-2.9ZM51 158.3c-1.7.7-5.2-2.6-5.3-4.7 1.9.6 7.4-.5 8.1-2.1 1.6.2 3.4 2.1 5 1.5-.9 3.7-4.2 4.7-7.7 5.4Z" class="cls-13"/><path d="M55.7 77.2c1.8 4.5-1.3 5.7-3 1.2-1.8-4.4 1.3-5.7 3-1.2" class="cls-6"/><path d="M53.8 151.4c-.7 1.6-6.2 2.8-8.1 2.1 1.4-1.3 3.7-3.6 3.2-5.6 0 0 4.8-3.6 3.6-4.9 2.5 2.7 3.3 4.8 1.2 8.4Zm-2.8 6.9c.2 2.2.7 4.2 1.5 6.1-2.3-.4-4.3-1.5-5.8-3.2h-.5c-.2-1.9-.6-4.5-1.1-7.2h.6c.4 1.8 3.6 4.9 5.2 4.2Z" class="cls-13"/><path d="M48.9 148c.6 1.9-1.8 4.3-3.2 5.6v.4h-.6c-.8-3.6-1.7-7.4-2.6-9.6.1-.4.2-.8.4-1.2 2 .7 4.9 3.6 6.1 4.8Z" class="cls-13"/><path d="M45.6 177.2c2.4 2.9 2.5 5.6 1.8 9.4-1.1-1.4-1.1-1.8-2.6-2.5.3-2.1.6-4.4.8-6.8Z" class="cls-8"/><path d="M31.4 137.1c-.4-.2-.7-.3-1-.5 0-1.7.6-3.7 1.7-5 .1.3.3.6.4 1 1-2.8 3.1-5.1 5.7-6.5l.3.9c1.2-1.6 2.9-2.8 4.7-3.5.3 1.1 0 2.3-.5 3.3l1.4-.4c.6 3.3-1.5 6.2-3.4 8.6.6-.2 1.1-.3 1.7-.5-1.1 2.1-2.5 4.1-4.6 5.4-1.2-.5-2.4-1.1-3.6-1.6.3-1.7.8-3.5 1.9-4.9-1.6 1.3-2.7 2.3-3.4 4.2-.4-.2-.8-.4-1.1-.5Z" class="cls-13"/><path d="M36.9 170.8c.3.6.5 1.1.7 1.7-.3-.2-.6-.3-.9-.4 0-.5.1-.9.2-1.3" style="stroke-width:0;fill:#af877b"/><path d="M32.6 137.7c.7-1.9 1.8-2.9 3.4-4.2-1.1 1.4-1.5 3.2-1.9 4.9-.5-.2-1-.5-1.5-.7" class="cls-8"/><path d="M129.2 142.5c-4.4-1.5-9.7.2-13.2 3-2.7-1.1-7.1 1-7.2 3.9-.7 0-1.4.5-2 1.1-1.8-.4-3.6-.6-5.3-.7-1.5-2.7-4.8-10.1-6.3-13.4-1.6 1.3-3.8 2.9-6.2 3.4-.1 3.7-.6 7.8-1.3 13.3 7 13 5.1 18.3 21 10.3-1.5 5.4 7.5 4.8 5.4-.7 1-.3 1.9-1 2.4-2 2.2 1.7 6 1.8 6.3-1.5 1.2-.1 2.6.6 3.6-.3 1.6-2.5 4.1-9-1.5-6.5-2.3.5-4.9-1.1-3.3-3.5 1.8-2.7 6.7-3.6 7.7-6.5Zm-87.8 31.7c-1.5.5-1.7 4-3.7 2.9.8-1.5 1.4-4.6-.9-5 .6-9.4 2.8-18.1 6.5-30.1-2.5-.6-8.7-3.5-11.8-4.9-.2 1.3-8.3 27.6-7.2 28-7.1 1.3-15.4 12-1.7 6.4 2.7 2.4-1 12.9 6.4 8.4 1 2.4 4.3 2 6 .5 5.6 4.9 12.9-5.2 6.6-6.2Z" class="cls-9"/><path d="M51.9 110.4c-.4-7.6-3.4-13.5-6-14.3" class="cls-2"/><path d="M75 101.2c-1.2 1-2.5 1.8-3.9 2.2 0 0-.7 5-.7 6.8" class="cls-3"/><path d="M79.5 67.6c1 11.2 7.2 21.3-4.5 33.7" class="cls-2"/><path d="M73.5 72.9c1.5 4.1 4.1 3 2.5-1-1.5-4.1-4.2-3-2.5 1m-20.8 5.5c1.7 4.5 4.8 3.3 3-1.2-1.7-4.5-4.8-3.3-3 1.2m10.7 12.3c4.1 1.5 8.4.5 12.1-2.5M40 85.8c-8-2.7-4.3 8.3 0 10.3 2 1.2 6.4 1.8 5.9-1.1" class="cls-1"/><path d="M79.5 67.6C75 55.5 52.3 52.9 49.3 54.2c-4.1 5.7-.3 23.4-9.4 31.7" class="cls-1"/><path d="M37.2 166.2c.9-6.7 5.4-23.7 9-32.6m-14.7 3.3c0 .3-7.1 25.1-7.2 25.4" class="cls-2"/><path d="M43.2 142c-3.4-1-10.7-4.3-14.5-6.2 4.8-10 8.5-24.8 23.2-25.5m43.3 26.3c1.5 3.5 4.8 10.8 6.4 13.6m-12.7-10.3c3.4-.7 6.6-3.6 8.5-5.6-5.6-7.9-6-21.5-17.1-23.5m11.8 51c2.5 9.7 10.7 4 16.5 1.7" class="cls-2"/><path d="M106.7 150.6c-7.6-2.7-19 2.1-14.7 11.2m-55.1 9c.2-2 .1-3.6.3-4.6m-12.9-3.9c-.2 1-.2 1.9-.2 2.8m70.1 25.2c-15.6 6.1-34.7 4.9-50.9 0 4-14.3 4.4-32.7-.7-46" class="cls-2"/><path d="M87.7 153.2c-1.3 11.4 4.6 25.9 6.5 37.2m-5.7-61.2c1 8.7.3 14.4-.9 24m.1 0c1.4 3.2 2.9 5.4 4.4 8.6M68.3 83.6c.7-2.9 4.6-6.9 5.5-1.9" class="cls-2"/><path d="M108.8 151v-1.5c0-3 4.5-5.1 7.2-3.9 3.5-2.8 8.9-4.5 13.2-3-1.1 2.9-5.9 3.8-7.7 6.5-1.6 2.4 1 4 3.3 3.5m-8.2 3.3c1.5 2.4 3.2-1.9 5-1.2 3.4 3.9-.4 10.3-5.5 6.1m-7.3-11.3c-5.6 1.4-6 13.3 0 13.8" class="cls-3"/><path d="M122.3 155.1c.8-2 4.3-4.5 6-2.2.3 2-1.2 4.3-2 6.1-1 .9-2.4.2-3.6.3m-8.7 3.6c-2.6-10.3-9.2 4.1-2.9 4.3 2.7.5 3.7-1.8 2.9-4.3Z" class="cls-3"/><path d="M114 162.8c1.1-.3 2-1.1 2.4-2.1m-78.7 11.8c-1.1-4.4-4.4-5.4-8.2-6.4-7-5.9-24.1 12.2-7.1 5.4 2.6 2.2-.5 7.6 3 9.3 3.7.7 6.7-4.2 8-7.1.1-4.5-5.4-1.1-6.7.9" class="cls-3"/><path d="M28.8 179.7c2 4.3 7.6.5 8.9-2.6 2.3-3.9-1.2-7-4.3-3.4" class="cls-3"/><path d="M34.5 180.2c5.6 5.4 13.3-4.8 6.9-6-1.5.5-1.6 3.9-3.7 2.9" class="cls-3"/><path d="M53.1 67.9c-2-.3-4.2 1-4.9 2.9m20.1-5.6c1.3-1.8 4-2.5 6-1.5" class="cls-1"/><path d="M82.1 81.6c5.9-15-4.5-43.7-31.6-39.6C24.4 44.4 18 78.2 35.8 91.2m10.9 20.2c2.4 1.2 4.8 8.9 5.6 11.7 2.5 7.7 20.2 3.9 26.1 2.4" class="cls-3"/><path d="M79.3 128.9c-2.8 1.8-7 4.2-7.8 4.6-1.4.8-17-3.2-22.3-4.7l3.2 8c2.9 2.2 19 5.9 21.2 5.1.6-.2 5.1-3.6 6.7-4.8q0 0 0 0m-1 8v.1m2.1.8c.4 3.1-1.8 7.9-4.2 10.2 2-3.3 2.8-7.3 2.1-11" class="cls-1"/><path d="M81.4 146c3.4 2.7 4 8.6 1.5 12.1-.2-.4-.5-.9-.7-1.3-1 4-3.5 7.7-7 10.1-.2-.4-.4-.8-.6-1.3-1.4 2.4-3.6 4.4-6.1 5.7-.5-1.5-.4-3.2.2-4.7-.6.3-1.3.5-1.9.8-1.3-4.5 1.2-9 3.5-12.7-.8.3-1.5.6-2.3 1 1.8-4.6 5.7-10.3 11.2-10.6m-46.6-7.4c.7-1.9 1.8-2.9 3.4-4.2-1.1 1.4-1.5 3.2-1.9 4.9" class="cls-1"/><path d="M30.4 136.6c-.1-1.7.6-3.6 1.7-4.9.1.3.3.6.4 1 1-2.8 3.1-5.1 5.7-6.5l.3.9c1.2-1.6 2.9-2.8 4.7-3.5.3 1.1 0 2.3-.5 3.3l1.4-.4c.6 3.3-1.5 6.2-3.4 8.6.6-.2 1.1-.3 1.7-.5-1.1 2.1-2.6 4.1-4.7 5.5m15.8 11.4.3-.1m-7 9.9c1.5 1.7 3.5 2.8 5.8 3.2-.9-1.9-1.4-4-1.5-6.1 3.6-.8 6.8-1.7 7.7-5.4-1.6.7-3.3-1.3-5-1.5 2.1-3.6 1.2-5.7-1.2-8.4 1.2 1.3-3.6 4.9-3.6 4.9-1.1-1.2-4-4.1-6-4.8" class="cls-1"/><path d="M48.9 148c.6 1.9-1.8 4.3-3.2 5.6" class="cls-1"/><path d="M51.3 158.1c-1.8 1.2-5.5-2.4-5.6-4.6m8.1-2.1c-.7 1.6-6.2 2.8-8.1 2.1M91.4 121c-1.5.4-3.6 1.7-3.8 3.2 1.3 0 2.6.3 3.6.9-.6 2.2-.6 4.4.2 6.4.8-1.2 1.7-2.3 2.8-3.2m-27.9 58c-4.8 1.4-9.3 3.6-13.5 6.3m13-14.4c-4.2 3.5-12.3 5.2-13.7 10.8 4.2-2.6 9.4-3.6 14.2-2.7m-4.6-18.7c-3.4 3.9-5.8 8.6-7.1 13.5 3.2-2.3 7.3-3.4 11.2-2.9" class="cls-1"/><path d="M46 174c2 1.2 4.6 4.1 4.8 6.5 1.7-5.5 5.7-10.3 10.9-12.8M44.6 184c1.5.8 1.7 1.2 2.7 2.6.8-3.7.7-6.4-1.8-9.4m40.2 5.5c.8-2.3-2-4.6-4.1-3.7 1.7-3.9-4.8-6.1-5.5-1.8-3.3-3-6.4 3-2.3 4.2-1.6.5-2.1 3.7-1 5 1.6 1.9 4.7-.4 4.7-.4-.1.4 2.6 4.9 4.7 2.1.8-1.1 1.1-2.8.4-3.4 1.4.2 2.7-.8 3.1-2.1Zm4.4 5.1c-2-1-1.8-5-4.2-5.1" class="cls-1"/><path d="M82.2 188.2c3.4 3.8 4.4-2.5 7.9-.4m-8.8-22.7c1.9.6 5.3 3.9 4.5 3.5-2.2 1.3-3.2 4.9-2.4 7.5 1.2-1.2 2.7-2 4.3-2.2 1.1 2.6 1.6 3.3 3.8 4.4" class="cls-1"/><path d="M85.8 164.3c-1.5-.2-3.1.1-4.5.9m6.8-.7s-1.3-.1-2.3-.2m-15.6-54.1c8.4 9 10.7 21.1 9.7 33.3 0 1 1.4 1.9 2.4 1.6 4.9-12.8 1-32.3-7.3-44h0" class="cls-1"/><path d="M109.8 75.2h20.8V96h-20.8z" style="stroke-width:0;fill:#00a553" transform="rotate(-26.2 120.035 85.69)"/><path d="m33.7 1 10.7 17.8-17.8 10.8-10.7-17.9z" style="stroke-width:0;fill:#b52d00"/><path d="m15.9 11.7 10.7 17.9 17.8-10.8L33.7 1zm90.32 69.096 18.663-9.183 9.184 18.663-18.663 9.183z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M28.1 148.3h20.8v20.8H28.1z" style="stroke-miterlimit:10;fill:#5b2ac2;stroke:#fff" transform="rotate(-79.7 38.451 158.632)"/></svg>')}`;
export default image;