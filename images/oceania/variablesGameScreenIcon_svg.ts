/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="548" height="373" viewBox="0 0 548 373"><defs><style>.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-4{stroke-width:3px;}.cls-1,.cls-3{fill:none;stroke-miterlimit:10;}.cls-2{fill:#fcee21;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-4{stroke:#414042;}.cls-4,.cls-5{fill:#fff;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-5,.cls-13{stroke-width:0px;}.cls-7{fill:#5b2ac2;}.cls-8{fill:#1e160d;}.cls-9{fill:#132340;}.cls-10{fill:#cb9780;}.cls-11{fill:#00a553;}.cls-12{fill:#f51968;}.cls-13{fill:#f4fcfe;}</style></defs><rect class="cls-13" width="548" height="373"/><rect class="cls-4" x="115.6" y="106.5" width="229.6" height="229.6"/><line class="cls-1" x1="254" y1="105.9" x2="254" y2="335.5"/><line class="cls-1" x1="115.6" y1="256.2" x2="345.2" y2="256.2"/><path class="cls-2" d="m507.1,38c-4.6,3.8-9.5,11-14.6,14-4.4-.8-11.4-3.4-16.5-4.9,3.9,8,4.6,10.5,7.1,16.3-3.7,5.2-6,11.9-10.4,16.4,8.6-1.3,20.2-3.4,20.2-3.4,0,0,6.3,7.2,11.6,14.8-.8-3.6,2.8-12.1,1.8-16.4,3.1-1.3,11.1-5.4,17.8-6.3-5.2-3.5-16.1-9.7-16.1-9.7,0,0-.3-13-1-20.9"/><path class="cls-11" d="m169.1,83.7c.5-.4,1.1-.6,1.7-.6s.5,0,.8.1c.3,0,.6.2.9.4l1.2.6c.2,0,.3.2.5.2.1,0,.3,0,.5,0,.6,0,1-.1,1.3-.4.3-.3,1.1-1.3,2.4-3,.8-1.1,2.8-3.8,5.7-8.2,0-.2-.3-1.4-.8-3.7-.5-2.3-1-4.2-1.4-5.8-.4-1.6-.8-2.7-1.2-3.2-.3-.5-1-.8-1.9-.8s-.9.1-1.9.3c-.6.1-1.2.3-1.9.5l-.3-1.1,3.8-1.3c1-.3,1.9-.6,2.7-.8.8-.2,1.5-.3,2.1-.3,1,0,1.7.3,2.2.9.7.9,1.3,2.7,1.8,5.4l.7,3.9c2.1-3.1,3.6-5.4,4.8-6.6,1-1.2,2-2,2.9-2.6.9-.6,1.8-.9,2.6-.9s1.4.1,1.9.3c.9.4,1.3,1.2,1.3,2.3s-.2,1.4-.7,1.8c-.4.4-1,.6-1.7.6s-.5,0-.7,0c-.2,0-.5-.1-.7-.3l-.9-.4c-.3-.1-.5-.2-.7-.3s-.4-.1-.5-.1c-1,0-2.4,1.3-4.3,4-1.8,2.7-2.7,4.2-2.7,4.6s.2,1.5.6,3.3c.4,1.9.9,3.9,1.4,6,.5,2,.8,3.3,1.2,4.1.5,1.2,1.1,1.8,1.8,1.8s1.2-.3,1.9-1,1.6-1.9,2.9-3.7l1,.6c-1,1.8-2,3.3-3,4.5-2,2.4-3.9,3.6-5.7,3.6s-2-.5-2.7-1.6c-.4-.6-.8-1.7-1.1-3.1l-2.1-8.4-7,9.2c-1.4,1.6-2.4,2.7-3.2,3.2-.7.5-1.7.8-2.8.8s-2.4-.5-3-1.4c-.3-.5-.4-1-.4-1.7s.3-1.5.8-1.9Z"/><path class="cls-6" d="m182.4,190.2c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m299.1,190.2c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4,4.4,5.9,4.4,9.7-.5,4.2-1.5,6-3,4.1-6,6.7c-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m299.1,308.3c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m182.4,308.3c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-7" d="m60,198.4c.5-.4,1.1-.6,1.7-.6s.5,0,.8.1c.3,0,.6.2.9.4l1.2.6c.2,0,.3.2.5.2.1,0,.3,0,.5,0,.6,0,1-.1,1.3-.4.3-.3,1.1-1.3,2.4-3,.8-1.1,2.8-3.8,5.7-8.2,0-.2-.3-1.4-.8-3.7-.5-2.3-1-4.2-1.4-5.8-.4-1.6-.8-2.7-1.2-3.2-.3-.5-1-.8-1.9-.8s-.9.1-1.9.3c-.6.1-1.2.3-1.9.5l-.3-1.1,3.8-1.3c1-.3,1.9-.6,2.7-.8.8-.2,1.5-.3,2.1-.3,1,0,1.7.3,2.2.9.7.9,1.3,2.7,1.8,5.4l.7,3.9c2.1-3.1,3.6-5.4,4.8-6.6,1-1.2,2-2,2.9-2.6.9-.6,1.8-.9,2.6-.9s1.4.1,1.9.3c.9.4,1.3,1.2,1.3,2.3s-.2,1.4-.6,1.8-1,.6-1.7.6-.5,0-.7,0c-.2,0-.5-.1-.7-.3l-.9-.4c-.3-.1-.5-.2-.7-.3-.2,0-.4-.1-.5-.1-1,0-2.4,1.3-4.3,4-1.8,2.7-2.7,4.2-2.7,4.6s.2,1.5.6,3.3c.4,1.9.9,3.9,1.4,6,.5,2,.8,3.3,1.2,4.1.5,1.2,1.1,1.8,1.8,1.8s1.2-.3,1.9-1c.6-.7,1.6-1.9,2.9-3.7l1,.6c-1,1.8-2,3.3-3,4.5-2,2.4-3.9,3.6-5.7,3.6s-2-.5-2.7-1.6c-.4-.6-.8-1.7-1.1-3.1l-2.1-8.4-7,9.2c-1.4,1.6-2.4,2.7-3.2,3.2-.7.5-1.7.8-2.8.8s-2.4-.5-3-1.4c-.3-.5-.4-1-.4-1.7s.3-1.5.8-1.9Z"/><path class="cls-7" d="m82.4,320.6h-6.2v-39.2c-1.5,1.4-3.4,2.8-5.8,4.2-2.4,1.4-4.6,2.5-6.5,3.2v-5.9c3.4-1.6,6.4-3.6,9-5.9,2.6-2.3,4.4-4.5,5.5-6.7h4v50.3Z"/><path class="cls-11" d="m318.3,82v5.9h-33.1c0-1.5.2-2.9.7-4.3.8-2.3,2.2-4.5,4-6.7s4.5-4.7,8-7.6c5.4-4.5,9.1-8,11-10.6,1.9-2.6,2.9-5.1,2.9-7.4s-.9-4.5-2.6-6.2c-1.7-1.7-4-2.5-6.8-2.5s-5.3.9-7.1,2.7c-1.8,1.8-2.7,4.2-2.7,7.4l-6.3-.6c.4-4.7,2.1-8.3,4.9-10.8,2.8-2.5,6.6-3.7,11.4-3.7s8.6,1.3,11.4,4c2.8,2.7,4.2,6,4.2,9.9s-.4,4-1.2,5.9c-.8,1.9-2.2,4-4.1,6.1-1.9,2.1-5.1,5.1-9.5,8.8-3.7,3.1-6.1,5.2-7.1,6.3-1,1.1-1.9,2.2-2.6,3.3h24.6Z"/><path class="cls-9" d="m435.9,270c-21.7,5-42.2-6.6-60.2-16.2,4.6-11,16.1-30.4,24.4-48.1,7.7,4,17.4,5.3,25.8,4.1,2.1-.7,4.6-4.6,5.5-6.2,5.8,7.3,4.2,7.4,15.3,4.2-2,22.7-2.6,46.4-5.4,60.8-1.5.6-3.3,1-5.5,1.4Z"/><path class="cls-5" d="m449,186.9c0,.4,0,.9.1,1.3-2.1-1.5-6.5-4.4-8.6-5.9-2.1.9-8,5.5-9.5,6,0-1.5-.1-3.2-.3-5.1,2.7-1.2,7-4.5,9.3-6.3,2.2,1.6,6.3,5.6,8.5,7.3,0,0,0,0,0,0,0,.9.2,1.8.3,2.7Z"/><path class="cls-9" d="m352.7,304.4c.8-1.3,1.4-4.1,1.6-5.9.4,1,.9,2,1.6,2.9h0c-.5,3.5-.2,6.1-1,7.6-.8-.9-1.5-2.5-2.2-4.5Z"/><path class="cls-9" d="m366.4,321.2c-2.5-2.6-4.2-3.1-7.7-5.3-11.4-7.2-9.4-22.8-14.9-23.3.8-.3,1.6-.6,2.4-.9v.2c3.9.2,5.6,13.2,8.6,17,6.8,9.3,22.8,11.2,13.8,21.6,3.1-2.7.9-6.1-2.3-9.3Z"/><path class="cls-9" d="m416.8,328.4c1.8,1.9,7.1,6.9,9.4,8,3.5,1.4,18.9,1.7,21.5-4.2,0,1.3-.2,2.7-.8,3.8v.2c-4.3,4.7-17.4,7-23.8,1.3-6.2-6.5-7-8.3-13.6-11,0,0-.5-1.4,0-3.1,1.4,1.6,6.7,4.3,7.4,5Z"/><path class="cls-5" d="m406,188.4c-.2-1.3-.4-2.4-.7-3.3,4.9-3.2,8.7-6.3,14.1-8.7,3.8,2,7.5,4.8,11.3,6.8h0c.1,1.9.2,3.6.3,5.1-17.1-8.6-7.1-7-28.6,3.9h-.1c0-.3,0-.5.1-.8,1.9-1,3.2-2.2,3.5-3.1Z"/><path class="cls-5" d="m443.3,193.1c.9.6,4.8,3.5,5.9,4.6,0,.7,0,1.5-.2,2.3-1.2-.4-8.9-6.8-5.7-6.9Z"/><path class="cls-8" d="m408.9,78.8c2.3-.2,1.9,2.7.3,3.4,0-.1-.8.3,0-.2-3.1-.1-5.7.7-8.5,1.6-2.5-4.4,5.4-4.5,8.2-4.8Z"/><path class="cls-9" d="m339.1,299c8.6-19.6,6.8,9.3,19.6,16.9,3.5,2.2,5.1,2.7,7.7,5.3,8.8,6.8-.8,15.8-6.3,8.7-2.2-3.2-2.4-4.6-4.4-7.5-5.7-6.8-20.4-11.2-16.6-23.4Z"/><path class="cls-5" d="m463.2,128.9c-.3,5.2-.1,8.4-2.5,13.7-1.7.4-3.3.6-4.9.7,2-5.5,1.5-10.8,2.3-16,1.6.3,3.3.6,5.1.8,0,.3,0,.6,0,.9Z"/><path class="cls-5" d="m456.4,128.1c1.9,2.2-4.3,1.5-5.3,1-2.8-2.1,4.6-2.2,5.3-1Z"/><path class="cls-5" d="m455.2,130.9c2.7.9-3,3.5-4,3.6-3.6-.4,2.8-4.2,4-3.6Z"/><path class="cls-5" d="m449.3,191.4c0,.8,0,1.7,0,2.6h0c-1.9-1.5-5.4-4.4-6.8-5.9-1.2-4,5.8,2.7,6.8,3.3h0Z"/><path class="cls-5" d="m448.7,203.4c0,.4-.1.8-.2,1.2-1.1.4-2.1-1.4-3.1-1.9-1.1-1.1-4.3-3.2-2-3.7,1.4.9,3.9,3,5.3,4.4Z"/><path class="cls-5" d="m447.6,175.4c.1,1.2.3,2.3.4,3.5-1.9-1-8.5-7.2-8.5-7.2,0,0-7.2,4.2-9.1,5.4-.1-1.7-.3-3.4-.4-5.1,0,0,0,0,.1.1,2.2-2.4,8.8-6.3,9.3-6.3s5.5,4.4,7.9,6.6c0,1,.2,2,.3,2.9Z"/><path class="cls-5" d="m444.1,148.2c1,4.1,1.7,8.7,2.2,12.8-4.9-3.1-10.5-6.6-15.5-9.8,4.9-.4,8.8-1,13.2-3Z"/><path class="cls-5" d="m445.4,124.7v.3c-5.3,3.7-4.9,10.6-6.8,15.6-2.1-1.8-4.3-3-6.9-4.3.2-.7.4-1.5.5-2.2,1.6.6,3.1,1.4,4.5,2.3.6-3.8,1.9-9.3,5.6-12h0c1.1,0,2.1.1,3.1.3Z"/><path class="cls-5" d="m439.5,186.6c2.9,1.6-5.2,6.9-5.9,8-4.2.7,4.9-7.7,5.9-8Z"/><path class="cls-5" d="m439.4,198.4c2.6,1.4-4.6,6.3-5.3,7.4-3.7.5,4.3-7,5.3-7.4Z"/><path class="cls-5" d="m438.8,193c2.9,1.6-5.2,6.9-5.9,8-4.2.7,4.9-7.7,5.9-8Z"/><path class="cls-9" d="m439,322.6l.4,8.3h-.3c-5.8-1.2-12.3.2-17.9,1.7-1-.8-2-1.7-2.2-3,5.4-3.5,18.8,1.3,16.4-8.6,1.2.4,2.5.9,3.7,1.4,0,0,0,.2,0,.2Z"/><path class="cls-8" d="m436.5,77.8c-3.2-15-12.9-15.8-23.7-15.1-18.8,1.5-22,14.1-20,26.6-.1,1.5-2.5,2.5-3.5-.7-.8-1.9-3.3-1.6-4.7-.8-2-23.9-1.2-37,26.9-37.8,24.5-3.4,26.2,15.3,27.2,31.6-.5,0-1,0-1.7.1-.3-3.3-.3-.9-.5-4Z"/><path class="cls-5" d="m436.4,160c6.1-.8-.9,4.6-3.4,4.3-4.3-.7,1.6-4.1,3.4-4.3Z"/><path class="cls-5" d="m434.7,157c1.7,1.2-2.2,3.3-3.3,2.3-1.2-1.5,2.2-3.2,3.3-2.3Z"/><path class="cls-5" d="m434.7,124c-.3,2.2-1.8,4.4-2,6.8-2.3-2.9-4.5-5.2-7.6-7.3,3.1-1,5.6-.6,8.8-1,.5.5.7,1,.7,1.5Z"/><path class="cls-5" d="m431.7,136.3c-.6,1.6-1.3,4.5-3.3,4.6v-.4c-1.8-3-3.1-6.2-3.8-9.6,2.9.4,5.2.4,8.1-.1-.3,1.8-.6,3.7-1.1,5.5Z"/><path class="cls-8" d="m431.9,77.6c.2.5,0,1.8-.2,2.3-1.3-.8-6-.3-7.1.3-3.5-4,5.6-4.7,7.4-2.6Z"/><path class="cls-5" d="m431,199.2c-.5,3.7-8.7-3.9-9.9-4.3-2-4.4,9.3,3.3,9.9,4.3Z"/><path class="cls-5" d="m430.9,192.9c-.8,3-4.1-.7-5.7-1.3-1.8-1.2-7.3-4-3.4-4.4,2.3,1.2,7.1,3.6,9.1,5.7Z"/><path class="cls-6" d="m430.4,86.4c.5,4.1-2.7,4.4-3.2.4-.5-4.1,2.7-4.4,3.2-.4Z"/><path class="cls-5" d="m430.4,177.1c0,0-.1,0-.2,0,0,0-10.3-6.3-11.3-6.7,0,0-12,7.9-15.8,10.1,0-.1-.2-.2-.3-.3-.1-2-.3-3.9-.4-5.7,4.3-2.6,14.9-9.2,16-9.2,1.1,0,8.9,4.5,11.6,6.6.2,1.7.3,3.4.4,5.1Z"/><path class="cls-5" d="m430.4,205c-.8,3.3-8.3-3.3-9.7-3.7-1.9-4,9.1,2.8,9.7,3.7Z"/><path class="cls-5" d="m426.9,158c2.5,4.1-8.4.3-3.4-.9.9,0,2.8.2,3.4.9Z"/><path class="cls-5" d="m426.7,105.6h0c-1.8,9.3-16.7,4.4-16.9,1.6,4.7.8,12.9,1,16.8-1.6Z"/><path class="cls-5" d="m422.5,161.4c.7.2,5.3,2.1,3.9,3.6-1.8,1.3-9-3.8-3.9-3.6Z"/><path class="cls-5" d="m416.5,187.3c4.9,1.4-9,7.9-9.6,8.8-6.8.8,8.2-8.5,9.6-8.8Z"/><path class="cls-5" d="m417.2,201c-1.4,2.8-7.6,5.5-9.6,7.2-5.5.3,4.8-5.7,6.1-6.7.9-.7,2.9-2.3,3.5-.5Z"/><path class="cls-5" d="m410.1,138.8c-1.2-.7-2.3-1.5-3.4-2.3v-.2c3.3-.7,6.5-1.5,9.7-2.3.3,2.7.8,5.6.4,8.3-2.3-1-4.6-2.2-6.7-3.5Z"/><path class="cls-5" d="m415.2,194.3c4.9,1.4-9,7.8-9.6,8.8-6.8.8,8.2-8.5,9.6-8.8Z"/><path class="cls-5" d="m400.7,163.3c-.7-4.3-2.4-8.9-3.3-13.9,2,.3,3.6.8,4.4,1.7,7.9,1,13.5,1,21.4.5-7.9,5.6-13.1,11.2-22,15.2-.2-1.1-.4-2.3-.6-3.4Z"/><path class="cls-5" d="m408.7,137.9c.5.3,1,.6,1.5.9-2.6,2.4-4.9,5.1-6.8,8-3.8-6.7-11.7-14.4-18.4-18v-.2c1.6-.5,3.3-.9,4.8-1.3v.4c4.1,3.3,10.7,8.9,13.1,14,2.2-.9,4.2-2.2,5.8-3.9Z"/><path class="cls-6" d="m408.5,89.1c.6,4.7-3.4,5.1-3.9.5-.6-4.7,3.4-5.1,3.9-.5Z"/><path class="cls-5" d="m407.1,126.1c-.2,3.5,0,6.7-.2,10.2v.2c-3.7-2.6-6.9-5.7-9.6-9.2l.3-.2c3.3-.4,6.2-.5,9.5-1Z"/><path class="cls-12" d="m445.4,124.7v.3c-5.3,3.7-4.9,10.6-6.8,15.6-2.1-1.8-4.3-3-6.9-4.3-.6,1.6-1.3,4.5-3.3,4.6v-.4c-1.8-3-3.1-6.2-3.8-9.6,2.9.4,5.2.4,8.1-.1,0,0,0,0,0,0-2.3-2.9-4.5-5.2-7.6-7.3,3.1-1,5.6-.6,8.8-1-.4-.4-6-.6-9.8-1.5,1.2,5.7.1,12.8-2.3,16.7-3.9-2.7-11.7-8.2-14.8-11.6-.2,3.5,0,6.7-.2,10.2,3.2-.7,6.4-1.5,9.6-2.3.3,2.7.8,5.6.4,8.3-2.3-1-4.6-2.2-6.7-3.5-2.6,2.4-4.9,5.1-6.8,8-3.8-6.7-11.7-14.4-18.4-18v-.2c-4.9,1.4-9.9,3.1-14.3,5.1,5.3,3.3,8.6,9.7,8.1,16,7.5,0,17.2-2.3,23.2,1.4,7.9,1,13.5,1,21.4.5-7.9,5.6-13.1,11.2-22,15.2.4,2.6.8,5.2,1,8,4.3-2.6,14.9-9.2,16-9.2,1.2,0,9.1,4.6,11.8,6.8,2.2-2.4,8.8-6.3,9.3-6.3s5.5,4.4,7.9,6.6c-.3-3.6-.4-6.5-1-11.6h0c-4.9-3.1-10.5-6.6-15.5-9.8,4.9-.4,8.8-1,13.2-3-.3-1.2-.6-2.3-1-3.4,4.7-1.7,8.6-1.3,12.8-1.6,2-5.5,1.5-10.8,2.3-16-4.7-.8-8.7-1.8-12.8-2.5Zm-68.6,9.6c-3.4-1.2,3.7-3.5,4.7-2.6,2.5,1.5-3.7,2.7-4.7,2.6Zm.9,3.4c-2.4-2.7,4.9-1.3,5.4,0,1.4,2.5-4.6.6-5.4,0Zm48.8,27.4c-1.8,1.3-9-3.8-3.9-3.6.7.2,5.3,2.1,3.9,3.6Zm-.8-5.1c-1.6.2-5.4-2.3-2.2-2.8,2.1-.4,6.3,2.1,2.2,2.8Zm10.7,0c6.1-.8-.9,4.6-3.4,4.3-4.3-.7,1.6-4.1,3.4-4.3Zm-3-3.3c3.9-.2,0,3.9-2,2.5-1-1,1.1-2.4,2-2.5Zm17.8-22.2c-3.6-.4,2.8-4.2,4-3.6,2.7.9-3,3.5-4,3.6Zm0-5.4c-2.8-2.1,4.6-2.2,5.3-1,1.9,2.2-4.3,1.5-5.3,1Z"/><path class="cls-12" d="m445.3,190.8c-1.2-1.1-4.7-3.7-2.2-4,1,.6,5,3.6,6.1,4.7h0c0-1.1,0-2.2-.2-3.3-2.1-1.5-6.5-4.4-8.6-5.9-15.1,9.6-6.1,5.7-21.2.2-1.2.5-13.4,8-16.9,9.7h-.1c-1,5.7-2.7,11.7-3.2,12.8,7.8,4.6,18,5.9,26.8,4.8,2.1-.7,4.6-4.6,5.5-6.2.5,0,3.9,5.6,5.1,6.1,1.3.4,8.7-.9,11.5-2.5.2-.9.3-1.8.5-2.6-1.1.4-2.1-1.4-3.1-1.9-1.1-1.1-4.3-3.2-2-3.7,1.4.9,3.9,3,5.3,4.4.2-1.2.3-2.3.4-3.5-7.6-4.8-9.7-11.3.2-2.3,0-1.3.1-2.5.1-3.7h0c-.8-.7-3.2-2.6-3.9-3.2Zm-23.5-3.6c.8.7,12.5,5.7,8,6.9-1.3-.3-13.1-6.8-8-6.9Zm-16.5,7.5c1-.5,12.5-10.7,12.3-6-.9,1.2-14.4,11-12.3,6Zm-1.3,7c1-.5,12.5-10.7,12.3-6-2.5,2.5-8.3,5.8-10.8,7.4-1,.6-2.5-.5-1.6-1.3Zm13.1-.3c-.9,1.1-12.7,10.1-11,5.5,1-.5,11.1-9.8,11-5.5Zm13,4.2c-1.6,1.3-3.6-1.2-5.2-1.7-1.7-1.1-6.9-3.5-3.2-3.9.9.6,9.8,4.1,8.5,5.6Zm-.2-5.3c-1.3-.4-12.8-6.8-7.8-6.9.8.7,12.2,5.7,7.8,6.9Zm1.9-.6c.7-.6,7.7-9.8,7.6-5.5-.6,1.1-8.7,10.1-7.6,5.5Zm7.8.5c-1.4,1.5-4.3,4.4-5.5,5.5-3.4.2,3-5.2,3.8-6.2.3-.3,1.1-1.3,1.5-1.2.7.1.9,1.5.2,1.9Zm.2-11.7c-1.2.9-7.8,9.1-7.2,4.7.5-.8,9.5-10.9,7.2-4.7Z"/><path class="cls-12" d="m432.8,130.8c-.2,1.1-.4,2.2-.6,3.3,1.6.6,3.1,1.4,4.5,2.3.6-3.8,1.9-9.3,5.6-12h0c-2.3-.4-4.8-.5-7.5-.5-.3,2.2-1.8,4.4-2,6.8h0s0,0,0,0Z"/><path class="cls-12" d="m430.8,183.2c2.8-1.2,7.1-4.5,9.4-6.4,2.2,1.6,6.3,5.6,8.5,7.3h0c-.2-1.8-.4-3.5-.7-5.2-1.9-1-8.5-7.2-8.5-7.2-.1,0-7.3,4.3-9.3,5.5,0,0-10.3-6.3-11.3-6.7,0,0-12,7.9-15.8,10.1,1,1,1.6,2.2,2.2,4.4,4.9-3.2,8.7-6.3,14.1-8.7,3.8,2,7.5,4.8,11.3,6.8Z"/><path class="cls-12" d="m405.4,123.5c0-1.6-.2-2.6-.4-4.1-2.2,2.2-9.6,3.1-8.6,6.8-2,.2-4.2.6-6.6,1.2v.4c4.1,3.3,10.7,8.9,13.1,14,2.2-.9,4.2-2.2,5.8-3.9-4.3-2.9-8.3-6.5-11.5-10.6l.3-.2c3.3-.4,6.2-.5,9.5-1-.9-.9-1.4-1.7-1.4-2.3l-.3-.4Z"/><path class="cls-10" d="m439.1,322.4c0,2.8.3,5.7.3,8.5h-.3c-5.8-1.2-12.3.2-18,1.7,4.8,6.2,21.4,6.7,26.5-.4-.3-4.8-4.4-8.1-8.6-9.8Z"/><path class="cls-10" d="m346.3,291.7v.2c2.9.1,4.6,7.3,6.4,12.4,3.2-5.3,1-15.7-6.4-12.7Z"/><path class="cls-10" d="m469.7,130.1c-2.2-.6-3.3-.7-6.5-1.3-.3,5.2-.1,8.4-2.5,13.7h.2c-3.2,8.7-5.3,24.3-6.3,25.6-1.8,2.5-5.7,3.5-6.8,7.2h-.3c.3,3,.8,5.8,1.1,8.7h0c0,.9.2,1.8.3,2.7,5.5,2,12.2.3,12.8-6.3,0,0-.7-.2-.8-.3-2.1-.2-.3,2.1-2.2,2.4,2.7-3.7-.8-7.6.9-11h0c6.5-8.7,23.4-34.9,10-41.5Z"/><path class="cls-10" d="m421.4,137.3c.3.2.5.3.5.3,2.5-4,3.5-11.1,2.3-16.7-.6-.1-1.2-.3-1.7-.5,7.1-4.7,12.9-13.5,14.5-23,3,.9,7.1-18.1,0-15.7-.7-15.9-12.1-20.9-24.2-19-18.8,1.5-22,14.1-20,26.6-.1,1.5-2.5,2.5-3.5-.7-2-3.3-7.7-.4-6.4,3.4.9,4.1,3.7,12,8.7,11.1,3.4,8.7,9.7,10.8,13,13.1.6,2.9.3,5,1,7.6,2.3,4.8,11.3,10.1,15.7,13.5Zm7.8-47.7c-2,.3-2.8-6.1-.7-6.3,2-.3,2.8,6.1.7,6.3Zm-5.2-12.1c2.1-1.6,9.7-2,7.6,2.3-1.3-.8-6-.3-7.1.3-.7-.6-1.1-1.9-.5-2.6Zm-17.1,15.4c-2.5.4-3.4-7-.8-7.2,2.5-.4,3.4,7,.8,7.2Zm2.3-11c-3.1-.1-5.7.7-8.5,1.6-4.2-4.9,15-7.1,8.5-1.4,0-.1-.8.3,0-.2Zm.7,25.3c4.7.8,12.9,1,16.8-1.7h0c-1.8,9.3-16.7,4.4-16.9,1.7Z"/><path class="cls-10" d="m431.4,327.5c3.7.5,4.7-3.5,4-6.4-4.4-1.5-9.4-2.9-12.3-6.7,6.3-21.5,9.7-26,12.8-44.3-4.8.8-10.9,1.2-16.8.8-2.5,10.3-4.7,29.4-6.9,42.5h0c-6.9,14.1-.8,8.9,7.1,17.6l-.5-1.4c4-1.4,8.2-2.1,12.4-2.2Z"/><path class="cls-10" d="m403.2,180.7c-1.4-1.4-4.8-3.4-7.9-5.8,0,0,0,0,0-.1-8.7-8-14.6-16.9-24.8-24,2.1-1.1,2.5-1,2.5-1-.9-5.4-3-8.5-7.4-12.8-9.2,5.8-18.7,12.1-8.1,21.2,9.4,8.1,23.3,16.6,32.2,22.9h0c2,1.7,1.6,3.1,2,4.8-1.8-.9-1.7.2-1,1.7,2.9,7.3,7.4,5.7,11.7,3.8,5.6-2,2.9-8,.7-10.8Z"/><path class="cls-10" d="m379,263c-6.8,10.1-11.1,28.1-13.9,36.6-5,8.7-6,6.1-9.2,1.7h0c-.5,3.5-.2,6.1-1,7.6,7.8,9.4,13.1,7.2,16.6,16.3.4-4.8-2.5-10.4.4-14.1h0c6.9-12.2,18.5-33.8,24.4-47.1-5.1-2.4-10.2-4.7-14.6-7-1,2.6-1.9,4.9-2.7,6Z"/><path class="cls-5" d="m383,137.7c1.4,2.5-4.6.6-5.4,0-2.4-2.7,4.9-1.3,5.4,0Z"/><path class="cls-5" d="m381.5,131.7c2.5,1.5-3.7,2.7-4.7,2.6-3.4-1.2,3.7-3.5,4.7-2.6Z"/><path class="cls-5" d="m365.7,137c-.2-.1-.3-.3-.5-.5,1.6-1,3.5-1.9,5.5-2.8,5.3,3.3,8.6,9.7,8.1,16-2.3.1-4.3.2-5.7.2-.9-5.4-3-8.5-7.4-12.8Z"/><path class="cls-3" d="m446.8,208c-2.2,22.7-2.6,46.3-5.4,60.6-10.7,3.4-29.1,3.6-38.9-1.7"/><path class="cls-3" d="m402.5,266.9c-8.9-4.3-18.6-8.4-26.8-13.1,4.6-11,16.1-30.4,24.5-48.2"/><line class="cls-3" x1="426.8" y1="209.9" x2="426.8" y2="209.4"/><line class="cls-3" x1="400.7" y1="163.3" x2="401.1" y2="163.2"/><path class="cls-3" d="m463.2,128.9h0"/><line class="cls-3" x1="460.8" y1="142.5" x2="461" y2="142.6"/><line class="cls-3" x1="397.4" y1="149.8" x2="397.5" y2="149.4"/><line class="cls-3" x1="459.7" y1="171.6" x2="459.7" y2="171.6"/><line class="cls-3" x1="449" y1="186.9" x2="449.1" y2="186.8"/><line class="cls-3" x1="447.6" y1="175.4" x2="447.9" y2="175.4"/><line class="cls-3" x1="404.9" y1="119.9" x2="405" y2="120.2"/><line class="cls-3" x1="404.2" y1="116.5" x2="404.4" y2="116.4"/><line class="cls-3" x1="389.8" y1="181.1" x2="389.9" y2="181"/><path class="cls-3" d="m446.4,161c1,9.1,1.1,14.7,2.4,23.1h0c1,7.7.8,15.5-.7,23.1"/><path class="cls-3" d="m439.9,138.6c4.5,5.7,5.4,15.2,6.4,22.4"/><path class="cls-3" d="m402.5,191.5c-.8,5.4-2.8,12.7-3.4,13.6"/><path class="cls-3" d="m397.4,149.8c3.1,10.7,4.8,19.7,5.4,30.6"/><path class="cls-3" d="m434.3,124c10.1-.4,18.8,2.7,28.9,4-.3,5.5,0,9-2.5,14.6-6.2,1.5-11.2-.2-17.7,2.2"/><path class="cls-3" d="m401.9,151c-7.5-4.3-20.2-.7-28.9-1.2"/><path class="cls-3" d="m396.4,126.1c-10.5,1.5-22.1,5.2-31.2,10.4,4.5,4.3,7,7.8,7.9,13.3"/><path class="cls-3" d="m463.3,128.9c3.2.6,4.2.6,6.4,1.3"/><path class="cls-3" d="m463.3,138.1c-5.1,7-7.2,28.3-8.6,30-1.8,2.5-5.7,3.5-6.8,7.2"/><path class="cls-3" d="m469.7,130.1c6.7,2.1,5.3,11.7,2,21.5-2.7,8-8.8,14.2-12.5,20.8"/><path class="cls-3" d="m365.8,136.9c-9.2,5.8-18.9,12.1-8.2,21.3,9.4,8.1,23.3,16.6,32.2,22.9"/><path class="cls-3" d="m368.5,149.4c11.6,7.3,18.3,17.8,28.1,26.5"/><path class="cls-3" d="m373,149.8s-.4-.2-2.5,1"/><path class="cls-3" d="m389,180.4c4.1,2.7,1.3,6,5,9"/><path class="cls-3" d="m395.2,174.8c6.4,4.7,10.3,6.1,10.8,14"/><path class="cls-3" d="m391.9,185.9c-4.2-2.2,1.5,6.5,2.7,6.9,4.3.5,10.1-1.2,11.4-4.8"/><path class="cls-3" d="m449.1,186.8c5.5,2.1,12.2.2,12.6-6.3,0,0-.7-.2-.8-.3-2.1-.2-.3,2.1-2.2,2.4,2.7-3.7-.8-7.6.9-11"/><path class="cls-3" d="m405.4,123.5c-.2-2.6-.4-4.4-.8-7.2"/><path class="cls-3" d="m381.9,256.5c-6.8,12.8-14,31.6-16.8,43.2"/><path class="cls-3" d="m396.6,263.4c-6.1,13.4-17.7,35.3-24.8,47.7"/><path class="cls-3" d="m412.2,313.4c2.2-13.5,4.5-32.4,7-43.1"/><path class="cls-3" d="m436,269.4c-3.1,18.5-6.5,23.3-12.9,44.9"/><path class="cls-3" d="m423.1,314.3c3.8,5,10.5,5.8,15.9,8.1h0c5.4,1.9,10.8,7.8,7.8,13.6"/><path class="cls-3" d="m343.4,292.6c-4.6,2.2-6,10.8-3.5,15.5,2.8,6.9,12.2,8.9,15.8,14.3,2.9,5.4,7.6,15.2,13.8,7.1,2.7-5.6-6-10.8-10.8-13.6-11.7-7.3-9.1-23.2-15.3-23.4"/><path class="cls-3" d="m371.9,311.1c-4.1,5.4,3.4,14.6-3.2,19.5"/><path class="cls-3" d="m342.3,293.4c4.2-2.2,10.9-4.3,11.6,3.4"/><path class="cls-3" d="m371.6,325.3c-3.5-9.2-8.8-6.9-16.7-16.4-3.1-3.8-4.7-16.8-8.6-17"/><path class="cls-3" d="m365.1,299.7c-2.6,5.8-5.8,6.1-6.2,5.6-1.6-2.2-4.7-5.2-5-8.5"/><path class="cls-3" d="m412.3,313.4c-4.5,10.5-5,9.1,4.5,15,1.8,1.9,7.1,6.9,9.4,8,3.5,1.4,18.9,1.7,21.5-4.2"/><path class="cls-3" d="m447,336.2c-4.4,4.7-17.5,7-23.9,1.3-6.2-6.5-7-8.3-13.6-11,0,0-.5-1.4,0-3.1"/><path class="cls-3" d="m421.6,332.5c4.4-1.6,25.3-5.5,16,4.1"/><path class="cls-3" d="m418.8,329.7c5.5-3.6,19,1.3,16.6-8.7"/><path class="cls-3" d="m439,322.6l.4,8.3"/><path class="cls-3" d="m354.4,298.1c-.2,1.9-.8,4.9-1.7,6.3"/><path class="cls-3" d="m355.8,301.4c-.5,3.4-.2,6-1,7.5"/><path class="cls-3" d="m424.1,121.3c1.6,5.6,0,12.5-2.3,16.4-4.6-3.5-13.8-8.8-16.2-13.8"/><path class="cls-3" d="m448,207.2c-2.8,1.6-10.2,2.9-11.5,2.5-1.2-.5-4.6-6.1-5.1-6.1-.9,1.6-3.3,5.4-5.5,6.2-8.8,1.1-19.1-.1-26.8-4.8"/><path class="cls-3" d="m421.4,137.3c-1.6,1.5-2.8,3.4-3.7,5.4-8.5-3.6-16.6-9.3-21.6-17.1.7-3.5,6.4-4,9-6.3"/><path class="cls-3" d="m421.9,137.7c8.9,16.7,9.3,49.4,9.6,66"/><path class="cls-3" d="m422.1,137.1c2.1,1.3,4.4,2.8,6.5,3.9,3.3-1.9,3.3-6.8,4.1-10.2,0,0,0,0,0,0,4.3-12.6.3-6.8-10.3-10.4"/><path class="cls-3" d="m401.9,151c7.9,1,13.5,1,21.4.5-7.8,5.7-12.9,10.6-21.4,15.1"/><path class="cls-3" d="m444.4,148c-4.5,2.1-8.5,2.7-13.5,3.1,5,3.2,10.6,6.7,15.5,9.8h0"/><path class="cls-3" d="m402.1,174.8c4.3-2.6,15.1-9.3,16.3-9.4,1.2,0,9.1,4.6,11.8,6.8,2.2-2.4,8.8-6.3,9.3-6.3.5,0,6,4.8,8.3,7"/><path class="cls-3" d="m402.9,180.8c3.8-2.2,15.9-10.2,16-10.3,1.1.3,11.3,6.7,11.3,6.7,2-1.2,9.2-5.5,9.3-5.5.1,0,6.7,6.2,8.6,7.3"/><path class="cls-3" d="m405.2,185.1c5-3.2,8.8-6.4,14.2-8.7,3.8,2,7.5,4.8,11.3,6.8,2.8-1.2,7.1-4.5,9.4-6.4,2.2,1.6,6.3,5.6,8.5,7.3"/><path class="cls-3" d="m402.5,192.3c3.5-1.7,15.7-9.2,16.9-9.7,15.1,5.5,6.1,9.4,21.2-.2,2.1,1.5,6.5,4.4,8.6,6"/><path class="cls-3" d="m413.8,188.8c1-.9,4-2.6,3.9,0-2.5,2.5-8.3,5.8-10.8,7.4-6.1.3,5.4-6.2,6.9-7.3Z"/><path class="cls-3" d="m412.4,195.7c1-.9,3.9-2.6,3.9,0-2.5,2.5-8.3,5.8-10.8,7.4-6.1.3,5.4-6.2,6.9-7.3Z"/><path class="cls-3" d="m406.7,208.3c-3.8-.7,8.1-7.7,9.3-8.2,3.3,1.4-2.4,3.6-3.5,4.8-2.2,1.3-4.4,3.3-5.8,3.4Z"/><path class="cls-3" d="m429.1,191.4c1.3.5,3,2.1.8,2.7-2.7-.9-7-4.2-9-5.4-1.4-4.2,6.9,2,8.2,2.7Z"/><path class="cls-3" d="m429.2,197.7c1.2.5,3,2.1.8,2.7-2.7-.9-6.9-4.2-8.8-5.4-1.4-4.1,6.7,2.1,8,2.8Z"/><path class="cls-3" d="m420.4,200.8c.8-2.6,6.4,2.2,8.2,2.8,1.3.5,2.8,1.9.7,2.4-2.7-1.1-7.3-3.5-8.9-5.3Z"/><path class="cls-3" d="m437.8,187.9c.8-1,2.5-2.2,2.4,0-1.4,2.2-5.1,5.3-6.6,6.7-3.9.3,3.3-5.7,4.2-6.7Z"/><path class="cls-3" d="m437.1,194.3c.8-1,2.5-2.2,2.4,0-1.4,2.2-5.1,5.3-6.6,6.7-3.9.3,3.3-5.7,4.2-6.7Z"/><path class="cls-3" d="m437.9,199.6c.7-.9,2.2-2,2.2,0-1.2,2-4.6,4.8-5.9,6.2-3.4.2,3-5.2,3.8-6.2Z"/><path class="cls-3" d="m449.3,194c-1.9-1.5-5.4-4.4-6.8-5.9-1.2-4,5.8,2.7,6.8,3.3"/><path class="cls-3" d="m449.2,200c-2.3-.9-4.9-4.2-6.4-5.6-1.2-4,5.6,2.7,6.5,3.3"/><path class="cls-3" d="m448.5,204.6c-1.8.1-4.5-3.5-5.7-4.3-.4-.4,0-1.6.6-1.2.7.8,6.7,4.1,5.1,5.6Z"/><path class="cls-3" d="m423.5,157.1c-3.3.5.6,3,2.2,2.8,4.1-.7-.1-3.2-2.2-2.8Z"/><path class="cls-3" d="m422.5,161.4c-5-.2,2.2,4.9,3.9,3.6,1.4-1.5-3.2-3.4-3.9-3.6Z"/><path class="cls-3" d="m434.7,157c-1.1-.9-4.5.7-3.3,2.3,1.1,1,5-1.1,3.3-2.3Z"/><path class="cls-3" d="m433.2,161.3c-1.6.6-2.9,3.1-.3,3,2.1-.2,4.1-1.4,5.6-2.9,1.3-3.1-4.2-.9-5.3,0Z"/><path class="cls-3" d="m416.5,134c.4,2.6.5,5.3.6,7.9"/><path class="cls-3" d="m416.4,134h.1"/><path class="cls-3" d="m397.5,127.1c3.3-.4,6.2-.5,9.5-1-.2,3.5,0,6.7-.2,10.2,3.2-.7,6.4-1.5,9.6-2.3"/><path class="cls-3" d="m428.2,140c0,.2.2.3.2.5-1.8-3-3.1-6.2-3.8-9.6,2.9.4,5.2.4,8.1-.1-2.3-2.9-4.5-5.2-7.6-7.3,3.1-1,5.6-.6,8.8-1"/><path class="cls-3" d="m377.6,137.7c.9.6,6.8,2.6,5.4,0-.5-1.3-7.8-2.7-5.4,0Z"/><path class="cls-3" d="m376.8,134.3c1,.1,7.2-1.1,4.7-2.6-1.1-.9-8.1,1.4-4.7,2.6Z"/><path class="cls-3" d="m451.1,134.5c1-.1,6.8-2.7,4-3.6-1.3-.6-7.6,3.2-4,3.6Z"/><path class="cls-3" d="m451.1,129.1c1,.4,7.2,1.1,5.3-1-.8-1.2-8.2-1.1-5.3,1Z"/><path class="cls-3" d="m389.9,127.7c4,3.3,10.6,8.9,13,14,2.2-.9,4.1-2.2,5.7-3.8"/><path class="cls-3" d="m432.2,134.1c1.6.6,3.1,1.4,4.5,2.3.6-3.8,1.9-9.3,5.6-12"/><path class="cls-3" d="m384.9,128.8c6.6,3.7,14.5,11.4,18.4,18,2-2.9,4.3-5.6,6.9-8"/><path class="cls-3" d="m431.7,136.3c2.6,1.3,4.8,2.5,6.9,4.3,2-5,1.6-11.9,6.8-15.6"/><path class="cls-3" d="m370.6,133.7s0,0,0,0c5.3,3.3,8.5,9.6,8.1,15.9"/><path class="cls-3" d="m458.2,127.3c-.8,5.2-.2,10.4-2.3,15.8"/><path class="cls-3" d="m436.4,76.9c3,17.1.3,33.9-13.9,43.6-4.3,2.2-9.8,1.7-17.9-4.1-3.3-2.3-9.4-4.2-12.9-13"/><path class="cls-3" d="m431.6,79.8c-1.3-.8-6-.3-7.1.3-4.3-4.5,10.2-5.5,7.1-.3Z"/><path class="cls-3" d="m409.2,82c-3.1-.1-5.7.7-8.5,1.6-4.2-4.9,15-7.1,8.5-1.4,0-.1-.8.3,0-.2Z"/><path class="cls-3" d="m427.2,86.7c.4,4.1,3.7,3.7,3.2-.4-.4-4.1-3.7-3.7-3.2.4Z"/><path class="cls-3" d="m404.6,89.6c.5,4.7,4.5,4.2,3.9-.5-.5-4.7-4.5-4.2-3.9.5Z"/><path class="cls-3" d="m424.8,99c-.6,1.6-5.8,3.1-8.5,2.1"/><path class="cls-3" d="m427.1,105.3c-4,3-12.4,2.7-17.3,2,.2,2.8,15.1,7.6,16.9-1.5"/><path class="cls-3" d="m438.7,81.6c-1.2-16.3-2.7-34.9-27.2-31.5-28.1.9-28.9,14-26.9,37.8"/><path class="cls-3" d="m389.3,88.7c-2-3.3-7.7-.4-6.4,3.4.6,4,5.2,14.8,10,10"/><path class="cls-3" d="m437,81.8c7.1-2.5,3,16.7,0,15.6"/><path class="cls-3" d="m389.3,88.7c1,3.2,3.4,2.2,3.5.7.1-1.8-.8-8,0-12.4,2.8-16.4,41.3-23.4,43.9,1.5"/></svg>')}`;
export default image;