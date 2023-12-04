/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 150,
    "height": 196,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 75,
    "height": 98,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 38,
    "height": 49,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 19,
    "height": 25,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAklEQVR4AewaftIAAAQ1SURBVK3BC0zUdQAH8O////v97+5///v/7xEiHgIq8pCHWCb5qJwjnTaWD3TrganNnGs1l7lmbY6IzJwmaa2BYZpNcrhcGk6aYyqZkwk9wJSHgPJG7/Dk7g/3+N9d/9tku8Hh5tbng/8TwRM6X+PfMD29oLSs7JObXxcXdiEMxRM4UuEv3luGdy4NQOMPBosA5CAMi0dOHm4uv1Fvy8VjpKcwlwQt/FC5ZKQFg8GZCMNA9fOx1n3nSvt3mOM4ed5LlmOvbkl+FxM4UOb/0SnD+P5m9iNJYP5FGApV5215jWcwiMGgT6CUcQOQcrKf/tzA65awDKthWCba4/XVtNztKd6+mayHqmAbxqFQrd2YuIkl7Z9pNKxh7VtJO56fk3Ei2mx6nWEYjNJpNLlpM+ITW7u60zABAlXxoT13qy6XHK2s/vanyoryvLjJk3b6fApdOD8bc+dkYlpCHG423wZHiNmnKHX2h87biIAgTGFhoSc1IS7fJBoWm0xGvLAwG3qeR1ZaCjJmpUB2u1m3LOtau3oqEAGLMWyOoT6opsZaMTMhHgP3bQgRBD1W5CwGp9MFMAEWYzS2dVS7vV67JBoQsmDuHCiKArtjCALPY+WKpe2YAIvxGh1O1wFJEu1Ol4wQh2sElphYBBEMXr52/RYmQBBBR2//72cvXLowPT7WGRMdlR0I+FmjjqKlo7Ny596DO/FIXX/T0hfXL996uqT8AlQEE+vX2t1R6ZmpufFxVs426MCpb05e/bP7Th+Ani+ulP1ypOnMrr/sLQuOf1nW8H1xSTNFBPnPLNyYFjP1U7ffZ21taCPW1FlwBLSYZonatP+V1/JtLme5rIzQ30b6dVAtarvyHoCzFBEkRce8LfF8nBDQYqCpA1HTkuGl3fAoPkg6njPqhaV5Wave6Bu2L5jMm+vz0pcXFwJgEYGWcglQMQygN0kQRQOmJ86AZDDA6XFDQ0jMvCnJ+G5FQdbuJduWzZ408zxUBOOxy1IyizhCOZfHjajEBGQsXgRCCO60t8M9YIOGUGaKZBqo/ecP/oMtb+5aMn/eqsrqmtMUY1j0wvK0FCvPDT2Al5hgN0oYZbLGYKihBUysEavXLNouSWIACKK1vfMwVCzG8PmUXuK4JytXj0LvccI7PIxROtEASggSspIgGgTO6/Fq++7ZZIvZqIGKIozA61JPHf6qxDz4gB+mG+BjOAQ8XoziRQNCmlvaq4NAoP++Tdn6cdE6ADJUFGGyZ2cYK36tupK/Ove5PuCB3PuQDrX1iniEpRQh3ddu/f3hvoM7MAZFmIu1dbUXa+tuWMxG++SnLIK7sWuVoNGmO50uiKIBvKBHiKDVRSECivHk/aU/7IFq98vrVmoIxcjIMETRAI7nEcIAGkRA8BgcS1w8xw1an8265/f7O7p7euovn6s6c/x6zYkRRenCGP8BfEiPM/4htEMAAAAASUVORK5CYII="
  },
  {
    "width": 10,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAAklEQVR4AewaftIAAAG3SURBVGPABdqn/S2+9eifHAMUMDEAwfrFd+IZkMDyzX9DVu9n6Ji15H8NAxQwT2+71H5w5ZvO8trK19/fnwzSUVZIPbN/5jMv/5SzpelM3e1tjV8ZgIDFJ0xx1t8/97kXL4w1k5WSSpCRkWK4ePGKz7x2WaPKrGevGKCAkQEKQl3sTgX4epgqysowfPn6jWHynEW1mw8ea2GAAiYGKPj5+/dBEUHB3/x8vAxCwiL/He2sbzIgAWYGKLj58MluaVGR20rysgHfvny9E5lX3paxvWmieYyz5+ml+7YwM0BBtYtfkeAP5kk8aqpsL19+ELFkEwh7aMDF/p/hP8+FZYcWMTFAAR8HpzUbMzOHoKg4g4q2JgMjI6O0yPw7k1zucu9jAAIWBijQkOPnZfv4joGVnY2Bg5uLgV9RnNHcRn/Rx89fzjEwMLSxMACBma62MqeehsLXe49+/Pn5k4NNWIjh68sPNx89e7EuJr+yngEImBmA4Omr1+/FpMQvf3n6iVtMWUlXVFaa4dq2fa8zJkwIYmBg+McABMwMUHD87MUHrH8Z7qmZGD5h5eE+snXl2gUXnz26zQAFANW/nKdSgIi5AAAAAElFTkSuQmCC"
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;