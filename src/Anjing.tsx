import * as React from "react";

  const Anjing: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    color={props.color || "currentColor"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" d="M0 0h24v24H0z" />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      d="M8.5 3.5h-3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-7"
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinejoin="round"
      d="M12 8v8M16 12H8"
    />
  </svg>
);


export default Anjing;
