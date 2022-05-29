import React, { useState } from 'react';

const Tour = ({ tour }) => {
  const { id, name, info, image, price } = tour;
  return <h2>{tour.name}</h2>;
};

export default Tour;
