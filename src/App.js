import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import AddEmployeeComponent from './components/add/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/update/UpdateEmployeeComponent';
import HomeComponent from './components/home/HomeComponent';


//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return ( <div className="App">
{/* 
<BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfEmployeeComponent />} />
        <Route path="/home" element={<CreateEmployeeComponent/>} />
      </Routes>
    </BrowserRouter>
 */}

  <Router>
  <Switch>
  <Route path="/" exact component={HomeComponent}></Route>
       <Route path="/add" component={AddEmployeeComponent}></Route>
          <Route path="/update/:id" component={UpdateEmployeeComponent}></Route>
  </Switch>   
  </Router>  
</div>
  );
}

export default App;