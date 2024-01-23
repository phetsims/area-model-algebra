/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3{stroke:#000;fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-11,.cls-16,.cls-17,.cls-18,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-8{fill:#8b0018}.cls-9{fill:#3e3331}.cls-11{fill:#ce9a89}.cls-16{fill:#658312}.cls-17{fill:#ffb92f}.cls-18{fill:#e9be6d}</style></defs><path d="M110.2 132.1c.3.8 1 1.5 1.4 2.3-1.9 2-5 4.8-8.3 5.4v-2.6h.1c2.5-1.7 4.6-3 6.7-5.1Z" class="cls-18"/><path d="M103.2 133.9c-1.8 2.2-3.6 8.2-5.3 10.3.4-9.6-1-26.3-4.8-33.1v-.2c9.8 1.8 15.3 10.7 17 21.2-2.2 2.1-4.2 3.4-6.7 5.1h-.1v-3.3Z" class="cls-8"/><path d="M58.7 141.9c.3-.9.6-1.8.9-2.6 3.3.9 6.1 2.8 9.1 4.1.3 14.8-1 29.6-3.9 44.1 1.9 0 3.9.4 5.7 1.2 2.7-11.7 5.5-23.6 5.2-35.7 2.8 3.9 8.9 10.4 12.1 14.1.9-2.3 4.3-9.7 5.1-11.8h.2c1.1 11.7 4.7 19.3 8.1 31 1.3-.5 2.5-1 3.8-1.4-5.6-13.7-8.3-25.9-6.9-40.7 1.6-2.1 3.5-8.1 5.3-10.3.3 6.8-.3 11.8-1.3 19.7-1.1 8.4 4.6 25 6.5 35.4-15.2 5.9-34 4.7-49.6 0 3.8-12.8 4.3-32.7-.7-44.8.2-.8.5-1.5.7-2.3Z" class="cls-17"/><path d="M60.9 99.9c-2.7 3.4-8.8-1.7-9.7-4.7-1.6-2.4-.1-7.6 4-5.3 4.4-5 1.5-4.1 1.5-14.4 3.2-4.8 8.3-9.9 12.4-10.4-.4-1.8-1.7-6.5-3-7.8 0 0 6.7 4.7 6.8 7.9 6.1-1.8 12.6-2.4 19-2 2 2.8 2.1 3.7 2.4 6 1.8 11.7 10.3 24.9-8.2 35-.5 3.4-.3 8.7-7.5 8.6-5 0-11.5-.2-11.5-4.3-.7-5.8-2.8-7.5-6.1-8.7Zm29.8-22.8c1.6-.5-.8-6.8-2.4-6.1-1.6.5.8 6.8 2.4 6.1m-19.9 5.5c1.9-.6-.8-7.6-2.6-6.7-1.9.6.8 7.6 2.6 6.7" class="cls-11"/><path d="M93.2 111.1c2.1 3.3 4.5 15.3 4.5 22.2-.7-7-3.9-17.8-9-22.7.5 0 2.4 0 4.5.3z" class="cls-18"/><path d="M56.6 75.5c0 10.2 2.9 9.4-1.5 14.4-4.1-2.3-5.6 2.9-4 5.3-7.6-4.3-10.8-16.2-10.8-23.6-.5-14 13.1-27.8 26.9-25.9 13.5-4.8 27.6 6.1 31.9 18.6-8.7-1.8-17.9-1.5-26.4 1 0-3.1-6.8-7.9-6.8-7.9 1.4 1.3 2.6 5.9 3 7.8-4.1.5-9.2 5.6-12.4 10.4Z" class="cls-9"/><path d="M93 155.2h-.2c-.8 2.1-4.2 9.5-5.1 11.8-3.2-3.7-9.2-10.1-12.1-14.1v-9.1c.9 1.4 8.3 12 10.5 13.9 2.6-3.8 4.7-11.4 6.5-15 .1 4.6 0 8.4.5 12.5Z" class="cls-18"/><path d="M91.7 130.6c1.5 8.1.7 14.1-3.1 22v-16.8c.7-1.6 2.8-4.3 3.1-5.2" class="cls-16"/><path d="M91.7 130.6c-.3.9-2.4 3.5-3.1 5.2-.4 1.5 1.7 18.2-2.5 21.9-1.1-1-3-3.5-5-6.1 0-3.5-.2-11.8-.2-15.3-1.1-.3-4.1-2.1-5.4-2.4-.1-2.9-.4-5.8-.8-8.7 1.5 1.6 7.2 4.7 10.6 7 0 0 2.6-5.9 4.4-9.6h.1c1 2.4 1.6 5.1 2 8Z" style="stroke-width:0;fill:#8c0018"/><path d="M90.7 73.6c1.6 3.9-1 4.9-2.5 1-1.6-3.9 1-4.9 2.5-1" class="cls-7"/><path d="M89.7 122.6h-.1c-1.8 3.7-4.4 9.6-4.4 9.6-3.3-2.3-9-5.4-10.6-7-.2-1.7-.6-3.3-1-5 4.5-.1 9.8.6 13.2-2.5 1.2 1.4 2.1 3.1 2.8 4.9Z" class="cls-11"/><path d="M80.9 136.3c0 3.5.2 11.8.2 15.3-2.6-3.5-5.1-7.1-5.5-7.7 0-3.3 0-6.7-.1-10 1.3.4 4.3 2.1 5.4 2.4" class="cls-16"/><path d="M97.7 155.3c.5-15.6 1.7-37.7-12.3-47.7.9 7-18.7 7-18.6 1-4 1.7-4.1 7.9-.2 10 3.1 22.8 2.8 46.3-1.9 68.9 1.9 0 3.9.4 5.7 1.2 3.8-14.7 5.9-29.6 5.2-44.8 0-7.9 0-15.9-1.9-23.7 4.5-.1 9.8.6 13.2-2.5 7.2 9.7 5 24.1 5.9 35.3.7 12.4 4.6 20.9 8.2 33.2 1.3-.5 2.5-1 3.8-1.4-3.8-10.7-7.1-18.2-7.2-29.6Z" style="stroke-width:0;fill:#b62830"/><path d="M70.9 78.7c1.7 4.3-1.2 5.5-2.9 1.2s1.2-5.5 2.9-1.2" class="cls-7"/><path d="M68.7 143.4h-.4c-2.7-11.1-3.7-21.1-7.8-30.3 1 0 2.2-.2 3.3-.1-.2 2.3.7 4.4 2.8 5.7.9 8.2 1.9 16.5 2 24.9Z" class="cls-18"/><path d="M60.1 137.9c-4.9-1-9.8-4-14-6.5 2.9-7.9 3.5-18.6 14.4-18.3 4.1 9.2 5.1 19.2 7.8 30.2-2.8-1.6-5.5-2.9-8.6-4 .1-.5.3-.9.5-1.4Z" class="cls-8"/><path d="M62.1 100.4c-.9 1.5-1.5 4.5-3.9 3.8-5.9-.9-10.7-3.5-8.1-9.5.3.2.7.4 1 .5 1 3 7 8.1 9.7 4.7.4.2.8.3 1.2.5Z" class="cls-17"/><path d="M59.9 137.8h.1c-.5 1.4-.9 2.7-1.3 4-1.7-.3-10.8-4.3-14.1-6.1l1.5-4.5c4.2 2.5 9 5.5 13.8 6.5Z" class="cls-18"/><path d="M58.2 104.2c-.1 3.6-.6 6.2-1.9 9.6-5.5.8-7.2 8.5-8.6 12.9-4.5 4.2-7.3 6.7-13.4 7.5-5.4.4-10.2 2.7-6.9-5.4 6.4-10 20.8-14.2 24.1-26.8 1 .7 4.5 1.8 6.7 2.2" class="cls-9"/><path d="M52.6 169.9c.3.5.5 1.1.7 1.7-.3-.2-.6-.3-.9-.4 0-.4.1-.9.2-1.3" style="stroke-width:0;fill:#af877b"/><path d="M142.5 142.4c-4.3-1.5-9.5.2-12.9 3-2.6-1.1-6.9.9-7 3.8-.6 0-1.4.5-2 1.1-1.9-.4-3.9-.7-5.7-.7-1.4-2.4-4.1-9.7-5.6-13.1-1.6 1.3-3.7 2.8-6.1 3.3-.5 7.7-2.6 13.6 3.1 21.4 2.4 9.4 10.4 3.9 16.1 1.6-1.4 5.3 7.4 4.7 5.2-.6 1-.3 1.8-1 2.3-1.9 2.1 1.7 5.8 1.8 6.2-1.5 1.1-.1 2.6.6 3.5-.3 1.5-2.4 4-8.8-1.5-6.3-2.3.5-4.8-1.1-3.2-3.4 1.8-2.6 6.5-3.5 7.5-6.4ZM57 173.3c-1.5.5-1.6 3.8-3.6 2.8.8-1.5 1.4-4.5-.9-4.9.6-9.2 2.8-17.6 6.3-29.3-1.4-.2-7.7-3-11.4-4.7-.2 1.2-8.1 26.8-7.1 27.2-6.9 1.2-15 11.7-1.7 6.3 2.6 2.4-.9 12.5 6.2 8.1 1 2.3 4.2 1.9 5.8.5 5.4 4.7 12.6-5 6.4-6.1Z" class="cls-11"/><path d="M62.1 100.4c-.4-.2-.8-.3-1.1-.4m5.9 8.6c-.5-5-2.6-7.2-4.8-8.2m32-31.1c1.8 11.7 10.3 24.9-8.2 35 0 0-.4 1.6-.4 3.3" class="cls-2"/><path d="M88.2 74.5c1.5 4 4 3 2.5-1s-4-3-2.5 1m-20.3 5.4c1.7 4.4 4.7 3.2 2.9-1.2-1.7-4.4-4.7-3.2-2.9 1.2m10.5 11.9c4 1.5 8.2.5 11.8-2.4m-35.1.5c-7.8-2.6-4.2 8 0 10 1.9 1.2 6.2 1.7 5.8-1.1m-4.3-23.3c0 10.2 2.9 9.4-1.5 14.4m39-20.6c-.3-2.3-.4-3.3-2.4-6" class="cls-1"/><path d="M52.9 165.4c.9-6.7 5.2-22.9 8.7-31.8m-14.3 3.6-7 24.5m16-48c2-.6 4.7-.8 7-.9" class="cls-2"/><path d="M58.8 141.9c-1.7-.3-10.8-4.3-14.1-6.1.7-2.3 2.2-6.9 3-9.2 1.4-4.4 3.1-12.1 8.6-12.9m53.1 22.9c1.4 3.3 4.2 10.6 5.5 13m-4.7-17.5c-1.5-12-9.8-22.4-21.5-21.5m14.6 29.2c3.3-.7 6.4-3.5 8.3-5.4-.5-.8-1.2-1.5-1.4-2.3m-3.9 29.1c2.4 9.4 10.4 3.9 16.1 1.6" class="cls-2"/><path d="M120.6 150.3c-7.3-2.6-18.5 2.1-14.3 10.9m-53.7 8.7c.2-1.9.1-3.5.3-4.5m-12.6-3.7c-.2 1-.2 1.8-.2 2.7m68.3 24.6c-15.2 5.9-34 4.7-49.6 0 3.8-12.8 4.3-32.7-.7-44.8" class="cls-2"/><path d="M102 152.8c-1.5 8.9 4.4 25.4 6.3 36.2m-5-51.8c0 5.2-.5 9-1.3 15.6m1.2-18.9v3.3m-.3-7.8c.2 1.6.3 3 .4 4.5m-1.3 18.9c1.4 3.1 2.8 5.3 4.3 8.4M83.2 84.9c.6-2.8 5.7-4.7 6.2-1.5" class="cls-2"/><path d="M122.7 150.6v-1.4c0-2.9 4.4-4.9 7-3.8 3.4-2.8 8.7-4.4 12.9-3-1 2.8-5.8 3.7-7.5 6.4-1.5 2.3 1 3.9 3.2 3.4m-8 3.2c1.4 2.4 3.1-1.8 4.9-1.2 3.3 3.8-.4 10-5.3 6m-7.3-11c-5.5 1.4-5.9 12.9 0 13.4" class="cls-3"/><path d="M135.8 154.6c.8-1.9 4.2-4.4 5.8-2.2.3 2-1.1 4.2-2 6-.9.9-2.4.2-3.5.3m-8.4 3.5c-2.1-8-6.8-.7-4.9 3.5 2.7 2 6.3.2 4.9-3.5Z" class="cls-3"/><path d="M127.7 162.2c1-.3 1.9-1.1 2.4-2.1m-76.8 11.5c-1.1-4.3-4.2-5.2-7.9-6.2-6.8-5.8-23.5 11.9-6.9 5.3 1.3 1.1 1.2 3 1.1 4.7 0 8.7 7.5 2.5 9.3-1.8 1.5-5-4.9-2.4-6.3 0" class="cls-3"/><path d="M44.6 178.6c2 4.2 7.4.5 8.7-2.6 2.2-3.7-1.2-6.8-4.2-3.3" class="cls-3"/><path d="M50.3 179.1c5.3 5.2 13-4.6 6.7-5.8-1.5.5-1.6 3.8-3.6 2.8" class="cls-3"/><path d="M68.3 69.6c-2-.3-4.1 1-4.7 2.9M83.2 67c1.3-1.8 3.9-2.4 5.8-1.4" class="cls-1"/><path d="M90.2 50.9c-5.8-5.2-15.6-8-23-5.2-13.9-1.9-27.4 12-26.9 25.9 0 7.4 3.2 19.3 10.8 23.6" class="cls-3"/><path d="M50.1 94.7c-2.6 6.1 2.2 8.6 8.1 9.5 2.3.7 3-2.2 3.8-3.7" class="cls-3"/><path d="M51.5 102c-3.4 12.6-17.7 16.7-24.1 26.8-3.3 8 1.4 5.8 6.9 5.4 6.1-.9 8.9-3.3 13.4-7.5m10.5-22.4c0 3.6-.6 6.1-1.9 9.5" class="cls-3"/><path d="M66.9 108.6c-.1 6.1 19.4 6.1 18.6-1m3.2 3c-.5-1.5-1.8-3-3.2-3m1.4 10.1c1.9-1.7 2.3-4.6 1.8-7.1" class="cls-2"/><path d="M66.9 108.6c-4 1.7-4.1 7.9-.2 10 5.8 2.7 15.2 2.8 20.2-.8m-40.4 13.7c3.9 2.7 8.8 5.3 13.4 6.3m50.3-5.7c-2.2 2.1-4.2 3.4-6.7 5.1" class="cls-2"/><path d="M54 80.7c.5-1.5 1.4-3.3 2.6-5.2 3.2-4.8 8.3-9.9 12.4-10.4-.4-1.8-1.7-6.5-3-7.8 0 0 6.7 4.7 6.8 7.9 8.5-2.4 17.7-2.8 26.4-1-1.3-3.9-5.9-10.7-8.9-13.4" class="cls-3"/><path d="M75.6 143.9c0-7.9 0-15.9-1.9-23.6" class="cls-2"/><path d="M66.6 118.8c3.4 22.8 2.8 46.1-1.8 68.6 1.9 0 3.9.4 5.7 1.2 3.8-14.7 5.9-29.6 5.2-44.8m16-13.2c1.2 7.9.6 16.9 1.3 24.6 1.1 11.7 4.7 19.3 8.1 31 1.3-.5 2.5-1 3.8-1.4-14.2-27.4 1.4-53.1-16.2-74.3" class="cls-2"/><path d="M87 117.8c2.9 3.6 4 8.1 4.7 12.8" class="cls-2"/><path d="M74.6 125.2c1.5 1.6 7.2 4.7 10.6 7 0 0 2.6-5.9 4.4-9.6m-14 11.3c1.3.5 4.2 2.1 5.3 2.5 0 3.5.2 11.8.2 15.3m10.6-21.1c-.3.9-2.4 3.5-3.1 5.2v16.8" class="cls-2"/><path d="M75.6 143.8s0 0 0 0h0c.9 1.4 8.3 12 10.5 13.9 2.6-3.8 4.7-11.4 6.5-15M60.5 113c4.1 9.2 5.1 19.2 7.8 30.2m24.9-32.1c2.1 3.3 4.5 15.3 4.5 22.2" class="cls-2"/><path d="M75.7 153c2.8 3.9 8.9 10.4 12.1 14.1.9-2.3 4.3-9.7 5.1-11.8m-24.6-11.9c-2.8-1.8-5.6-3.1-8.7-4.1m38.4 4.9c1.6-2.1 3.5-8.1 5.3-10.3" class="cls-2"/><path d="M120.7 34.1h24v24h-24z" style="fill:#5b2ac2;stroke-width:0" transform="rotate(-41.9 132.537 46.102)"/><path d="M120.7 101.7h24v24h-24z" style="stroke-width:0;fill:#0047fd" transform="rotate(-26.2 132.798 113.575)"/><path d="M59.7 2.3h24v24h-24z" style="stroke-width:0;fill:#00a553" transform="rotate(-6.6 71.374 14.556)"/><path d="m23.9 48.3 4.5 23.6-23.6 4.5L.4 52.8z" style="stroke-width:0;fill:#b52d00"/><path d="M58.377 3.727 82.222 1.01l2.717 23.846-23.846 2.717zM116.7 108.061l21.534-10.596L148.831 119l-21.535 10.597zM28.4 71.9 4.8 76.4.4 52.8l23.5-4.5zm87.408-26.73 17.891-15.997 15.997 17.892-17.892 15.997z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M43.1 148.3h20.8v20.8H43.1z" style="stroke-miterlimit:10;stroke:#fff;fill:#5b2ac2" transform="rotate(-79.7 53.407 158.614)"/></svg>')}`;
export default image;