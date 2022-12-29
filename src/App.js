import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(()=>import('./pages/login'));
const SignUp = lazy(()=>import('./pages/signup'));
const Dashboard = lazy(()=>import('./pages/dashboard'));
const Profile = lazy(()=>import('./pages/profile'));
const CreatePost = lazy(()=>import('./pages/createPost'));
const NotFound = lazy(()=>import('./pages/notfound'));

export default function App() {
  const {user} = useAuthListener();

  return (
    <UserContext.Provider value = {{user}}>
      <Router>
        <Suspense fallback = {<p>loading...</p>}>
          <Routes>
            <Route path = {ROUTES.LOGIN} element={<Login/>}/>
            <Route path = {ROUTES.SIGNUP} element={<SignUp/>}/>
            <Route path = {ROUTES.DASHBOARD} element={<Dashboard/>}/>
            <Route path = {ROUTES.PROFILE} element={<Profile/>}/>
            <Route path = {ROUTES.CREATEPOST} element={<CreatePost/>}/>
            <Route element = {<NotFound/>}/>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

