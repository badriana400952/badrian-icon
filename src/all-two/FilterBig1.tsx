import React from 'react';

const FilterBig1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8L20 8" stroke="currentColor" strokeLinecap="round"/>
<path d="M4 16L14 16" stroke="currentColor" strokeLinecap="round"/>
<ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="currentColor" strokeLinecap="round"/>
<ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="currentColor" strokeLinecap="round"/>
</svg>
);

export default FilterBig1;
