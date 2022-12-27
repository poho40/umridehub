import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(()=>import('./pages/login'));
const SignUp = lazy(()=>import('./pages/signup'));
const NotFound = lazy(()=>import('./pages/notfound'));

function App() {
  return (
    <Router>
      <Suspense fallback = {<p>loading...</p>}>
        <Routes>
          <Route path = {ROUTES.LOGIN} element={<Login/>}/>
          <Route path = {ROUTES.SIGNUP} element={<SignUp/>}/>
          <Route path = {ROUTES.NOTFOUND} element = {<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


