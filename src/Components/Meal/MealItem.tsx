import React from 'react';
import {MealItemType} from '../../types';
import {Link} from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {
  mealItem: MealItemType;
  refreshData: () => void;
}

const MealItem: React.FC<Props> = ({mealItem, refreshData}) => {

  const handleDelete = async (id: string) => {
    try {
      await axiosApi.delete(`meals/${id}.json`);
      await refreshData();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="meal-block d-flex">
      <div className="meal-info">
        <p className="meal-category">{mealItem.category}</p>
        <p className="meal-text">{mealItem.mealDesc}</p>
        <span className="meal-kcal">{mealItem.calories}kcal</span>
      </div>
      <div className="block-btn">
        <Link to={`/meals/${mealItem.id}/edit`} className="btn btn-secondary edit-btn "/>
        <Link to="/" className="btn btn-danger delete-btn" onClick={() => handleDelete(mealItem.id)}/>
      </div>
    </div>
  );
};

export default MealItem;