import React from 'react';

const CloseRingDuotone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} color="currentColor">
<circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.25"/>
<path d="M9 9L15 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
<path d="M15 9L9 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
</svg>
);
export default CloseRingDuotone;
