import React, {useEffect, useState} from 'react';
import TotalCalories from '../TotalCalories/TotalCalories';
import {NavLink} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import {Meal, MealsJson} from '../../types';
import Spinner from '../Spinner/Spinner';
import MealItem from './MealItem';

const Meal:React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const response: MealsJson = await axiosApi.get('/meals.json');
    try {
      const mealList: Meal[] = Object.keys(response.data).map((id) => ({
        id: id,
        ...response.data[id]
      }));

      setMeals(mealList);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);

  let mealList = (
    meals.map((meal, i) => {
      return <MealItem key={i} mealItem={meal}/>
    })
  )

  return (
    <>
      <div className="block-calories-add-meal">
        <TotalCalories total={totalCalories}/>
        <NavLink className="btn btn-light" to="add-meal">Add meal</NavLink>
      </div>
      <div className="meals">
        {loading ? <Spinner/> : mealList}
      </div>
    </>
  );
};

export default Meal;