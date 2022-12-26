import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(()=>import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback = {<p>loading...</p>}>
        <Routes>
          <Route path = {ROUTES.LOGIN} element={<Login/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


