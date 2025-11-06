import React from 'react';

const Soccer: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H5C5.55228 10 6 10.4477 6 11V13C6 13.5523 5.55228 14 5 14H3V10Z" fill="currentColor"/>
<path d="M21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H21V10Z" fill="currentColor"/>
<circle cx="12" cy="12" r="2" fill="currentColor"/>
</svg>
);

export default Soccer;
