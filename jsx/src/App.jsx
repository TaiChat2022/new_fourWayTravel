import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Main from './pages/main'
import Book from './pages/book'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/trangchu/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/luutru" element={<Book />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;