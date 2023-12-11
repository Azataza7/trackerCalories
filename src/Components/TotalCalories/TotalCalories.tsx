import React from 'react';

interface Props {
  total: number;
}

const TotalCalories: React.FC<Props> = ({total}) => {
  return (
    <div className="total-calories">
      <p>Total kcal: {total}</p>
    </div>
  );
};

export default TotalCalories;