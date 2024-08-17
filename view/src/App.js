import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup/Signup.js';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* 회원가입 페이지 경로 */}
        <Route path="/" element={<Signup/>} />       
      </Routes>
    </Router>
  )
}

export default App;
