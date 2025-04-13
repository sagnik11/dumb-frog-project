import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// SVG Flower Components
const FlowerOne = () => (
    <svg width="40" height="40" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 512 512">

<g>
	<path d="M437.46,157.012c0-9.442-1.466-19.036-4.525-28.464c-6.313-19.42-18.534-35.384-33.98-46.418
		c-15.447-11.033-34.156-17.214-53.59-17.221c-0.475,0-0.957,0.035-1.438,0.042c-5.308-17.235-15.475-32.333-28.967-43.59
		C299.01,8.038,278.388-0.007,255.993,0c-22.395-0.007-43.017,8.038-58.96,21.362c-13.485,11.257-23.659,26.354-28.974,43.59
		c-0.475-0.007-0.963-0.042-1.438-0.042c-19.428,0.007-38.142,6.18-53.59,17.221c-15.447,11.027-27.668,26.998-33.967,46.418
		c-3.066,9.428-4.525,19.023-4.525,28.457c0.014,29.881,14.651,58.031,39.12,75.258c-3.318,9.693-4.952,19.763-4.952,29.764
		c0.007,14.224,3.282,28.331,9.672,41.159c6.382,12.829,15.894,24.379,28.268,33.352c16.299,11.851,35.28,17.591,54.008,17.584
		c15.112,0,30.084-3.785,43.534-10.992v82.556c-5.684-8.219-12.85-15.768-21.397-22.207c-16.886-12.688-36.404-19.05-55.168-19.064
		c-14.763,0-29.163,3.98-41.16,12.178l-3.114,2.13l-1.188,3.589c-2.276,6.934-3.372,14.17-3.372,21.439
		c0.048,25.559,13.275,51.508,36.732,69.183c16.878,12.689,36.404,19.05,55.161,19.064c14.762,0,29.162-3.981,41.159-12.179
		l2.242-1.53h0.175l2.234,1.53c11.997,8.198,26.39,12.179,41.16,12.179c18.757-0.014,38.282-6.376,55.168-19.064
		c23.45-17.675,36.676-43.624,36.732-69.183c0-7.27-1.096-14.505-3.379-21.439l-1.187-3.589l-3.115-2.13
		c-11.997-8.198-26.397-12.178-41.16-12.178c-18.757,0.014-38.282,6.376-55.168,19.064c-7.388,5.573-13.757,11.963-19.022,18.904
		v-79.972c13.778,7.661,29.218,11.711,44.805,11.711c18.736,0.006,37.709-5.734,54.016-17.584
		c12.367-8.98,21.879-20.524,28.261-33.352c6.39-12.835,9.672-26.942,9.672-41.166c0-10-1.641-20.063-4.951-29.756
		C422.796,215.043,437.447,186.893,437.46,157.012z M235.972,483.41c-7.262,4.079-15.943,6.257-25.286,6.264
		c-13.68,0.007-28.632-4.714-41.746-14.581c-18.276-13.702-27.878-33.653-27.822-51.341c0-3.701,0.413-7.298,1.222-10.748
		c7.263-4.078,15.943-6.257,25.287-6.264c13.687-0.007,28.638,4.713,41.746,14.581c18.275,13.708,27.877,33.646,27.821,51.341
		C237.194,476.357,236.782,479.96,235.972,483.41z M298.969,421.322c13.108-9.868,28.059-14.588,41.746-14.581
		c9.344,0.006,18.024,2.185,25.287,6.264c0.803,3.45,1.222,7.054,1.222,10.748c0.056,17.688-9.546,37.64-27.821,51.341
		c-13.115,9.867-28.059,14.588-41.746,14.581c-9.344-0.007-18.024-2.186-25.28-6.264c-0.824-3.45-1.229-7.053-1.229-10.747
		C271.091,454.968,280.693,435.03,298.969,421.322z M379.122,218.032l-9.148,5.049l4.428,9.462c4.406,9.4,6.55,19.463,6.55,29.477
		c0,10.789-2.493,21.508-7.333,31.215c-4.832,9.706-11.984,18.401-21.397,25.244c-12.409,9.009-26.676,13.31-40.894,13.317
		c-17.374-0.007-34.56-6.481-47.703-18.785l-7.633-7.144l-7.626,7.144c-13.143,12.304-30.322,18.778-47.71,18.785
		c-14.218-0.014-28.485-4.308-40.887-13.317c-9.42-6.843-16.57-15.538-21.403-25.238c-4.832-9.706-7.332-20.426-7.332-31.215
		c0-10.014,2.151-20.078,6.55-29.477l4.427-9.463l-9.148-5.048c-22.304-12.291-36.013-35.964-36.006-61.034
		c0.007-7.13,1.104-14.378,3.442-21.564c4.798-14.769,13.995-26.76,25.72-35.146c11.718-8.373,25.922-13.059,40.601-13.059
		c2.835,0,5.691,0.175,8.554,0.531l10.357,1.292l1.983-10.258c3.094-16.062,11.711-30.189,23.828-40.3
		c12.123-10.112,27.619-16.167,44.651-16.174c17.032,0.007,32.535,6.062,44.651,16.174c12.123,10.112,20.74,24.239,23.827,40.3
		l1.983,10.258l10.363-1.292c2.856-0.356,5.713-0.531,8.548-0.531c14.679,0,28.897,4.686,40.615,13.059
		c11.718,8.386,20.908,20.384,25.712,35.154c2.333,7.186,3.436,14.428,3.436,21.564
		C415.143,182.082,401.434,205.748,379.122,218.032z"/>
	<path d="M255.993,119.994c-36.467,0-66.034,29.567-66.034,66.04s29.567,66.041,66.034,66.041
		c36.481,0,66.048-29.568,66.048-66.041S292.474,119.994,255.993,119.994z"/>
</g>
</svg>
);

const FlowerTwo = () => (
    <svg width="50" height="50" viewBox="-11.55 0 177.16 177.16" xmlns="http://www.w3.org/2000/svg">

  <g id="Layer_2" data-name="Layer 2">

    <g id="Layer_1-2" data-name="Layer 1">

      <path d="M115.82,139.08c-.59,5.89-1,11.85-1.87,17.75a31.25,31.25,0,0,1-2.63,8.07A18.79,18.79,0,0,1,100.07,175c-9.31,3.29-18.38,3.21-27.14-2.35C65.71,168,61,162.13,60,153.45c-.31-2.79-1.06-5.52-1.72-8.84-4.82,1-9.2,2-13.61,2.86-7.32,1.42-14.16,0-20.73-3.39-8.4-4.39-11.35-11.76-11.34-20.6,0-5.82,1.47-11.3,5.29-16,2.12-2.62,4-5.47,6.2-8.59-2.77-1.44-5-2.62-7.29-3.78C-1,86-5.45,64.87,7.25,49.44a14.24,14.24,0,0,1,5.2-4.29c7.52-3,15.27-4.91,23.42-2.49a36.84,36.84,0,0,0,4.18.85c.24.05.52-.11,1.14-.27a53.18,53.18,0,0,0,0-5.64,45.63,45.63,0,0,1,1.19-16.16,21.33,21.33,0,0,1,8.52-12.5A47.1,47.1,0,0,1,78.17,0C89.9-.09,101.7,8.55,105.78,19.79,108,25.8,109,32,107.89,38.34c-.23,1.32-.37,2.65-.68,4.89,3.54-.9,6.2-1.6,8.88-2.26,8.6-2.1,17-1.95,25,2.26,11.69,6.13,16.45,20.81,10.08,32.32-2.18,4-5.23,7.46-8,11.06a47.85,47.85,0,0,1-4.1,4.2c.4,2.93,2.85,3.75,4.43,5.22a22.5,22.5,0,0,1,.78,32.2c-7.35,7.54-15.83,12.15-26.8,10.38C117,138.53,116.45,138.89,115.82,139.08Zm-5.95-49.92c1.35-7.4-1.83-14-6.62-20-2.32-2.93-4.7-5.79-9.22-5.06a5.76,5.76,0,0,1-3.9-1.37c-6.18-5-13.33-4.48-20.39-3.48a11.75,11.75,0,0,0-8.46,5.38C58.55,69,55.6,73.17,52.92,77.54a16,16,0,0,0-1.76,4.79C48,96,56.2,114.8,68.33,121.73a29.58,29.58,0,0,0,11.29,3.89c11,1.31,24.12-7.82,27-17.35C108.52,102.23,110.22,96.18,109.87,89.16ZM91.49,51c4.81-5.14,5.21-11.65,4.91-18.24-.32-6.83-3.3-12.51-8-17.47-6.07-6.38-12.81-8.11-20.8-4-1.52.79-3.09,1.48-4.66,2.15-5.39,2.33-8.38,6.65-10.09,12C49.56,35.88,52.56,45,58.12,53.58,79.62,47.66,77.31,49.77,91.49,51ZM51.67,63c-4.73-4.27-9.57-6.7-14.33-9.29a20.4,20.4,0,0,0-12.5-2,14.25,14.25,0,0,0-12.79,12c-1.12,7.48.62,14.14,6.32,19.57a38.52,38.52,0,0,0,16.42,8.92c1.15.34,2.59-.34,4.07-.57C39.44,80.34,45.44,71.92,51.67,63ZM71,134.57c-1.41,5.84-.85,10.66.06,15.44,1.9,9.92,8.72,15,17.77,17.81a9.07,9.07,0,0,0,4.18.06c5.13-1,7.85-4.54,9-9.27,1.33-5.3,2.08-10.79.84-16.16-.86-3.73-1-8-4.5-11C89.79,135.85,80.58,134.84,71,134.57Zm52.31-46.14c2.53-.71,4.65-.83,6.23-1.82a27,27,0,0,0,12-15c2.88-9.22-.49-15.26-8.28-20.31a16.73,16.73,0,0,0-14.78-2,68.2,68.2,0,0,0-8.63,3.68c-1.45.71-3.06,1.59-2.93,3.67C122.11,72.07,120.47,73.76,123.28,88.43ZM39.35,102.38c-5.52,1.06-10.25,3.21-13.23,8.25-3.47,5.89-3.21,11.93-.69,18.05,3,7.33,11.87,12.13,19.48,10.12A135.16,135.16,0,0,0,58.57,134c1.19-.46,2.69-1,2.59-2.36-4.55-4.43-9.38-8.12-12.85-12.82C44.68,113.89,42.35,108,39.35,102.38Zm70.27,21.24c4.32,4.45,4.92,5,8.09,5.43a48.22,48.22,0,0,0,7.68.62,13.19,13.19,0,0,0,12.77-11.58,31.8,31.8,0,0,0-.18-6.82,14.09,14.09,0,0,0-11.2-12.4c-3.15-.64-5.2.24-6,3.26A51.3,51.3,0,0,1,109.62,123.62Z"/>

      <path d="M109.87,89.16c.35,7-1.35,13.07-3.21,19.11-2.92,9.53-16,18.66-27,17.35a29.58,29.58,0,0,1-11.29-3.89C56.2,114.8,48,96,51.16,82.33a16,16,0,0,1,1.76-4.79c2.68-4.37,5.63-8.57,8.36-12.92a11.75,11.75,0,0,1,8.46-5.38c7.06-1,14.21-1.5,20.39,3.48A5.76,5.76,0,0,0,94,64.09c4.52-.73,6.9,2.13,9.22,5.06C108,75.17,111.22,81.76,109.87,89.16Z"/>

      <path d="M91.49,51c-14.18-1.23-11.87-3.34-33.37,2.58-5.56-8.6-8.56-17.7-5.28-28.09,1.71-5.39,4.7-9.71,10.09-12,1.57-.67,3.14-1.36,4.66-2.15,8-4.12,14.73-2.39,20.8,4,4.71,5,7.69,10.64,8,17.47C96.7,39.35,96.3,45.86,91.49,51Z"/>

      <path d="M51.67,63c-6.23,9-12.23,17.39-12.81,28.63-1.48.23-2.92.91-4.07.57a38.52,38.52,0,0,1-16.42-8.92c-5.7-5.43-7.44-12.09-6.32-19.57a14.25,14.25,0,0,1,12.79-12,20.4,20.4,0,0,1,12.5,2C42.1,56.25,46.94,58.68,51.67,63Z"/>

      <path d="M71,134.57c9.61.27,18.82,1.28,27.38-3.17,3.51,3.08,3.64,7.32,4.5,11,1.24,5.37.49,10.86-.84,16.16-1.18,4.73-3.9,8.31-9,9.27a9.07,9.07,0,0,1-4.18-.06c-9-2.77-15.87-7.89-17.77-17.81C70.12,145.23,69.56,140.41,71,134.57Z"/>

      <path d="M123.28,88.43c-2.81-14.67-1.17-16.36-16.39-31.83-.13-2.08,1.48-3,2.93-3.67a68.2,68.2,0,0,1,8.63-3.68,16.73,16.73,0,0,1,14.78,2c7.79,5,11.16,11.09,8.28,20.31a27,27,0,0,1-12,15C127.93,87.6,125.81,87.72,123.28,88.43Z"/>

      <path d="M39.35,102.38c3,5.63,5.33,11.51,9,16.41,3.47,4.7,8.3,8.39,12.85,12.82.1,1.33-1.4,1.9-2.59,2.36a135.16,135.16,0,0,1-13.66,4.83c-7.61,2-16.47-2.79-19.48-10.12-2.52-6.12-2.78-12.16.69-18.05C29.1,105.59,33.83,103.44,39.35,102.38Z"/>

      <path d="M109.62,123.62a51.3,51.3,0,0,0,11.2-21.49c.76-3,2.81-3.9,6-3.26a14.09,14.09,0,0,1,11.2,12.4,31.8,31.8,0,0,1,.18,6.82,13.19,13.19,0,0,1-12.77,11.58,48.22,48.22,0,0,1-7.68-.62C114.54,128.58,113.94,128.07,109.62,123.62Z"/>

    </g>

  </g>

</svg>
);

const FlowerThree = () => (
<svg width="35" height="35" viewBox="-3.41 0 183.79 183.79" xmlns="http://www.w3.org/2000/svg">
  
  <g id="Layer_2" data-name="Layer 2">

    <g id="Layer_1-2" data-name="Layer 1">

      <path d="M41.43,87.43c-2.62-1.17-4.18-1.81-5.69-2.54A42.67,42.67,0,0,1,19,70.58c-5.44-7.88-6.47-16.4-3.67-25.36C18,36.57,24.71,30.8,36,33.42c7.14,1.65,13.81,5.3,20.68,8.09,1.26.52,2.45,1.21,3.42,1.69,2.08-1.2,1.74-2.74,1.44-4-2.4-10.6,1.51-19.72,6.83-28.4a21.58,21.58,0,0,1,5.9-6.11c11.62-8.16,31.82-5.19,40.61,5.85,3,3.68,4.65,7.83,4.21,12.7-.33,3.63-.5,7.27-.79,11.63,2.68-1.39,4.71-2.36,6.66-3.46,10.9-6.18,22.22-6.68,33.9-2.58a47.34,47.34,0,0,1,4.84,1.77,21.79,21.79,0,0,1,11.95,13.62C178,51.34,177,57.36,174.22,64,168.71,77.31,159,85.74,145.68,90.54A41,41,0,0,0,142,92.38a68.91,68.91,0,0,0,7.17,3.94,59.43,59.43,0,0,1,19.27,12.61,24.61,24.61,0,0,1,7.83,16.65c.48,9.35-6.85,19.15-16.38,21.58a39.76,39.76,0,0,1-32.1-5.16c-2.59-1.63-5.14-3.31-8.49-5.48-.29,2.19-.75,3.51-.58,4.75,1.53,11.38-.87,22.23-5,32.68-1.91,4.88-5.49,8.33-11.41,9.15-4.3.61-8.42,1.1-12.7.17a20.8,20.8,0,0,1-13.18-8.88c-5.1-7.48-8.41-15.61-8.54-24.81,0-4,0-8,0-12.8a17.91,17.91,0,0,0-3.32,1.75c-8.76,7.73-18.67,13.27-30.23,15.4-12.51,2.31-23.17-1-31.38-11.1C.74,140.07-.81,131.7.45,127.2,2.07,121.42,4.18,115.84,8,111c8-10,17.45-17.89,29.81-21.89C38.63,88.86,39.36,88.41,41.43,87.43Zm75.75-.32c6.21-1.15,11.51-2,16.76-3.13,2.51-.52,4.92-1.47,7.42-2.06C152.23,79.35,159,72.05,164,62.57c3.71-7.09,2.08-13.9-1.18-20.45a10.26,10.26,0,0,0-5-4.44c-5.83-2.4-11.69-3.63-18.27-2-11.25,2.84-17.24,11.49-23.84,19.66-.79,4.72-4.27,7.92-6.66,11.73-2.55,4.09-2.73,5,.47,8C112.85,78.27,115.9,81.55,117.18,87.11Zm-54.59,9A26.55,26.55,0,0,0,60,95.44c-8.61-1.26-16.37,2-23.9,5.2-10,4.21-17.5,11.6-22.46,21.39a27.87,27.87,0,0,0-2.85,14.08c.16,3.83,1.74,6.6,5.68,7.51a74.77,74.77,0,0,0,7.51,1.45c8.66,1.06,16.09-2.91,23.64-6.14a26.18,26.18,0,0,0,7.05-4.66,79.58,79.58,0,0,0,14.2-17,37.55,37.55,0,0,0,2.26-5.06c-1.91-2.78-3.78-5-5.08-7.5A86.13,86.13,0,0,1,62.59,96.1ZM94.74,67a37.26,37.26,0,0,0,2.65-5c2.59-7,4.82-14.08,7.59-21,2.54-6.33,2.15-12.92,2.43-19.45A9.7,9.7,0,0,0,106,16.78c-3.45-6.18-15.87-10-22.19-7a5.15,5.15,0,0,0-1.42,1C75.6,17.39,70.92,25,72.37,35c1.28,8.86,4.39,17.19,8.21,25.22C83.68,66.77,86.36,67.94,94.74,67Zm16.35,40.39c2,5.47,5.63,9.12,9,13a54.73,54.73,0,0,0,29.26,18.11,15.59,15.59,0,0,0,15-3.92,7.53,7.53,0,0,0,2.24-8.54c-2.11-6-5.15-11.28-10.6-15.12-10-7-21.2-11-32.9-13.81-2.14-.51-4.5-.07-6.89-.07Zm-11.51,9.26L84.11,118c-6.57,16.3-9.06,32.17-.69,48.23a23.93,23.93,0,0,0,2.64,4.38c2.68,3.2,6.36,5.44,10.37,5.1,4.4-.38,6.16-4.35,7.75-8.2,2.67-6.48,3.23-13.23,3.75-20.08C108.79,136.23,105.76,126.19,99.58,116.65ZM74.35,70.31c-3.3-4-6.25-7.81-9.54-11.34C62.5,56.5,60,53.83,57.08,52.34c-6.58-3.32-13.51-6-20.31-8.85a11.73,11.73,0,0,0-2.46-.71c-6.92-1.24-11.68,2.69-12,9.66-.19,4.78,1,9,4.35,12.53,3.88,4.13,7.07,9.18,12.68,11.16,6.44,2.27,13.06,4.06,19.62,6,2.48.71,5,1.07,7.59-.48Zm31.37,19.84a13.48,13.48,0,0,0-4.3-10.65c-2.7-2.64-6-2.67-9.41-3.14-6.86-.94-12.41,3.21-14.49,9.32a49.37,49.37,0,0,0-2.67,10.69c-.45,4.29,1.62,7.66,5.59,9.67C87.05,109.39,94,108.21,99,102.7,102.43,98.88,105.44,94.75,105.72,90.15Z"/>

      <path d="M117.18,87.11c-1.28-5.56-4.33-8.84-7.7-12-3.2-3-3-3.94-.47-8,2.39-3.81,5.87-7,6.66-11.73,6.6-8.17,12.59-16.82,23.84-19.66,6.58-1.65,12.44-.42,18.27,2a10.26,10.26,0,0,1,5,4.44c3.26,6.55,4.89,13.36,1.18,20.45-5,9.48-11.72,16.78-22.59,19.35-2.5.59-4.91,1.54-7.42,2.06C128.69,85.06,123.39,86,117.18,87.11Z"/>

      <path d="M62.59,96.1A86.13,86.13,0,0,0,66,104.71c1.3,2.51,3.17,4.72,5.08,7.5a37.55,37.55,0,0,1-2.26,5.06,79.58,79.58,0,0,1-14.2,17,26.18,26.18,0,0,1-7.05,4.66c-7.55,3.23-15,7.2-23.64,6.14a74.77,74.77,0,0,1-7.51-1.45c-3.94-.91-5.52-3.68-5.68-7.51A27.87,27.87,0,0,1,13.6,122c5-9.79,12.44-17.18,22.46-21.39,7.53-3.17,15.29-6.46,23.9-5.2A26.55,26.55,0,0,1,62.59,96.1Z"/>

      <path d="M94.74,67c-8.38.94-11.06-.23-14.16-6.76-3.82-8-6.93-16.36-8.21-25.22-1.45-10,3.23-17.63,10-24.33a5.15,5.15,0,0,1,1.42-1c6.32-3,18.74.87,22.19,7.05a9.7,9.7,0,0,1,1.45,4.83c-.28,6.53.11,13.12-2.43,19.45-2.77,6.9-5,14-7.59,21A37.26,37.26,0,0,1,94.74,67Z"/>

      <path d="M111.09,107.39l5.09-10.31c2.39,0,4.75-.44,6.89.07C134.77,99.94,146,103.91,156,111c5.45,3.84,8.49,9.1,10.6,15.12a7.53,7.53,0,0,1-2.24,8.54,15.59,15.59,0,0,1-15,3.92,54.73,54.73,0,0,1-29.26-18.11C116.72,116.51,113.14,112.86,111.09,107.39Z"/>

      <path d="M99.58,116.65c6.18,9.54,9.21,19.58,8.35,30.82-.52,6.85-1.08,13.6-3.75,20.08-1.59,3.85-3.35,7.82-7.75,8.2-4,.34-7.69-1.9-10.37-5.1a23.93,23.93,0,0,1-2.64-4.38c-8.37-16.06-5.88-31.93.69-48.23Z"/>

      <path d="M74.35,70.31,66.6,81.61C64,83.16,61.49,82.8,59,82.09c-6.56-1.9-13.18-3.69-19.62-6-5.61-2-8.8-7-12.68-11.16-3.35-3.55-4.54-7.75-4.35-12.53.27-7,5-10.9,12-9.66a11.73,11.73,0,0,1,2.46.71c6.8,2.89,13.73,5.53,20.31,8.85,3,1.49,5.42,4.16,7.73,6.63C68.1,62.5,71.05,66.35,74.35,70.31Z"/>

      <path d="M105.72,90.15c-.28,4.6-3.29,8.73-6.76,12.55-5,5.51-11.91,6.69-18.52,3.34-4-2-6-5.38-5.59-9.67a49.37,49.37,0,0,1,2.67-10.69C79.6,79.57,85.15,75.42,92,76.36c3.41.47,6.71.5,9.41,3.14A13.48,13.48,0,0,1,105.72,90.15Z"/>

    </g>

  </g>

</svg>
);

const FlowerFour = () => (

    <svg width="45" height="45" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 512 512">
<g>
	<path d="M495.037,198.99c-7.773-11.85-17.919-21.956-29.752-29.736c1.427-6.872,2.204-13.85,2.204-20.836
		c0.032-26.502-10.211-53.182-30.472-73.451c-20.245-20.244-46.917-30.48-73.411-30.465c-6.994,0-13.988,0.794-20.869,2.212
		c-7.772-11.824-17.887-21.97-29.735-29.751C296.664,6.241,276.986-0.008,256.012,0c-20.982-0.008-40.668,6.241-57.007,16.963
		c-11.849,7.78-21.963,17.918-29.743,29.751c-6.881-1.418-13.867-2.212-20.861-2.212c-26.494-0.016-53.165,10.212-73.41,30.465
		c-20.261,20.261-30.505,46.941-30.48,73.442c0,6.994,0.786,13.972,2.212,20.853c-11.841,7.772-21.98,17.887-29.752,29.735
		C6.249,215.336-0.008,235.014,0,255.988c-0.008,20.982,6.248,40.66,16.962,56.999c7.78,11.856,17.919,21.979,29.76,29.751
		c-1.426,6.881-2.212,13.859-2.212,20.853c-0.025,26.494,10.22,53.174,30.465,73.418h0.008
		c20.254,20.261,46.933,30.497,73.435,30.481c6.986,0,13.972-0.794,20.845-2.205c7.764,11.833,17.878,21.972,29.727,29.744
		c16.339,10.73,36.017,16.979,57.007,16.971c20.99,0.008,40.668-6.241,57.006-16.971c11.848-7.772,21.972-17.911,29.744-29.744
		c6.872,1.411,13.85,2.205,20.844,2.205c26.502,0.016,53.182-10.22,73.427-30.481c20.261-20.244,30.505-46.933,30.472-73.434
		c0-6.986-0.778-13.956-2.204-20.837c11.833-7.772,21.979-17.878,29.76-29.727c10.714-16.347,16.971-36.033,16.955-57.023
		C512.016,235.005,505.759,215.319,495.037,198.99z M464.102,292.726c-6.905,10.52-16.695,18.948-28.147,24.102l-15.869,7.14
		l6.168,16.274c2.82,7.464,4.246,15.39,4.246,23.333c-0.016,17.092-6.516,34.128-19.645,47.273
		c-13.146,13.129-30.181,19.629-47.265,19.645c-7.95,0-15.868-1.426-23.341-4.255l-16.273-6.159l-7.149,15.868
		c-5.155,11.452-13.575,21.249-24.103,28.147c-10.536,6.889-23.081,10.9-36.729,10.908c-13.648-0.008-26.178-4.012-36.714-10.908
		c-10.527-6.898-18.948-16.695-24.11-28.147l-7.149-15.868l-16.273,6.159c-7.464,2.828-15.39,4.255-23.333,4.255
		c-17.092-0.016-34.136-6.516-47.282-19.645h0.008c-13.13-13.146-19.621-30.173-19.637-47.258c0-7.95,1.426-15.876,4.255-23.348
		l6.167-16.274l-15.868-7.14c-11.452-5.162-21.25-13.599-28.155-24.128c-6.888-10.535-10.9-23.072-10.908-36.713
		c0.008-13.632,4.02-26.161,10.908-36.697c6.906-10.527,16.696-18.956,28.155-24.118l15.868-7.14l-6.167-16.274
		c-2.829-7.472-4.255-15.399-4.255-23.349c0.016-17.092,6.516-34.12,19.653-47.281c13.13-13.122,30.157-19.613,47.241-19.63
		c7.95,0,15.877,1.427,23.349,4.263l16.265,6.16l7.157-15.86c5.162-11.46,13.59-21.258,24.118-28.155
		c10.544-6.897,23.074-10.901,36.722-10.909c13.64,0.008,26.169,4.012,36.705,10.909c10.519,6.896,18.956,16.695,24.118,28.155
		l7.148,15.86l16.266-6.16c7.472-2.836,15.399-4.263,23.357-4.263c17.084,0.017,34.112,6.508,47.249,19.63
		c13.129,13.161,19.629,30.197,19.645,47.289c0,7.942-1.426,15.877-4.246,23.341l-6.168,16.274l15.869,7.14
		c11.452,5.154,21.25,13.583,28.147,24.103c6.889,10.535,10.892,23.065,10.909,36.713
		C474.995,269.652,470.991,282.189,464.102,292.726z"/>
	<path d="M254.821,179.62c1.451-3.299,2.585-6.046,3.395-8.129c10.333-26.259,13.778-38.221,0.697-50.24
		c-1.848-1.564-3.672-3.153-5.43-4.766c-1.686,1.719-3.412,3.372-5.187,4.993c-12.578,12.554-8.607,24.354,2.804,50.118
		C252,173.678,253.273,176.377,254.821,179.62z"/>
	<path d="M192.287,200.391c2.066,0.802,4.887,1.832,8.275,2.998c-1.297-3.306-2.464-6.094-3.348-8.136
		c-11.257-25.829-17.254-36.754-35.002-36c-2.4,0.218-4.799,0.372-7.189,0.446c-0.008,2.398-0.073,4.798-0.17,7.221
		C154.844,184.701,166.004,190.228,192.287,200.391z"/>
	<path d="M179.587,257.187c-3.258-1.426-6.029-2.568-8.104-3.379c-26.243-10.349-38.205-13.81-50.232-0.737
		c-1.556,1.856-3.136,3.679-4.766,5.454c1.718,1.661,3.38,3.412,4.993,5.187c12.529,12.546,24.362,8.598,50.134-2.804
		C173.655,259.984,176.386,258.736,179.587,257.187z"/>
	<path d="M159.261,349.805c0.226,2.383,0.373,4.782,0.437,7.173c2.399,0,4.814,0.081,7.222,0.17
		c17.773,0.007,23.308-11.144,33.495-37.435c0.818-2.082,1.864-4.927,3.023-8.315c-3.322,1.337-6.11,2.496-8.177,3.396
		C169.432,326.018,158.507,332.04,159.261,349.805z"/>
	<path d="M257.195,332.364c-1.442,3.275-2.602,6.07-3.412,8.145c-10.317,26.25-13.77,38.213-0.69,50.24
		c1.848,1.564,3.671,3.153,5.43,4.765c1.678-1.718,3.42-3.379,5.195-4.992c12.57-12.554,8.591-24.354-2.813-50.127
		C260,338.329,258.735,335.59,257.195,332.364z"/>
	<path d="M256.012,221.616c-18.997,0-34.387,15.391-34.387,34.38s15.39,34.379,34.387,34.379
		c18.98,0,34.371-15.39,34.371-34.379S274.993,221.616,256.012,221.616z"/>
	<path d="M352.747,162.211c-0.219-2.406-0.374-4.789-0.438-7.188c-2.398,0-4.814-0.081-7.229-0.178
		c-17.765-0.008-23.292,11.144-33.496,37.451c-0.818,2.083-1.84,4.879-3.006,8.275c3.323-1.33,6.095-2.456,8.169-3.379
		C342.583,185.957,353.493,179.952,352.747,162.211z"/>
	<path d="M319.713,311.577c-2.092-0.811-4.912-1.848-8.299-3.015c1.329,3.314,2.472,6.102,3.388,8.177
		c11.249,25.837,17.246,36.754,34.995,36.008c2.398-0.219,4.798-0.381,7.188-0.446c0.008-2.408,0.073-4.806,0.187-7.238
		C357.156,327.299,346.02,321.755,319.713,311.577z"/>
	<path d="M340.412,251.084c-2.075,0.883-4.798,2.164-8.007,3.712c3.274,1.442,6.046,2.585,8.129,3.395
		c26.226,10.35,38.196,13.794,50.223,0.714c1.564-1.84,3.137-3.672,4.766-5.438c-1.719-1.67-3.38-3.403-4.992-5.178
		C378,235.726,366.167,239.682,340.412,251.084z"/>
</g>
</svg>
);

interface FlowerProps {
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: number;
}

const Flower = ({ top, left, delay, duration, type }: FlowerProps) => {
  const flowerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 0.7, scale: 1 },
    exit: { opacity: 0, scale: 0 }
  };

  const FlowerComponent = () => {
    switch (type % 4) {
      case 0:
        return <FlowerOne />;
      case 1:
        return <FlowerTwo />;
      case 2:
        return <FlowerThree />;
      case 3:
        return <FlowerFour />;
      default:
        return <FlowerOne />;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={flowerVariants}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: Math.random() * 2
      }}
    >
      <FlowerComponent />
    </motion.div>
  );
};

export function FlowerAnimations() {
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    // Generate random flowers
    const generateFlowers = () => {
      const newFlowers: FlowerProps[] = [];
      const flowerCount = 15; // Number of flowers to display

      for (let i = 0; i < flowerCount; i++) {
        newFlowers.push({
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 7,
          type: Math.floor(Math.random() * 4)
        });
      }

      setFlowers(newFlowers);
    };

    generateFlowers();

    // Regenerate flowers every 30 seconds for variety
    const interval = setInterval(generateFlowers, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower, index) => (
        <Flower key={index} {...flower} />
      ))}
    </div>
  );
}
