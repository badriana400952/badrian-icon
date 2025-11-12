import React from 'react';

const Lit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M30 60L40 30L85 75L70 100L50 80H40" fill="#00E8FF"/>
<path d="M50 80V40L70 20V60M10 80L30 100L40 80L30 60H20" fill="#283198"/>
<path d="M30 60V20L50 0V40M70 100V60L90 40V80M10 80V40L30 60" fill="#324FFF"/>
<path d="M30 100V60L50 80" fill="#00FFFF"/>
</svg>
);

export default Lit;
