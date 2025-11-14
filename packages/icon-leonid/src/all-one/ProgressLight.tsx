import React from 'react';

const ProgressLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6L12 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12L21 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12L6 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6569 6.34314L18.364 5.63603" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.63605 18.364L7.05026 16.9497" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9498 16.9498L18.364 18.364" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.63605 5.63605L7.75737 7.75737" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default ProgressLight;
