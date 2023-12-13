/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5,.cls-4{stroke:#fff;}.cls-5,.cls-6{fill:#5b2ac2;}.cls-7,.cls-8,.cls-6,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16{stroke-width:0px;}.cls-8{fill:#7b5b4b;}.cls-9{fill:#1e160d;}.cls-10{fill:#d8ccc0;}.cls-11{fill:#db8d46;}.cls-12{fill:#b52d00;}.cls-13{fill:#00a553;}.cls-14{fill:#fff;}.cls-15{fill:#eab888;}.cls-16{fill:#0047fd;}</style></defs><path class="cls-15" d="m107.1,173c.9,9.4.6,5.8.4,15-15.7,6.1-34.2,6.4-50.3,1.5,1.6-3.1,2.2-8.2,2.1-12.2,16,3.1,40.9-.2,47.7-4.6,0,0,0,0,0,.1Z"/><path class="cls-11" d="m107.1,172.9c-6.8,4.4-31.7,7.6-47.7,4.6,0-3.9-.3-5.6-.4-10.5,15.7.6,36.7-.2,47.4-6,.2,3.9.5,8.6.8,12Z"/><path class="cls-15" d="m106.3,160.9c-10.7,5.8-31.7,6.5-47.4,6-.2-4.3-.5-9.3-1.1-12.8,16.2,2,32.1,0,47.7-4.9.3,3.9.5,7.9.8,11.7Z"/><path class="cls-10" d="m102.2,141.1c0,4.3-6.6,7.4-9.6,4.8-2.9-2.6-4.6-8.3-4.6-12.3,0-1.5,12.7-3.5,12.7-3.3,1,4.6,1.5,6.8,1.5,10.9Z"/><path class="cls-11" d="m109.7,121.1c-9-8.8-21.7-9.8-25.5,5.1,5.9-.8,13-1.6,17.8-2.7.8,2.8,1.3,5.7,1.5,7.6,3.5-.3,8-.9,8.9-2.7-.8-3.1-1.6-5.7-2.7-7.2Z"/><path class="cls-8" d="m53.1,87.9c9.1,3.9-4.5-16.8-4.5-22.4,1.9-9.5,16-14.6,23.3-17.5,13.8-4.9,21.5,4.2,22.7,16.2,1,5.8,3,7.8,5,18.3,2.9,13.3-8.9,14.7-11.8,26-1.1,4,.4,6.3-5,9.6-3,1.5-13,0-15-5.7-2.1-5.8-3.4-9.5-10.6-15.3-5.4,2.9-13.8-12.8-4.1-9.4h0Zm37.3-2.3c-4.6,1.3-16.2,2.5-15.5,3.1,4.6,5,15,4.8,16.2-3h-.7Zm-.5-12.6c1.7-.5-.8-7-2.4-6.3-1.7.5.8,7,2.4,6.3Zm-20.9,6.9c2-.7-.8-7.8-2.7-6.9-2,.7.8,7.8,2.7,6.9Z"/><path class="cls-9" d="m92.1,54.5c0,.1.3.8.5,1.8-1.9-7.8-12.2-11.9-20.8-8.4-7.3,2.8-21.4,8-23.3,17.5,0,5.7,13.6,26.3,4.5,22.4h0c-1-.7-2.4-.9-3.4-.3-7.9-12-15.5-26.5-11.2-33.7,4.5-7.5,28.1-18.2,40.1-17.4,7.7.5,10.6,7.8,13.4,18Z"/><path class="cls-14" d="m90.5,85.6h.7c-1.1,7.8-11.5,8.1-16.2,3.1-.7-.6,10.9-1.8,15.5-3.1Z"/><path class="cls-7" d="m90.1,69.4c1.6,4.1-1,5.1-2.6,1-1.6-4.1,1-5.1,2.6-1Z"/><path class="cls-7" d="m69.2,75.9c1.8,4.5-1.3,5.7-3,1.2-1.8-4.5,1.3-5.7,3-1.2Z"/><path class="cls-11" d="m81.7,126.6c-5.3-5.2-14-9.2-21.5-8.1,0-1.2.2-2.2.7-3.2-6.9,3-16.1,4.4-18.3,13.3,3.3,2.8,9.9,4.6,15.5,4.7,0-1.9,0-3.6-.3-5.3,8.3,0,16.6-.6,23.9-1.4Z"/><path class="cls-15" d="m112.5,128.3c-.9,1.9-5.4,2.4-8.9,2.7-.2-1.9-.7-4.7-1.5-7.6-4.8,1.2-11.9,1.9-17.8,2.7,1.2-6.3,6.2-11.2,12.8-12.6-1.7-2.5-6.5-4.4-9.3-5.2-1.1,3.9.4,6.4-5,9.6-4.2,2-15.3-1.1-16-8.4-3.1,1.7-6.9,4.7-6.6,8.7,7.5-1.1,16.2,2.9,21.5,8.1-7.3.8-15.6,1.4-23.9,1.4.3,1.7.4,3.5.3,5.3-5.5-.1-12.2-2-15.5-4.7-.4.2-2.4,12.9-2.6,13.5h.2c3.1,2.9,9.8,4.7,16.7,4,.2-1.6.3-3.4.5-5.4,9.3.4,21.1-.3,31.4-1.8-.5-1.9-.8-3.8-.8-5.4,0-1.5,12.7-3.5,12.7-3.3.6,2.7,1,4.6,1.2,6.2,1-.2,1.7-.6,2.3-.9.3,2.2.6,4.5.8,6.6,4,0,8.5-2.1,9.7-3.1-.7-3.8-1.4-7.5-2.2-10.7Z"/><path class="cls-11" d="m116.6,148.1c-.7-2.8-1.3-5.9-1.9-9-1.2,1-5.7,3.1-9.7,3.1-.2-2.2-.5-4.4-.8-6.6-.5.3-1.2.7-2.3.9,2.8,11.8-10.8,14.7-13.1,2.5-10.3,1.5-22.1,2.2-31.4,1.8-.2,1.9-.4,3.7-.5,5.4-6.8.6-13.6-1.1-16.7-4h-.2s-2.2,12.2-2.2,12.2c6,7.1,19.3,8.5,18.6-4.3h0c.5.8.9,2.2,1.3,4,16.2,2,32.1,0,47.7-4.9.2,2,.3,4,.4,5.9,5,.6,5.3-6.8,10.6-6.7v-.4Z"/><path class="cls-8" d="m144.5,145c-4.4-1.5-9.8.2-13.3,3.1-2.6-1.1-6.5.7-7.1,3.3-.1-.8-.2-1.5-.7-2.1-12.6-4.6-10.5,5.9-17.3,5.8.2,3.1.3,5.9.5,8.9h0c2.4,5.9,10.4,2.4,14.4.2.7.9,1.8,1.6,2.9,1.7-1.8,5.7,7.5,5.3,5.4-.4h0c1-.3,1.9-1,2.4-2,2.2,1.7,6,1.9,6.4-1.5,1.2-.1,2.7.6,3.7-.3,1.6-2.5,4.1-9-1.5-6.5h0c-2.3.5-4.9-1.1-3.3-3.5,1.8-2.7,6.7-3.7,7.8-6.6Z"/><path class="cls-8" d="m56,177c-1.5.5-1.6,3.9-3.7,2.9,0,0,0,0,0,0,.6-1.4,1.3-3.5,0-4.6-.5-1.3-1-2.6-1.9-3.6.5-5.1,2-12,2.4-12.8-5.3,1.9-9.4.6-13.6-3.2-.4,1.9-2.3,10.4-2.4,12.8-7,3.3-11.8,10.8.3,5.9,2.7,2.5-1,12.9,6.4,8.4,1,2.4,4.3,2,6,.5,5.6,4.9,13-5.2,6.6-6.3Z"/><path class="cls-3" d="m87.8,108.5c-1.1,3.9.4,6.4-5,9.6-3,1.5-13,0-15-5.7-2.1-5.8-3.4-9.5-10.6-15.3"/><path class="cls-3" d="m92.6,56.3c2.4,10.5,3.7,12.5,7,26.1,2,10-4.2,14.3-10.4,21.4,0,0-.9,2.3-1.5,4.6"/><path class="cls-3" d="m49.5,87.2c-8-12.1-15.2-26.1-11-33.3,4.5-7.5,28.1-18.2,40.1-17.4,8.2.3,11.2,9.8,14,19.9"/><path class="cls-1" d="m87.5,70.4c1.6,4.1,4.2,3.1,2.6-1-1.6-4.1-4.2-3.1-2.6,1Z"/><path class="cls-1" d="m66.2,77.1c1.7,4.5,4.8,3.3,3-1.2-1.7-4.5-4.8-3.3-3,1.2Z"/><path class="cls-1" d="m53.2,87.8c-7.3-2.6-4.3,5.5-.8,8.1,1.4,2.2,6.5,2.5,5.5-1"/><path class="cls-1" d="m77.7,83.2c1-4.5,10.9-6.8,11.1-2.7"/><path class="cls-3" d="m92.6,56.3c-1.9-7.8-12.2-11.9-20.8-8.4-7.3,2.8-21.4,8-23.3,17.5,0,5.8,14,26.9,4.1,22.2"/><path class="cls-3" d="m60.9,115.3c-6.9,3-16.1,4.4-18.3,13.3-1.6,6.6-3.4,19-4.8,25.7,4.5,5.2,10.3,6.7,16.4,3.9,2.9-4,2.3-14,3.4-19.8"/><path class="cls-3" d="m95.6,114c19.8,3.3,16.8,18.8,21,34"/><path class="cls-3" d="m110.4,167.1c3.5,1,7.5-1.6,10.5-2.9"/><path class="cls-3" d="m109.7,153.9c-1.5,3.7-3.9,10.3.3,13.1"/><path class="cls-3" d="m124,151.4c-.1-.8-.2-1.5-.7-2.1-4.7-2.3-11.2-.8-13.5,4.3"/><path class="cls-3" d="m50.3,171.6c.5-5.1,2-12,2.4-12.8"/><path class="cls-3" d="m39.1,155.5c-.4,2-2.3,10.5-2.4,12.9"/><path class="cls-3" d="m110.4,167.1c-2.3-.7-3.1-1.1-3.9-3.1"/><path class="cls-2" d="m107.6,188.1c-15.7,6.1-34.2,6.4-50.3,1.5,3.7-9.4,2.2-29.7-.7-39.6"/><path class="cls-2" d="m103.5,131.1c2.4,18.7,3.8,37.4,4,56"/><path class="cls-3" d="m68.9,64.9c-5.4-.1-9.3,3.1-10.1,4.5"/><path class="cls-3" d="m81.5,61.8c3.7-3.6,8.3-3.1,9.2-1.9"/><path class="cls-1" d="m91.5,85.3c-4.3,1.6-17.1,2.7-16.5,3.4,4.6,5,15,4.8,16.2-3"/><path class="cls-3" d="m106,155.1c1.5,0,3.2,0,3.9-1.5"/><path class="cls-1" d="m66.7,109.8c-3.1,1.7-6.8,4.7-6.5,8.7,8.6-1.2,17.6,3.9,23.4,9.9,1.2-7.2,5.7-13.2,13.4-14.7-1.6-2.4-6.4-4.4-9-5.1"/><path class="cls-3" d="m50.5,119.5c9,2.8,7.7,11.7,7.2,19"/><path class="cls-3" d="m103.5,131.1c-.3-3.9-2.9-15.2-6-16.6"/><path class="cls-3" d="m84.2,126.2c5.9-.8,13-1.6,17.8-2.7"/><path class="cls-3" d="m57.8,128c8.3,0,16.6-.6,23.9-1.4"/><path class="cls-3" d="m102.2,136.3c1.1-.3,1.4-.5,1.9-.8"/><path class="cls-3" d="m57.4,140.8c9.3.4,21.1-.3,31.4-1.8"/><path class="cls-3" d="m57.9,154.1c16.1,2,32,0,47.5-4.9"/><path class="cls-3" d="m58.9,166.9c15.6.5,36.7-.1,47.4-6"/><path class="cls-3" d="m59.4,177.4c15.9,3,40.9-.1,47.6-4.5"/><path class="cls-3" d="m88.8,138.9c.8,2.7,2.1,5.3,3.8,6.9,3,2.7,9.7-.4,9.6-4.8,0-4-.5-6.3-1.5-10.9,0-.2-12.8,1.8-12.7,3.3,0,1.6.3,3.6.8,5.4Z"/><path class="cls-3" d="m42.8,128.7c3,2.8,9.8,4.4,15.2,4.7"/><path class="cls-3" d="m40.2,142.1c3.1,2.8,9.5,4.7,16.4,4"/><path class="cls-3" d="m103.5,131.1c3.5-.3,8-.9,8.9-2.7"/><path class="cls-3" d="m114.7,139s0,0,0,0c-1.2,1-5.6,3.1-9.6,3.1"/><path class="cls-3" d="m62.9,99.7c6.6,4.7,6.4,3,15.5,3.9"/><line class="cls-3" x1="129.2" y1="165.5" x2="129.2" y2="165.5"/><line class="cls-3" x1="52.3" y1="179.9" x2="52.3" y2="179.9"/><path class="cls-3" d="m124,153.5c-1-3.8,3.8-6.7,7.1-5.4,3.6-2.9,8.9-4.6,13.3-3.1-1.1,2.9-5.9,3.8-7.8,6.6-1.6,2.4,1,4,3.3,3.5"/><path class="cls-3" d="m131.8,158.5c1.5,2.4,3.2-1.9,5.1-1.2,3.4,4-.4,10.4-5.5,6.2"/><path class="cls-3" d="m123.9,152.1c-5.5,1.2-6.2,13.4,0,13.9"/><path class="cls-3" d="m137.6,157.7c.8-2,4.4-4.5,6-2.3.3,2.1-1.2,4.3-2,6.2-1,.9-2.4.2-3.6.4"/><path class="cls-3" d="m125.1,162.4c-1.3,1.7-2,4.8-1,6.8,1.4,1.2,4.9,1.3,5.3-1.1.4-2.1-1.6-8.1-4.2-5.6Z"/><path class="cls-3" d="m129.2,165.5c1.1-.3,2-1.1,2.5-2.1"/><path class="cls-3" d="m52.3,175.3c-1.1-4.4-4.4-5.4-8.2-6.4-7.1-6-24.3,12.3-7.1,5.4,2.6,2.2-.5,7.7,3,9.3,3.7.7,6.6-4.2,8-7,.4-4.7-5.4-1.3-6.7.7"/><path class="cls-3" d="m43.3,182.5c2.7,5,9.5-.9,9.7-4.9.6-3.7-3.7-3.2-5.2-.9"/><path class="cls-3" d="m49.1,183c5.6,5.4,13.5-4.9,6.9-6-1.5.5-1.6,3.9-3.7,2.9"/><rect class="cls-6" x="120.7" y="35.1" width="24" height="24" transform="translate(2.5 100.6) rotate(-41.9)"/><rect class="cls-16" x="120.7" y="102.7" width="24" height="24" transform="translate(-37 70.4) rotate(-26.2)"/><rect class="cls-13" x="59.7" y="3.3" width="24" height="24" transform="translate(-1.3 8.3) rotate(-6.6)"/><polygon class="cls-12" points="23.9 49.3 28.4 72.9 4.8 77.4 .4 53.8 23.9 49.3"/><rect class="cls-4" x="59.7" y="3.3" width="24" height="24" transform="translate(-1.3 8.2) rotate(-6.5)"/><rect class="cls-4" x="120.7" y="102.7" width="24" height="24" transform="translate(-37 70.2) rotate(-26.2)"/><polygon class="cls-4" points="28.4 72.9 4.8 77.4 .4 53.8 23.9 49.3 28.4 72.9"/><rect class="cls-4" x="120.7" y="35.1" width="24" height="24" transform="translate(2.4 100.5) rotate(-41.8)"/><rect class="cls-5" x="43.1" y="149.3" width="20.8" height="20.8" transform="translate(-113.2 183.7) rotate(-79.7)"/></svg>')}`;
export default image;