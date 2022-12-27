import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(()=>import('./pages/login'));
const SignUp = lazy(()=>import('./pages/signup'));

function App() {
  return (
    <Router>
      <Suspense fallback = {<p>loading...</p>}>
        <Routes>
          <Route path = {ROUTES.LOGIN} element={<Login/>}></Route>
          <Route path = {ROUTES.SIGNUP} element={<SignUp/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


