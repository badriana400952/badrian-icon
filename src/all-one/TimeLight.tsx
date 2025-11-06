import React from 'react';

const TimeLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="12" cy="12" r="8.5" stroke="currentColor"/>
<path d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5" stroke="currentColor" strokeLinecap="round"/>
</svg>
);

export default TimeLight;
