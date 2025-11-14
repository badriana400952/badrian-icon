import React from 'react';

const Golf: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="12" cy="10" r="6.5" stroke="currentColor"/>
<rect x="4.25" y="21.25" width="15.5" height="0.5" rx="0.25" stroke="currentColor" strokeWidth="0.5"/>
<path d="M13.5 21V20C13.5 18.3431 14.8431 17 16.5 17M10.5 21V20C10.5 18.3431 9.15685 17 7.5 17" stroke="currentColor" strokeLinecap="round"/>
<rect x="9" y="7" width="1" height="1" rx="0.5" fill="currentColor"/>
</svg>
);

export default Golf;
