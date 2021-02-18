import { useEffect, useState } from 'react';
import './App.css';

import {useStateValue} from './StateProvider';

import Cards from './components/Cards';
import Header from './components/Header'

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
    .then((res) => 
      res.json()
    )
    .then((data) =>{
      dispatch({
        type: 'SET_DATA',
        payload: data.students
      });
    });

  }, [])

  return (
    <div className="app">
      <div className="app__body">
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;
