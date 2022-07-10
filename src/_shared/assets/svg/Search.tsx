import React from 'react';

const Search = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.6857 3C12.4589 3 14.1594 3.70439 15.4132 4.9582C16.667 6.21202 17.3714 7.91255 17.3714 9.68571C17.3714 11.3417 16.7646 12.864 15.7669 14.0366L16.0446 14.3143H16.8571L22 19.4571L20.4571 21L15.3143 15.8571V15.0446L15.0366 14.7669C13.864 15.7646 12.3417 16.3714 10.6857 16.3714C8.91255 16.3714 7.21202 15.667 5.9582 14.4132C4.70439 13.1594 4 11.4589 4 9.68571C4 7.91255 4.70439 6.21202 5.9582 4.9582C7.21202 3.70439 8.91255 3 10.6857 3V3ZM10.6857 5.05714C8.11429 5.05714 6.05714 7.11429 6.05714 9.68571C6.05714 12.2571 8.11429 14.3143 10.6857 14.3143C13.2571 14.3143 15.3143 12.2571 15.3143 9.68571C15.3143 7.11429 13.2571 5.05714 10.6857 5.05714Z"
      fill={fill}
    />
  </svg>
);

export default Search;