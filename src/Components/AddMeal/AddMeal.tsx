import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {useNavigate, useParams} from 'react-router-dom';
import {Meal, MealItemType} from '../../types';

const AddMeal = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<Meal>({
    calories: '',
    category: '',
    mealDesc: '',
  });
  const id = params.id;

  useEffect(() => {
    const fetchEditData = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await axiosApi.get(`meals/${id}.json`);
          const fetchedMeal: MealItemType = response.data;
          setMeal(fetchedMeal);
        } catch (e) {
          console.log('Error' + e);
        } finally {
          setLoading(false);
        }
      }
    };
    void fetchEditData();
  }, [id]);

  const mealChanged = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = event.target;

    setMeal(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await axiosApi.put(`/meals/${id}.json`, meal);
      } else {
        await axiosApi.post('/meals.json', meal);
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit meal' : 'Create'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            name="calories"
            className="form-control"
            onChange={mealChanged}
            value={meal.calories}
            required
          />
        </div>
        <div>
          <label htmlFor="mealDesc">Meal Description:</label>
          <textarea
            id="mealDesc"
            name="mealDesc"
            className="form-control"
            onChange={mealChanged}
            minLength="3"
            value={meal.mealDesc}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Time to eat:</label>
          <select
            id="category"
            name="category"
            className="form-control"
            onChange={mealChanged}
            value={meal.category}
            required
          >
            <option value="" disabled hidden>Choose category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <button className="btn btn-secondary" type="submit"
                disabled={loading}>{loading ? 'Loading...' : 'Save'}</button>
      </form>
    </div>
  );
};

export default AddMeal;
