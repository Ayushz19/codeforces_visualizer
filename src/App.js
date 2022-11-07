import logo from './logo.svg';
import './App.css';
import Show from "../src/components/Show"
import Navbar from "../src/components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompareData from './components/Compare/CompareData';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="app">
          <Routes>
            <Route path='/' element={<Show />} />
            <Route path='/compare' element={<CompareData />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
