import React, {useEffect, useState} from 'react';
import TotalCalories from '../TotalCalories/TotalCalories';
import {NavLink} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import {Meal, MealsJson} from '../../types';

const Meal = () => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const response: MealsJson = await axiosApi.get('/meals.json');
    try {
      const mealList = Object.keys(response.data).map((id) => ({
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
  }, [fetchData]);

  useEffect(() => {
    console.log(meals);
  }, []);

  return (
    <>
      <div className="block-calories-add-meal">
        <TotalCalories/>
        <NavLink className="btn btn-light" to="add-meal">Add meal</NavLink>
      </div>
      <div className="meals">

      </div>
    </>
  );
};

export default Meal;