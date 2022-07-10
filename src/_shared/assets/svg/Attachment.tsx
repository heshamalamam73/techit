import React from 'react';

const Attachment = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.4999 6V17.5C16.4999 19.71 14.7099 21.5 12.4999 21.5C10.2899 21.5 8.49988 19.71 8.49988 17.5V5C8.49988 3.62 9.61988 2.5 10.9999 2.5C12.3799 2.5 13.4999 3.62 13.4999 5V15.5C13.4999 16.05 13.0499 16.5 12.4999 16.5C11.9499 16.5 11.4999 16.05 11.4999 15.5V6H9.99988V15.5C9.99988 16.88 11.1199 18 12.4999 18C13.8799 18 14.9999 16.88 14.9999 15.5V5C14.9999 2.79 13.2099 1 10.9999 1C8.78988 1 6.99988 2.79 6.99988 5V17.5C6.99988 20.54 9.45988 23 12.4999 23C15.5399 23 17.9999 20.54 17.9999 17.5V6H16.4999Z"
        fill={fill}
      />
    </svg>
  </svg>
);

export default Attachment;