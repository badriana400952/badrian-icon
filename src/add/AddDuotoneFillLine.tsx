import React from 'react';

const AddDuotoneFillLine: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} color="currentColor">
<rect width="24" height="24" fill="white"/>
<circle cx="12" cy="12" r="8.5" fillOpacity="0.24" stroke="currentColor" fill="none"/>
<path d="M12 8L12 16" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square"/>
<path d="M16 12L8 12" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square"/>
</svg>
);

export default AddDuotoneFillLine;
