import * as React from "react";
export const Add = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 8H2m6-6v12V2Z"
    />
  </svg>
);

export const Calendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#59B17A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.667 2.666H3.333C2.597 2.666 2 3.263 2 3.999v9.334c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V3.999c0-.736-.597-1.333-1.333-1.333ZM10.666 1.334v2.667M5.334 1.334v2.667M2 6.666h12"
    />
  </svg>
);

export const Cart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <path
      fill="#DCDDDF"
      d="M4.667 12c-.734 0-1.327.6-1.327 1.333 0 .734.593 1.334 1.327 1.334.733 0 1.333-.6 1.333-1.334C6 12.6 5.4 12 4.667 12Zm-4-10c0 .367.3.667.666.667H2l2.4 5.06-.9 1.626c-.487.894.153 1.98 1.167 1.98H12c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H4.667L5.4 8.667h4.967c.5 0 .94-.274 1.166-.687l2.387-4.327a.665.665 0 0 0-.58-.986H3.473l-.446-.954a.662.662 0 0 0-.6-.38H1.333c-.366 0-.666.3-.666.667Zm10.666 10c-.733 0-1.326.6-1.326 1.333 0 .734.593 1.334 1.326 1.334.734 0 1.334-.6 1.334-1.334 0-.733-.6-1.333-1.334-1.333Z"
      {...props}
    />
  </svg>
);

export const ChevronDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 6 4 4 4-4"
    />
  </svg>
);

export const Dashboard = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <path
      fill="#DCDDDF"
      d="M2.667 8.667h4c.366 0 .666-.3.666-.667V2.667c0-.367-.3-.667-.666-.667h-4C2.3 2 2 2.3 2 2.667V8c0 .367.3.667.667.667Zm0 5.333h4c.366 0 .666-.3.666-.667v-2.666c0-.367-.3-.667-.666-.667h-4C2.3 10 2 10.3 2 10.667v2.666c0 .367.3.667.667.667Zm6.666 0h4c.367 0 .667-.3.667-.667V8c0-.367-.3-.667-.667-.667h-4c-.366 0-.666.3-.666.667v5.333c0 .367.3.667.666.667ZM8.667 2.667v2.666c0 .367.3.667.666.667h4C13.7 6 14 5.7 14 5.333V2.667C14 2.3 13.7 2 13.333 2h-4c-.366 0-.666.3-.666.667Z"
      {...props}
    />
  </svg>
);

export const Edit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#59B17A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
        d="M11.335 2.001A1.886 1.886 0 0 1 14 4.668l-9 9-3.666 1 1-3.667 9-9Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Filter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.833 1.75H1.167l4.666 5.518v3.815l2.334 1.167V7.268l4.666-5.518Z"
    />
  </svg>
);

export const Flask = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#DCDDDF"
        d="M10 6.42V2.668h.667a.667.667 0 1 0 0-1.334H5.333a.667.667 0 1 0 0 1.334H6V6.42l-3.485 5.12c-.903 1.328.048 3.126 1.654 3.126h7.662c1.606 0 2.557-1.798 1.653-3.126L10 6.421Z"
        {...props}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Logout = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4 1.333a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3.333a2 2 0 0 0-2-2H4Zm6.862 3.529a.667.667 0 0 1 .943 0l2.666 2.667a.667.667 0 0 1 0 .942l-2.666 2.667a.667.667 0 0 1-.943-.943l1.529-1.528H6.667a.667.667 0 0 1 0-1.334h5.724l-1.529-1.528a.667.667 0 0 1 0-.943Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Pharmacy = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <path
      fill="#DCDDDF"
      d="M10.667 9.333h-2v2H7.333v-2h-2V8h2V6h1.334v2h2M14 3.333h-1.767l.767-2.1-1.567-.566-.973 2.666H2v1.334l1.333 4-1.333 4V14h12v-1.333l-1.333-4 1.333-4V3.333Z"
      {...props}
    />
  </svg>
);

export const Remove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#E85050"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M2 4h12M12.667 4v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4m2 0V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4M6.667 7.333v4M9.333 7.333v4"
    />
  </svg>
);

export const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <path
      fill="#DCDDDF"
      d="M10.667 11.333v1.334H1.333v-1.334s0-2.666 4.667-2.666 4.667 2.666 4.667 2.666ZM8.333 5a2.333 2.333 0 1 0-4.666 0 2.333 2.333 0 0 0 4.666 0Zm2.294 3.667A3.548 3.548 0 0 1 12 11.333v1.334h2.667v-1.334s0-2.42-4.04-2.666Zm-.627-6a2.26 2.26 0 0 0-1.287.393 3.333 3.333 0 0 1 0 3.88A2.26 2.26 0 0 0 10 7.333a2.333 2.333 0 1 0 0-4.666Z"
      {...props}
    />
  </svg>
);

export const X = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.5 6.5-13 13M6.5 6.5l13 13"
    />
  </svg>
);

export const MoneyStack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M12.857 10.714c3.55 0 6.429-1.279 6.429-2.857C19.286 6.28 16.408 5 12.857 5 9.307 5 6.43 6.28 6.43 7.857c0 1.578 2.878 2.857 6.428 2.857Z" />
      <path d="M6.429 7.857v8.572c0 1.571 2.857 2.857 6.428 2.857 3.572 0 6.429-1.286 6.429-2.857V7.857" />
      <path d="M19.286 12.143c0 1.571-2.857 2.857-6.429 2.857-3.571 0-6.428-1.286-6.428-2.857m6.285-10A9.672 9.672 0 0 0 7.143.714C3.586.714.714 2 .714 3.571c0 .843.829 1.6 2.143 2.143" />
      <path d="M2.857 14.286c-1.314-.543-2.143-1.3-2.143-2.143V3.57" />
      <path d="M2.857 10C1.543 9.457.714 8.7.714 7.857" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const UsersOutlined = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1E21"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 16.667c0-1.452-1.392-2.686-3.333-3.145M12.5 16.668c0-1.842-2.238-3.334-5-3.334s-5 1.492-5 3.334m10-5.834a3.333 3.333 0 1 0 0-6.666m-5 6.666a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Z"
    />
  </svg>
);
