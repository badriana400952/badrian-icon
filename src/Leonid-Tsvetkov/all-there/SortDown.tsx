import React from 'react';

const SortDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 12H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 18L22 15M19 18L16 15M19 18L19 6" stroke="currentColor" strokeWidth="2"/>
</svg>
);

export default SortDown;
