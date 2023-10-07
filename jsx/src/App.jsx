import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './components/Login'
import Main from './pages/main'
import List_luuTru from './pages/list_luuTru';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/trangchu/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/luuTru/" element={<Main />} />
          <Route path="/luuTru/*" element={<List_luuTru />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;