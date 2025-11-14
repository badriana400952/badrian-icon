import React from 'react';

const SortUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 12H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 7H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 6L22 9M19 6L16 9M19 6L19 18" stroke="currentColor" strokeWidth="2"/>
</svg>
);

export default SortUp;
