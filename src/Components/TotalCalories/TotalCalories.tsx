import React from 'react';

interface Props {
  total: number;
}

const TotalCalories: React.FC<Props> = ({total}) => {
  return (
    <div className="total-calories">
      <p>Total: {total} kcal</p>
    </div>
  );
};

export default TotalCalories;