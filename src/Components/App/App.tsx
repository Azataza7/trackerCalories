import Header from '../Header/Header';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Meal from '../Meal/Meal';
import AddMeal from '../AddMeal/AddMeal';

const App = () => {
  return (
    <>
      <header className="header">
        <Header/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={(
            <Meal/>
          )}/>
          <Route path="add-meal" element={(
            <AddMeal/>
          )}/>
          <Route path="meals/:id/edit" element={(
            <AddMeal/>
          )}/>
          <Route path="*" element={(
            <h1 className="not-found-text">Not found</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
