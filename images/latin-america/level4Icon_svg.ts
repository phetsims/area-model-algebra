/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5{fill:#0047fd;}.cls-5,.cls-4{stroke:#fff;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15{stroke-width:0px;}.cls-7{fill:#5b2ac2;}.cls-8{fill:#44322e;}.cls-9{fill:#d14a4a;}.cls-10{fill:#c1272d;}.cls-11{fill:#b2784d;}.cls-12{fill:#b52d00;}.cls-13{fill:#00a553;}.cls-14{fill:#8b7461;}.cls-15{fill:#fff;}</style></defs><path class="cls-11" d="m53.9,92.2c-6,2.9-15.1-16.2-4.5-11.9v.3c9.8-5.1-10.9-26.4,11-27.7,6.5-.2,11.7-4.3,17.3-7,4.6-1.1,11.4,1.6,12.8,6.3,2.3,11.5,7.6,13.2,7.7,28.5,0,12-11.9,12-12.3,25.8.4,10.9-15.5,10.2-21.5,1-1.2-4.5-3.8-10.3-10.5-15.2Zm34.3-24.7c1.7-.6-.9-7.2-2.5-6.5-1.7.6.9,7.2,2.5,6.5Zm-20.3,6.4c2-.7-.8-8.1-2.8-7.1-2.1.7.8,8,2.8,7.1Z"/><path class="cls-9" d="m97.4,134.5c2.1,10.3-2,13.6-10.6,17.9-6,2.6-15.1,7.7-20.5,4.3-2.4-2.9-1.9-7.3-2.2-10.9-.5-4.3,2.8-6.9,6.9-7.4,5.9-.9,17.3-6.3,20.7-8.3,3.6-3.4,5.6,1.3,5.8,4.4Z"/><path class="cls-6" d="m88.2,63.7c1.7,4.2-1,5.3-2.6,1-1.7-4.2,1-5.2,2.6-1Z"/><path class="cls-8" d="m89.7,50c-13.5-11.3-14.7,3.1-34.7,4-12.3,6.3,3.4,20.9-5.5,26.5v-.3c-5.9-3.1-6,4.1-3,7.3-16.4-14.3-8.8-34.8-6-39.2,13.9-17.1,39.4-18.2,49.2,1.7Z"/><path class="cls-6" d="m68,69.7c1.9,4.6-1.3,5.9-3.1,1.2-1.9-4.6,1.3-5.9,3.1-1.2Z"/><path class="cls-14" d="m51.9,148.3c0,0,0,.2-.1.3h-.5c.2-.2.4-.2.7-.3Z"/><path class="cls-15" d="m39.4,146.3c3.5,2,12.9,5.3,14-1.1,2.8,5.9,2.2,19.2,2.8,24.8.5,5.9,1.1,17.7-.9,21.7,16.6,5,35.7,4.7,51.8-1.6-.3-15.2-2.6-28.3-3.1-44.1,4.1,0,6.5-1.3,11-3.8-2.6-9.9-8.3-26.1-11.4-30.4-2-2.7-13.6-4.8-17.7-5.5.7,11.2-17,10.2-21.7.2-30,8.7-22.6,5.7-29.3,35.2,1.5,1.7,3,3.4,4.6,4.6m57.6-1.3c-1.2,2.4-7.8,6.2-10.2,7.5-6.4,2.6-20.2,10.7-22.1.6-3.2-15.9,4.2-13,15.6-17.5,6.7-2.7,10-5.1,13.9-6.6,4.6,1.1,4.1,12.5,2.9,16.1Z"/><polygon class="cls-10" points="47.2 167.1 46.6 167 46.6 167 47.2 167.1"/><path class="cls-11" d="m143.9,140c-4.5-1.6-10.1.2-13.7,3.2-2.6-1.1-6.7.8-7.3,3.5-.1-.8-.2-1.5-.7-2.2-2-.9-4.5-1.2-6.8-.9-.1-.4-.2-.8-.3-1.3-4.5,2.5-6.9,3.7-11,3.8.7,13.7-.5,21.9,15.6,13.8.8,1,1.8,1.7,3,1.7-1.8,5.8,7.7,5.5,5.5-.4,1.1-.3,2-1.1,2.5-2,2.2,1.8,6.2,1.9,6.6-1.6,1.2-.1,2.8.6,3.8-.4,1.6-2.6,4.3-9.3-1.6-6.7h0c-2.4.5-5.1-1.2-3.4-3.6,1.9-2.8,6.9-3.8,8-6.8Z"/><path class="cls-11" d="m47.2,167.1c.4-5.2,3.8-16.4,4.5-18.5-5.7.6-11.2-.2-15-4.7-.3,3.1-4.7,17.1-3,19.9-7.2,2.5-14,11.9-.6,6.4,2.8,2.5-1.1,13.3,6.6,8.7,1.1,2.5,4.4,2.1,6.2.6,3.3,2.8,9.3.6,9.2-4,.2-2.2-2.7-3.6-3.6-1.2-.4,1-1.4,2.5-2.6,1.7h0c.6-1.4,1.3-3.6,0-4.8-.5-1.2-1-2.4-1.8-3.4,0,0,0,.1,0,.2"/><path class="cls-3" d="m64.4,107.3c-1.2-4.6-3.7-9.8-10.3-15.1"/><path class="cls-3" d="m85.8,106.3c.4,11-15.5,10.2-21.5,1"/><path class="cls-3" d="m46.5,87.5c-16.4-14.3-8.8-34.8-6-39.2,6.7-10.3,21-12.9,28.6-12.9,12.7.4,21.6,12.1,23.5,24.5,5.8,8.7,9.9,27.9-4.1,36.3,0,0-2.9,7.4-2.7,10.1"/><path class="cls-1" d="m85.6,64.8c1.6,4.2,4.3,3.2,2.6-1-1.6-4.2-4.3-3.2-2.6,1Z"/><path class="cls-1" d="m64.9,70.9c1.8,4.6,5,3.4,3.1-1.2-1.8-4.6-5-3.4-3.1,1.2Z"/><path class="cls-1" d="m53.9,92.2c1-.6,1.4-2,.9-3"/><path class="cls-3" d="m46.5,87.5c1.6,2.3,4.1,6.2,7.3,4.6"/><path class="cls-1" d="m49.4,80.2c-5.9-3.1-6,4.1-2.9,7.3"/><path class="cls-1" d="m79.3,77.8c3.2-5,6.6-4.7,7-1.2"/><path class="cls-3" d="m56.8,63c1.7-2.1,4.6-4.2,7.6-4.5"/><path class="cls-1" d="m53.4,145.2c.3-2,.3-5.2,1.2-11.9"/><path class="cls-1" d="m51.2,148.4c1.4-.4,1.9-1.9,2.2-3.2"/><path class="cls-1" d="m64.4,106.5c-30.1,8.8-22.8,5.7-29.5,35.3,1.6,1.7,3.6,4.4,5.7,4.8"/><path class="cls-1" d="m38.5,145.5c3.7,3.2,10.4,3.2,13,3"/><path class="cls-1" d="m85.8,106.3c4.1.6,15.8,2.7,17.7,5.5,3.3,4.6,9.2,21.7,11.8,31.7"/><path class="cls-1" d="m54.6,149.1c-.3-1.7-.7-3.1-1.3-3.9,0,0,0,0,0,0"/><path class="cls-1" d="m107,190.1c-16.1,6.3-35.2,6.6-51.8,1.6,3.5-11.9-.3-28-.7-42.2"/><path class="cls-1" d="m101.7,125.7c2.8,22,3.9,42.9,5.3,64.5"/><path class="cls-1" d="m51.8,148.5c0-.1,0-.2.1-.3"/><path class="cls-1" d="m47.2,167.7c0-.2,0-.4,0-.6"/><path class="cls-1" d="m36.8,143.8c-.3,3.1-4.7,17.1-3,19.9"/><path class="cls-1" d="m108.8,162.8c3.7,1,7.7-1.6,10.8-3"/><path class="cls-1" d="m122.8,146.6c-.1-.8-.2-1.5-.7-2.2-7.4-3.9-15.4,2.7-15.7,10-.3,1.9-1,7.1,2,8.2"/><path class="cls-1" d="m108.8,162.8c-2.3-.7-3.2-1.1-4-3.2"/><path class="cls-1" d="m104,146c4.1,0,6.4-1.3,11-3.8"/><line class="cls-3" x1="139.4" y1="150.4" x2="139.4" y2="150.4"/><line class="cls-3" x1="139.4" y1="150.4" x2="139.4" y2="150.4"/><line class="cls-3" x1="137.2" y1="157.5" x2="137.2" y2="157.5"/><line class="cls-3" x1="128.1" y1="161.1" x2="128.2" y2="161.1"/><line class="cls-3" x1="122.7" y1="147.3" x2="122.8" y2="147.3"/><path class="cls-3" d="m122.8,148.8c-1-3.9,3.9-6.9,7.3-5.6,3.7-2.9,9.2-4.7,13.7-3.2-1.1,3-6.1,4-8,6.8-1.7,2.5,1,4.2,3.4,3.6"/><path class="cls-3" d="m130.9,153.9c1.5,2.5,3.4-2,5.2-1.3,3.4,4.1-.3,10.7-5.7,6.3"/><path class="cls-3" d="m122.7,147.3c-5.7,1.2-6.4,13.8,0,14.3"/><path class="cls-3" d="m136.8,153.1c.8-2.1,4.5-4.7,6.2-2.3.3,2.1-1.2,4.5-2.1,6.4-1,1-2.5.2-3.7.4"/><path class="cls-3" d="m124,157.9c-1.3,1.8-2,4.9-1.1,7,1.5,1.3,5.1,1.3,5.4-1.2.4-2.2-1.6-8.4-4.3-5.8Z"/><path class="cls-3" d="m128.2,161.1c1.1-.3,2-1.1,2.5-2.2"/><line class="cls-3" x1="49" y1="175.9" x2="49" y2="175.9"/><line class="cls-3" x1="49" y1="175.9" x2="49" y2="175.9"/><path class="cls-3" d="m35.4,163.4c-7.4.9-16.7,12.7-2.2,6.7,2.7,2.3-.5,7.9,3.1,9.6,3.8.8,6.8-4.3,8.2-7.2.4-4.8-5.5-1.4-6.9.8"/><path class="cls-3" d="m49,171.2c-.6-1.5-1.2-3-2.4-4.2"/><path class="cls-3" d="m39.7,178.7c2.1,4.5,7.9.5,9.3-2.7,2.4-4.4-1.4-7.3-4.6-3.2"/><path class="cls-3" d="m45.7,179.1c6,5.6,13.7-5.1,7.1-6.2-1.6.5-1.7,4-3.8,3"/><path class="cls-1" d="m78.6,54.4c2.4-2.4,5.8-2.9,8.3-2.3"/><path class="cls-2" d="m73,84.1c4.2,1.1,8.8.6,12.6-1.4"/><path class="cls-3" d="m89.7,50c0,0,.2.1.2.2"/><path class="cls-3" d="m71,138.4c-4,.5-7.3,3-6.9,7.4.2,3.6-.2,8,2.2,10.9,5.4,3.4,14.5-1.6,20.5-4.3,8.6-4.3,12.8-7.6,10.6-17.9-.2-3.2-2.2-7.8-5.8-4.4-3.4,2-14.8,7.4-20.7,8.3Z"/><rect class="cls-13" x="117" y="103.9" width="20.8" height="20.8" transform="translate(-37.4 67.9) rotate(-26.2)"/><rect class="cls-12" x="95.8" y="13.9" width="20.7" height="20.7" transform="translate(2.7 58.1) rotate(-31)"/><polygon class="cls-7" points="37.3 38.3 26.3 55.9 8.7 44.9 19.7 27.3 37.3 38.3"/><rect class="cls-4" x="95.8" y="13.9" width="20.7" height="20.7" transform="translate(2.7 58.1) rotate(-31)"/><rect class="cls-4" x="117" y="103.9" width="20.8" height="20.8" transform="translate(-37.4 67.9) rotate(-26.2)"/><polygon class="cls-4" points="37.3 38.3 26.3 55.9 8.7 44.9 19.7 27.3 37.3 38.3"/><rect class="cls-5" x="36.1" y="146.3" width="20.8" height="20.8" transform="translate(-116 174.3) rotate(-79.7)"/></svg>')}`;
export default image;