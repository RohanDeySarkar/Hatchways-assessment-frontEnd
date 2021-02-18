import { useEffect, useState } from 'react';
import './App.css';

import {useStateValue} from './StateProvider';

import Cards from './components/Cards';
import Header from './components/Header'

function App() {

  const [{filters, students, tags}, dispatch] = useStateValue();

  // console.log('Name Filter-->', filters[0], '||', 'Tag Filter-->', filters[1]);

  const [counter, setCounter] = useState(0);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() =>{
    // console.log('Filters changed')
    const filteredStudent = students.filter((student) => ((student.firstName + ' ' + student.lastName).toLowerCase()).includes(filters[0].toLowerCase()))

    // Not in use filter tags
    const filteredTags = tags.filter((eachTag) => (eachTag.tag).includes(filters[1]));

    // console.log(filteredStudent)
    // console.log(filteredTags)

    console.log(counter, filters[0].length);

    if (filters[0].length === 0) {
      fetchData();
    } else if (counter > filters[0].length) {
      fetchData();
      setCounter(0);
    } else {
      dispatch({
        type: 'SET_DATA',
        payload: filteredStudent
      });
      setCounter(filters[0].length);
    }

  }, [filters[0], filters[1]])

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
