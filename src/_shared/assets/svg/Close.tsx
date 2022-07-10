import React from 'react';

const Close = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21 4.81286L19.1871 3L12 10.1871L4.81286 3L3 4.81286L10.1871 12L3 19.1871L4.81286 21L12 13.8129L19.1871 21L21 19.1871L13.8129 12L21 4.81286Z"
      fill={fill}
    />
  </svg>
);

export default Close;
