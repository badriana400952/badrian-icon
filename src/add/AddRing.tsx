import React from 'react';

const AddRing: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} color="currentColor">
<circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" strokeWidth="2"/>
<path d="M12 15L12 9" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="square"/>
<path d="M15 12L9 12" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="square"/>
</svg>
);

export default AddRing;
