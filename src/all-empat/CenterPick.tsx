import React from 'react';

const CenterPick: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
<path d="M20 6L16 12L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6L8 12L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default CenterPick;
