/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5{fill:#5b2ac2;}.cls-5,.cls-4{stroke:#fff;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15{stroke-width:0px;}.cls-7{fill:#37aa8f;}.cls-8{fill:#231c19;}.cls-9{fill:#b52d00;}.cls-10{fill:#00a553;}.cls-11{fill:#93623d;}.cls-12{fill:#8158a5;}.cls-13{fill:#ef5b5b;}.cls-14{fill:#ffcf69;}.cls-15{fill:#eaea8c;}</style></defs><path class="cls-14" d="m99.9,143.9c-4.2,2.3-6.4,3.5-10.2,3.5-.5-6.5-1.1-13.1-2.2-20h-.1c-.8-4.9-4.8-14.6-7.4-15.6,4,.9,8.2,2.2,9.2,3.7,2.9,4,8.2,19.2,10.7,28.4Z"/><path class="cls-14" d="m90.5,160.2c.5,11.3,2.3,19.3,2,30.2-15.1,5.9-32.9,6.2-48.4,1.5,2.9-11.7.5-27-.3-41.1,15-3.9,30.3-5.8,45.8-4.7.4,4.9.6,9.9.9,14.1Z"/><path class="cls-7" d="m87.4,127.5h.1c1,6.3,1.6,12.7,2.1,18.6-1,0-2-.1-3-.1-.6-13.3-5.2-32.5-10.6-35,6.9-.4,9.6,9.3,11.4,16.5Z"/><path class="cls-13" d="m86.6,145.9c-1.3,0-2.6-.1-3.9-.1-.3-10.7-2.9-21.1-7.3-30.8,2.2-1.5,2-3.2-.6-4.3.4,0,.9.1,1.3.2,5.3,2.5,10,21.7,10.6,35Z"/><path class="cls-11" d="m52.6,110.5c-1.4-3.7-4.4-9.6-9.7-13.3-5.6,2.7-14.1-15.1-4.2-11.1-3.5-9.3-5.1-16.4-1.7-23,3-5.7,16-2.2,24.3-5.1,7.2-2.4,9.3-8.8,15.1-.4h0c3.1,14,16.6,30.7-1.2,43.4,0,0-2.7,6.9-2.6,9.5,16,4.3-17.9,12.6-23.2,1,.1,0,2.9-.9,3-1Zm22.3-36.4c1.6-.5-.8-6.8-2.4-6.1-1.6.5.8,6.8,2.4,6.1Zm0-11.7c.5-3.3-11.3-1.4-7.6,1.6,1.6-1.3,4.7-1.8,7.6-1.6Zm-19,17.7c1.9-.6-.8-7.5-2.6-6.7-1.9.6.8,7.5,2.6,6.7Zm-1.6-12.8c-.6-3.6-12.5,2.8-7.4,4.5,1.2-2,4.3-3.6,7.4-4.5Z"/><path class="cls-12" d="m82.6,145.8h0c-1.7,0-3.3,0-5,0-.8-11-1.9-19.1-6.1-29.3,1.6-.4,2.9-1,3.7-1.5,4.4,9.7,7,20.1,7.3,30.8Z"/><path class="cls-15" d="m77.7,145.8h0c-1.8,0-3.6.1-5.4.2-.9-11.8-4.3-23.2-6.5-28.5,2.3-.2,4.3-.5,5.8-1,4.2,10.2,5.3,18.3,6.1,29.2Z"/><path class="cls-8" d="m76.4,57.6h0c-5.8-8.5-7.9-2.1-15.1.4-8.4,2.8-21.4-.6-24.3,5.1-3.4,6.6-1.8,13.7,1.7,23-5.5-2.9-5.6,3.8-2.7,6.8-15.3-13.3-11.2-31.6-8.9-36,3.4-6.6,30.2-13.8,37.3-13.8,6.8,0,9.7,6.7,12,14.5Z"/><path class="cls-6" d="m74.9,70.6c1.6,3.9-1,4.9-2.5,1-1.6-3.9,1-4.9,2.5-1Z"/><path class="cls-8" d="m74.3,61c.4,0,.6.7.6,1.4-2.9-.2-6,.3-7.6,1.6-2.8-3.3,4.9-3.5,7-2.9Z"/><path class="cls-7" d="m72.3,145.9h0c-1.8.2-3.7.3-5.5.5-.8-9.7-3.6-22.4-7.7-29.5,2.6.6,4.6.7,6.7.5,2.2,5.3,5.6,16.6,6.5,28.4Z"/><path class="cls-13" d="m59.1,117c4.1,7.1,6.9,19.7,7.7,29.5-1.8.2-3.6.4-5.5.7-1.3-16.4-3.8-24.8-11-34.3,1.7,2,5.3,3.4,8.8,4.1Z"/><path class="cls-12" d="m61.3,147h0c-1.6.4-3.2.6-4.8.9-1.3-10-3.8-31.5-14.4-34.2h0s7.4-2.3,7.4-2.3c7.4,10.4,10.6,18.3,11.8,35.6Z"/><path class="cls-6" d="m56.1,76.2c1.7,4.3-1.2,5.5-2.9,1.1-1.7-4.3,1.2-5.5,2.9-1.1Z"/><path class="cls-15" d="m42.1,113.8c10.6,2.6,13.1,24.1,14.4,34.2-1.6.3-3.3.6-5,1-.5-10.8-7.2-29.3-10.9-31.5,0,0,0,0,0,0-.9-.8-2.2-1.5-3.9-2l5.5-1.7h0Z"/><path class="cls-8" d="m53.2,66c.5,0,.9.5,1.1,1.2-3.1.9-6.2,2.5-7.4,4.5-4.4-2.2,4-5.5,6.3-5.7Z"/><path class="cls-7" d="m51.4,148.9h0c-1.3.4-2.5.7-3.9,1-1-5.9-1.5-9.5-4-15.5.3-6.2,1.3-12.6-3-16.8,3.7,2.2,10.4,20.6,10.9,31.3Z"/><path class="cls-13" d="m43.6,134.4c2.5,6,3,9.5,4,15.5-1.2.3-2.5.6-3.8.9-.3-2.2-.7-3.9-1.3-4.9.2-1.6.5-6.7,1.1-11.5Z"/><path class="cls-14" d="m40.5,117.5s0,0,0,0c6.4,5.9,1.9,21.8,2,28.4-1,8.8-14.5,2.4-17.4-2.4,1.9-6.5,3.4-34.5,15.4-25.9Z"/><path class="cls-11" d="m107.1,147.5c-.1-.6-.2-1-.6-1.5-1.8-.8-4.2-1.2-6.3-.9,0-.4-.2-.8-.3-1.2-4.2,2.3-6.4,3.5-10.2,3.5.6,12.8-.5,20.5,14.5,12.8.7.9,1.7,1.5,2.8,1.6-1.7,5.4,7.2,5.1,5.1-.4,1-.3,1.8-1,2.3-1.9,2.1,1.7,5.8,1.8,6.1-1.5,1.1-.1,2.6.6,3.5-.3,1.5-2.4,4-8.7-1.5-6.3h0c-2.2.5-4.8-1.1-3.2-3.4,1.7-2.6,6.5-3.5,7.5-6.3-4.2-1.4-9.4.2-12.8,2.9-1.9-.7-3.8-.1-5.4,1.1"/><path class="cls-11" d="m43.5,173.1c-2.6-2.6-2.9,3.5-5.3,2.3.6-1.3,1.3-3.4,0-4.5-.5-1.1-.9-2.2-1.6-3.2,0-4.9,1.9-16.7,2.4-17.7-4.8.2-8.9-.9-12.1-4.6-.3,2.9-4.4,15.9-2.8,18.6-6.8,2.3-12.9,11.1-.6,6,2.6,2.4-.9,12.5,6.2,8.1,1,2.3,4.1,1.9,5.8.5,3.6,3.3,10.8-.9,8-5.5Z"/><path class="cls-3" d="m53.2,112.6c-1.5-5.3-4.2-10.5-10.1-15.4"/><path class="cls-3" d="m50.1,112.6c-.3-.4-.5-.7-.6-1.1"/><path class="cls-1" d="m59.1,117c-3.5-.7-7.2-2.2-8.8-4.1"/><path class="cls-3" d="m74.6,110.7c8.4,5.3-11.6,8.1-15.5,6.3"/><path class="cls-3" d="m36,92.8c-15.3-13.3-11.2-31.6-8.9-36,3.4-6.6,30.2-13.8,37.3-13.8,7.4-.2,10.5,8.8,12.6,16.6,3.4,13.3,15.3,29-1.8,41.2,0,0-2.7,6.9-2.6,9.5"/><path class="cls-1" d="m72.4,71.6c1.5,3.9,4,2.9,2.5-1-1.5-3.9-4-3-2.5,1Z"/><path class="cls-1" d="m53.2,77.3c1.7,4.3,4.6,3.2,2.9-1.1-1.7-4.3-4.7-3.2-2.9,1.1Z"/><path class="cls-1" d="m42.8,97.1c.9-.5,1.3-1.8.8-2.8"/><path class="cls-3" d="m36,92.8c1.5,2.1,3.9,5.7,6.9,4.3"/><path class="cls-1" d="m38.7,86c-5.5-2.9-5.6,3.8-2.7,6.8"/><path class="cls-1" d="m63.2,84.2c1.6-2.6,7.9-6.5,9.9-2.3"/><path class="cls-3" d="m76.4,57.6c-5.8-8.5-7.9-2.1-15.1.4-8.4,2.8-21.4-.6-24.3,5.1-3.4,6.6-1.8,13.7,1.7,23"/><path class="cls-3" d="m54.3,67.3c-3.1.9-6.2,2.5-7.4,4.5-5.1-1.6,6.8-8.1,7.4-4.5Z"/><path class="cls-1" d="m52.4,110.5c-4.5,1.4-11.4,3.6-15.8,5-9.3,2.2-9.4,20.8-11.5,27.9,3.8,5.1,9.6,7.8,15.9,6.1,2.9-4.4,1.1-6.3,2.5-14"/><path class="cls-1" d="m76,111c3.9.7,11.8,2.4,13.2,4.5,3,4.3,8.6,20.2,11,29.6"/><path class="cls-1" d="m72.7,110.4c.9.1,2.2.4,3.3.6"/><path class="cls-1" d="m92.5,190.4c-15.1,5.9-32.9,6.2-48.4,1.5,1.9-3.6,1.3-17.2.9-23-.5-4.1.1-17.5-2.6-23.2"/><path class="cls-1" d="m87.5,127.4c2.7,21.4,3.9,41.9,5,62.9"/><path class="cls-1" d="m87.5,128.4c-.6-5.1-4.7-15.4-7.5-16.6"/><path class="cls-1" d="m43.7,150.8c15-3.8,30.3-5.9,45.7-4.7"/><path class="cls-1" d="m65.8,117.5c2.2,5.2,5.6,16.6,6.5,28.4"/><path class="cls-1" d="m59.1,117c4.1,7.1,6.9,19.7,7.7,29.5"/><path class="cls-1" d="m71.6,116.5c4.2,10.2,5.3,18.3,6.1,29.2"/><path class="cls-1" d="m50.1,112.6c7.3,9.6,9.8,17.9,11.2,34.4"/><path class="cls-1" d="m76,111c5.3,2.5,10,21.7,10.6,35"/><path class="cls-1" d="m42.1,113.8c10.6,2.6,13.1,24.1,14.4,34.2"/><path class="cls-1" d="m40.5,117.5c3.7,2.2,10.4,20.6,10.9,31.3"/><path class="cls-1" d="m40.5,117.5s0,0,0,0"/><path class="cls-1" d="m36.6,167.7c0-4.9,1.9-16.7,2.4-17.7"/><path class="cls-1" d="m26.9,145.4c-.3,2.9-4.4,15.9-2.8,18.6"/><path class="cls-1" d="m43.6,134.4c0,.4,0,.8-.1,1.2"/><path class="cls-1" d="m36.6,115.5c1.7.5,3,1.2,3.9,2,0,0,0,0,0,0,4.3,4.2,3.4,10.7,3,16.8"/><path class="cls-1" d="m43.6,134.3c2.5,6,3,9.5,4,15.5"/><path class="cls-1" d="m94.1,163.1c3.4,1,7.2-1.5,10.1-2.8"/><path class="cls-1" d="m107.2,148c-.1-.7-.2-1.4-.6-2-6.9-3.7-14.4,2.5-14.7,9.3-.3,1.8-1,6.6,1.9,7.6"/><path class="cls-1" d="m94.1,163.1c-2.2-.7-3-1.1-3.7-3"/><path class="cls-1" d="m89.6,147.4c3.9,0,6-1.2,10.2-3.5"/><line class="cls-3" x1="112.2" y1="161.5" x2="112.2" y2="161.5"/><path class="cls-3" d="m107.2,150c-1-3.6,3.7-6.5,6.9-5.2,3.4-2.8,8.6-4.4,12.8-3-1,2.8-5.7,3.7-7.5,6.3-1.5,2.3,1,3.9,3.2,3.3"/><path class="cls-3" d="m114.8,154.8c1.4,2.3,3.1-1.8,4.9-1.2,3.3,3.8-.4,10-5.3,5.9"/><path class="cls-3" d="m107.2,148.6c-5.3,1.2-6,12.9,0,13.3"/><path class="cls-3" d="m120.3,154.1c.5-1.1,1.4-2,2.4-2.5h0c5.4-2.4,3,3.9,1.4,6.3-.9.9-2.3.2-3.5.3"/><path class="cls-3" d="m108.3,158.5c-1.2,1.7-1.9,4.6-1,6.5,1.4,1.2,4.8,1.2,5.1-1.1.4-2-1.5-7.8-4.1-5.4Z"/><path class="cls-3" d="m112.2,161.5c1-.3,1.9-1.1,2.4-2"/><line class="cls-3" x1="38.3" y1="175.4" x2="38.3" y2="175.4"/><path class="cls-3" d="m38.3,170.9c-1.1-4.3-4.2-5.2-7.9-6.2-6.8-5.7-23.4,11.8-6.9,5.2,2.5,2.1-.5,7.4,2.9,9,3.6.7,6.3-4,7.7-6.8.3-4.5-5.2-1.3-6.5.7"/><path class="cls-3" d="m29.6,177.9c2,4.2,7.4.4,8.6-2.6,2.3-4-1.4-6.8-4.3-3"/><path class="cls-3" d="m35.2,178.4c5.4,5.2,12.9-4.7,6.7-5.8-1.5.5-1.6,3.8-3.6,2.8"/><path class="cls-1" d="m75.3,115c4.4,9.7,7,20.1,7.3,30.8"/><path class="cls-1" d="m74.9,62.4c-2.9-.2-6,.3-7.6,1.6-3.7-2.9,8.1-4.8,7.6-1.6Z"/><path class="cls-2" d="m60.7,89.6c3.9,1,8.2.5,11.8-1.3"/><rect class="cls-10" x="109.8" y="75.2" width="20.8" height="20.8" transform="translate(-25.5 61.8) rotate(-26.2)"/><polygon class="cls-9" points="33.7 1 44.4 18.8 26.6 29.6 15.9 11.7 33.7 1"/><polygon class="cls-4" points="15.9 11.7 26.6 29.6 44.4 18.8 33.7 1 15.9 11.7"/><rect class="cls-4" x="109.8" y="75.2" width="20.8" height="20.8" transform="translate(-25.5 61.8) rotate(-26.2)"/><rect class="cls-5" x="28.1" y="148.3" width="20.8" height="20.8" transform="translate(-124.5 168.1) rotate(-79.7)"/></svg>')}`;
export default image;