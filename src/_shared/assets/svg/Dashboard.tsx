import React from 'react';

const Dashboard = ({ fill, ...props }: any) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 7C4 7.55228 4.44772 8 5 8H7C7.55228 8 8 7.55228 8 7V5C8 4.44772 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7ZM10 19C10 19.5523 10.4477 20 11 20H13C13.5523 20 14 19.5523 14 19V17C14 16.4477 13.5523 16 13 16H11C10.4477 16 10 16.4477 10 17V19ZM4 19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5C4.44772 16 4 16.4477 4 17V19ZM4 13C4 13.5523 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13V11C8 10.4477 7.55228 10 7 10H5C4.44772 10 4 10.4477 4 11V13ZM10 13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10H11C10.4477 10 10 10.4477 10 11V13ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM10 7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V7ZM16 13C16 13.5523 16.4477 14 17 14H19C19.5523 14 20 13.5523 20 13V11C20 10.4477 19.5523 10 19 10H17C16.4477 10 16 10.4477 16 11V13ZM16 19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17C16.4477 16 16 16.4477 16 17V19Z"
      fill={fill}
    />
  </svg>
);

export default Dashboard;
