/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-4{stroke:#000;fill:none}.cls-2,.cls-4{stroke-miterlimit:10}.cls-11,.cls-7,.cls-9{stroke-width:0}.cls-9{fill:#dbbcab}.cls-11{fill:#8cb3c4}</style></defs><path d="M103 147.8c.5 0 1 0 1.5.1-4.2 4.1-2.8 11.6 0 16.2-2 .9-4.7 1.7-6.7 1.2-3.6-5.1-3.1-12.5 1.2-17 1-.5 2.4-.6 3.9-.5Z" class="cls-11"/><path d="M57.5 119.5c-.6 6.2-4.3 12.1-9.7 15.2 3-10.4-5.7-17.6-12.5-24.5-.9-2.1.2-6.4-1-8.4-16.1-13.2-4-18.8-8.7-36.4 0-5.8 5.8-14.8 11.1-16.9 7.2-2.9 6.5-7 13.9-9.4 12.9-1.7 27.5.6 34.1 13.5 5.4 8 1.7 11.7 2.1 19.6 3.8 6.3 4 11.5 2.5 18.6 0 5.5 4 12.2-.2 17-4.7 0-11.2-2.1-16.1-1.9l.6-5.2c18-9.1 8.8-25.2 7.2-36.3-2-6.8-4-12.3-19.3-14.1-9.1-1.1-18.2-1.6-20 3.1-3 10.2-3.2 37.5 9.1 44.6 2 9.1 7.2 13.4 7 21.5Z" style="stroke-width:0;fill:#4b392d"/><path d="M73 106c.8 12.2-9.6 8.8-17 5.8-1.6-3.7-3.9-7.8-5.4-13.7-12.3-7-12.1-34.3-9.1-44.6 1.8-4.7 10.8-4.1 20-3.1 15.4 1.8 17.4 7.3 19.3 14.1 1.6 11 10.8 27.2-7.2 36.3 0 0-.3 2.7-.6 5.2m4.3-33.4c1.7-.5-.8-7.1-2.5-6.3-1.7.5.9 7.1 2.5 6.3m-20.7 5.8c2-.7-.8-7.8-2.7-7-2 .7.8 7.8 2.7 7" class="cls-9"/><path d="M77.3 68.9c1.6 4.1-1 5.1-2.6 1s1-5.1 2.6-1" class="cls-7"/><path d="M75.6 106.2c2.6 4.6 2.4 10.6-.6 14.9-1.2-2.9-3.4-5.3-6.2-6.6v-.2c4.5-.5 3.7-4.3 4.3-8.4.5 0 1.5 0 2.6.2Zm-6.9 8.2v.2c-2 2.4-3.3 5.4-3.6 8.6-2.7-.7-5.3-1.9-7.5-3.6.3-2.7-.4-5.1-1.6-7.7 3.9 2 8.4 3 12.7 2.6Z" class="cls-11"/><path d="M56.7 74.2c1.8 4.5-1.3 5.7-3 1.2-1.8-4.5 1.3-5.7 3-1.2" class="cls-7"/><path d="M103 147.8c-6.6-9.2-8.8-32.2-13.9-38.9-3.3-2-9.4-2.2-13.5-2.8 2.6 4.6 2.4 10.7-.6 15-1.2-2.9-3.4-5.3-6.2-6.6-2 2.4-3.3 5.4-3.7 8.6-2.7-.7-5.3-1.9-7.5-3.6-.6 6.2-4.3 12.1-9.7 15.2 1.9-8.2-2.2-15.7-9.2-21-2.5.5-5.6 17.7-6.3 20.9L25.8 158c4.6-.5 9.4 1.2 12.6 4.5.9-4.8 2.8-12.8 5.1-20.3 5.2 12.6 4.7 33.2.8 46.5 16.1 4.8 35.5 6.2 51.5 0-2-11.2-8.1-28.3-6.6-37.6 2.8 4.2 4.3 12.2 8.8 14.2-3.6-5.1-3.1-12.5 1.2-17 1-.5 2.4-.6 3.9-.5Z" style="stroke-width:0;fill:#7ca5bb"/><path d="M38.4 162.4c-.5 2.3-.3 3.4-.6 6.5-1.1-3.5-4.7-3.6-7.5-4.7-1.6-1-3.5-1.3-5.4-1-.2-1.6.4-3.7.8-5.2 4.6-.5 9.4 1.2 12.6 4.5Z" class="cls-11"/><path d="M37.8 168.9c.3.6.5 1.1.8 1.7-.3-.2-.6-.3-1-.4 0-.5.1-.9.2-1.4Z" style="stroke-width:0;fill:#af877b"/><path d="M131.1 140.3c-4.4-1.5-9.8.2-13.4 3.1-2.7-1.1-7.1 1-7.2 4-.7 0-1.4.5-2.1 1.1q-1.95-.45-3.9-.6c-4.2 4.1-2.8 11.6 0 16.2 1.9-1.1 3.9-1.9 5.7-2.6-1.4 5.5 7.6 4.9 5.4-.7 1-.3 1.9-1 2.4-2 2.2 1.7 6 1.9 6.4-1.6 1.2-.1 2.7.6 3.7-.3 1.6-2.5 4.2-9.1-1.5-6.6-2.3.5-5-1.1-3.4-3.5 1.8-2.7 6.7-3.7 7.8-6.6Zm-88.8 32.1c-1.5.5-1.7 4-3.8 2.9.8-1.6 1.4-4.7-1-5 0-.5.1-.9.2-1.4-1.1-3.5-4.7-3.6-7.5-4.7-7.1-6-24.4 12.3-7.1 5.5 2.7 2.4-1 13 6.5 8.4 1 2.4 4.3 2 6 .5 5.7 4.9 13.1-5.2 6.7-6.3Z" class="cls-9"/><path d="M55 111.2c4.6 2.3 15.7 6.7 17.6-.6 0-1.2 1-9.5 1-9.9 18-9 8.8-25.2 7.2-36.3" class="cls-2"/><path d="M74.7 69.9c1.6 4.1 4.2 3.1 2.6-1s-4.2-3.1-2.6 1m-21 5.5c1.8 4.5 4.9 3.3 3-1.2-1.8-4.5-4.8-3.3-3 1.2m10.9 12.4c4.1 1.6 8.5.6 12.2-2.5" class="cls-1"/><path d="M80.8 64.5c-2-6.8-4-12.3-19.3-14.1-9.1-1.1-18.2-1.6-20 3.1-4 10.8-.8 31 4.8 42.9" class="cls-1"/><path d="M38.1 164.2c1.3-8.6 5.4-23.4 9.1-33m-14.9 3.4c-.4 1.4-7.1 25.2-7.2 25.7m7.2-25.7c.7-3.2 3.9-20.4 6.3-20.9m58.1 20.6c1.5 3.5 4.8 10.9 6.4 13.7m-6.4-13.7c-1-8.6-5-22.4-7.6-25.4-4.2-2.2-11.6-2.6-16.5-2.9m20.9 53.8c2.6 9.8 10.8 4 16.7 1.7" class="cls-2"/><path d="M108.4 148.5c-7.5-2.7-19.2 2.1-14.8 11.3m-55.8 9.1c.2-2 .1-3.7.3-4.7M25 160.3c-.2 1-.2 1.9-.2 2.8m70.9 25.6c-16 6.2-35.4 4.8-51.5 0 3.9-13.3 4.5-33.9-.8-46.5" class="cls-2"/><path d="M89.1 122.8c.9 7.6 1.4 18-.1 29.2-1.1 8.7 4.8 26 6.7 36.7" class="cls-2"/><path d="M89.1 151.1c1.4 3.3 2.9 5.5 4.5 8.7" class="cls-2"/><path d="M110.5 148.8c-1-3.8 3.8-6.8 7.2-5.5 3.6-2.9 9-4.6 13.4-3.1-1.1 2.9-6 3.9-7.8 6.6-1.6 2.4 1 4 3.4 3.5m-8.3 3.5c1.6 2.7 3.9-3.2 5.7-.7 2.1 4.7-1.5 9.4-6.2 5.7" class="cls-4"/><path d="M110.4 147.3c-5.7 1.4-6.1 13.4 0 13.9m13.7-8.2c.8-2 4.4-4.6 6.1-2.3.3 2.1-1.2 4.4-2 6.2-1 .9-2.4.2-3.6.4" class="cls-4"/><path d="M115.7 160.9c-2.6-10.4-9.3 4.2-3 4.4 2.7.5 3.8-1.9 3-4.4Z" class="cls-4"/><path d="M115.7 160.8c1.1-.3 2-1.1 2.5-2.1m-79.7 12c-1.1-4.5-4.4-5.4-8.3-6.5-7.1-6-24.4 12.3-7.1 5.5 1.3 1.1 1.2 3.1 1.2 4.9 0 9.1 7.8 2.6 9.6-1.9 1.5-5.2-5.1-2.5-6.5 0" class="cls-4"/><path d="M29.5 177.9c2.1 4.4 7.7.5 9-2.7 2.3-3.9-1.2-7.1-4.3-3.4" class="cls-4"/><path d="M35.3 178.4c5.7 5.4 13.4-5 7-6-1.5.5-1.6 4-3.7 2.9m30.1-94.8c1.2-2.4 3.9-5.7 5.1-1.4" class="cls-4"/><path d="M55.1 63.8c-2.9-.4-6 1-7.7 3.4m22.2-6.9c1.9-1.4 4.5-1.6 6.6-.6" class="cls-1"/><path d="M89.1 107.9c4.2-4.8.2-11.5.2-17 1.5-7.1 1.3-12.2-2.5-18.6-.4-7.8 3.4-11.6-2.1-19.6-6.5-12.9-21.1-15.2-34.1-13.5-7.4 2.4-6.7 6.5-13.9 9.4-5.3 2.1-11.1 11.1-11.1 16.9 4.8 17.6-7.4 23.2 8.7 36.4 1.2 2 0 6.2 1 8.4 6.8 6.8 15.5 14.1 12.5 24.5 16.5-11.4 7.6-21.9 2.6-37.3" class="cls-1"/><path d="M57.4 119.3c2.3 1.8 4.9 3 7.7 3.7.3-3.1 1.6-6.2 3.7-8.6 2.8 1.3 5.1 3.7 6.2 6.6 3-4.3 3.2-10.4.6-14.9" class="cls-2"/><path d="M68.8 115.4c3.7 12.3 8.8 51.5 7.2 77.2m28.6-44.8c-4.2 4-2.9 11.6 0 16.2m-5.5-15.7c-4.3 4.5-4.8 11.9-1.2 17m-72.3-7.4c4.7-.5 9.7 1.3 13 4.7" class="cls-2"/><path d="M44.4 92.9c2.3 2.9 6.9 6.2 10.7 6.9" class="cls-4"/><path d="M69.4 129.3c.3 2.2-1.6 2.5-1.8.3-.3-2.2 1.6-2.5 1.8-.3Zm2.2 17.2c.3 2.2-1.5 2.5-1.8.3s1.5-2.5 1.8-.3Zm2 21.4c.1 2.2-1.8 2.3-1.9 0-.1-2.2 1.8-2.3 1.9 0Zm-.1 15.3c.1 2.3-1.8 2.4-1.9 0-.1-2.3 1.8-2.4 1.9 0Z" style="stroke:#000;stroke-miterlimit:10;fill:#e4dcd3"/><path d="M109.1 83.3h20.8v20.8h-20.8z" style="stroke-miterlimit:10;stroke:#fff;fill:#5b2ac2" transform="rotate(-26.2 119.36 93.46)"/><path d="M28.1 148.3h20.8v20.8H28.1z" style="stroke-miterlimit:10;fill:#00a553;stroke:#fff" transform="rotate(-79.7 38.451 158.632)"/></svg>')}`;
export default image;