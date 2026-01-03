import React from "react";
import { BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

import TimeTable from '../pages/TimeTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimeTable />} />
      </Routes>
    </Router>
  );
}

export default App;