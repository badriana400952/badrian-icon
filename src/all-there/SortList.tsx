import React from 'react';

const SortList: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 7H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 20L22 17M19 20L16 17M19 20L19 4M19 4L16 7M19 4L22 7" stroke="currentColor" strokeWidth="2"/>
</svg>
);

export default SortList;
