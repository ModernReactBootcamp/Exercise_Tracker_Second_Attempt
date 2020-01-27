import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import CreateExersice from './components/CreateExersice';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExersices';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' exact component={EditExercise} />
      <Route path='/create' exact component={CreateExersice} />
      <Route path='/user' exact component={CreateUser} />
    </Router>
  );
}

export default App;
