import React from 'react';
import {MealItemType} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  mealItem: MealItemType
}

const MealItem: React.FC<Props> = ({mealItem}) => {
  return (
    <div className="meal-block d-flex">
      <div className="meal-info">
        <p className="meal-category">{mealItem.category}</p>
        <p className="meal-text">{mealItem.mealDesc}</p>
        <span className="meal-kcal">{mealItem.calories}kcal</span>
      </div>
      <div className="block-btn">
        <Link to={`/meals/${mealItem.id}/edit`} className="btn btn-secondary edit-btn"/>
        <Link to="/" className="btn btn-danger delete-btn"/>
      </div>
    </div>
  );
};

export default MealItem;