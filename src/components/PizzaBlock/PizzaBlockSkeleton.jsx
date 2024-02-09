import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="139" cy="139" r="120" />
    <rect x="27" y="285" rx="10" ry="10" width="230" height="27" />
    <rect x="25" y="340" rx="10" ry="10" width="230" height="88" />
    <rect x="25" y="463" rx="10" ry="10" width="70" height="27" />
    <rect x="125" y="453" rx="30" ry="30" width="130" height="45" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
