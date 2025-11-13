import React from 'react';

const Pie: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 40.875L5.25 33.375H42.75L39 40.875H9Z" stroke="CurrentColor" strokeWidth="3"/>
<path d="M3.375 33.375H44.625V26.8125C44.625 26.8125 37.125 18.375 24 18.375C10.875 18.375 3.375 26.8125 3.375 26.8125V33.375Z" stroke="CurrentColor" strokeWidth="3"/>
<path d="M16.5 12.75C14.4289 12.75 12.75 11.0711 12.75 9C12.75 6.92893 14.4289 5.25 16.5 5.25" stroke="CurrentColor" strokeWidth="3"/>
<path d="M25.875 12.75C23.8039 12.75 22.125 11.0711 22.125 9C22.125 6.92893 23.8039 5.25 25.875 5.25" stroke="CurrentColor" strokeWidth="3"/>
<path d="M35.25 12.75C33.1789 12.75 31.5 11.0711 31.5 9C31.5 6.92893 33.1789 5.25 35.25 5.25" stroke="CurrentColor" strokeWidth="3"/>
<path d="M16.5 27.75L20.25 24" stroke="CurrentColor" strokeWidth="3"/>
<path d="M31.5 27.75L27.75 24" stroke="CurrentColor" strokeWidth="3"/>
</svg>
);

export default Pie;
