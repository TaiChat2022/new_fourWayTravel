import { Backdrop, CircularProgress } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

import { Suspense, lazy } from 'react';

const Main = lazy(() => import("./pages/main"))
const Login = lazy(() => import("./components/Login"))
const ListLuuTru = lazy(() => import("./pages/list_luuTru"))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Backdrop open style={{
          zIndex: 10000
        }} className="flex items-center justify-center">
          <CircularProgress />
        </Backdrop>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/trangchu/*" element={<Main />} />
            <Route path="/login" element={<Login />} />

            <Route path="/luuTru/" element={<Main />} />
            <Route path="/luuTru/:id" element={<ListLuuTru />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;