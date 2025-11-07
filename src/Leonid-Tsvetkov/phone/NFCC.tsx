import React from 'react';

const NFCC: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.24" stroke="currentColor"/>
<path d="M8 8L13 16" stroke="currentColor" strokeLinecap="round"/>
<path d="M16.5263 17.5C17.4917 15.8278 18 13.9309 18 12C18 10.0691 17.4917 8.17221 16.5263 6.5" stroke="currentColor" strokeLinecap="round"/>
<path d="M12.9282 16C13.6303 14.7838 14 13.4043 14 12C14 10.5957 13.6303 9.21615 12.9282 8" stroke="currentColor" strokeLinecap="round"/>
<path d="M8.0718 16C7.37259 14.7889 7.00305 13.4157 7.00002 12.0173C6.99699 10.6189 7.36057 9.24415 8.05452 8.03007" stroke="currentColor" strokeLinecap="round"/>
</svg>
);

export default NFCC;
