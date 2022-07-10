import React from 'react';

const Number2 = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H13C14.1 13 15 12.1 15 11V9C15 7.9 14.1 7 13 7H9V9H13V11H11C9.9 11 9 11.9 9 13V17H15V15Z"
      fill={fill}
    />
  </svg>
);

export default Number2;
