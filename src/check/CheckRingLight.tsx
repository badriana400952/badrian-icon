import React from 'react';

const CheckRingLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="12" cy="12" r="9" stroke="currentColor"/>
<path d="M8 12L11 15L16 9" stroke="currentColor"/>
</svg>
);

export default CheckRingLight;
