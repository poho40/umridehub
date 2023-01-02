import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
import ProtectedRoute from "./helpers/protected.route";

const Login = lazy(()=>import('./pages/login'));
const SignUp = lazy(()=>import('./pages/signup'));
const Dashboard = lazy(()=>import('./pages/dashboard'));
const Profile = lazy(()=>import('./pages/profile'));
const CreatePost = lazy(()=>import('./pages/createPost'));
const UpdateForm= lazy(()=>import('./pages/updateForm'));
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
            <Route path = {ROUTES.DASHBOARD} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path = {ROUTES.PROFILE} element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path = {ROUTES.CREATEPOST} element={<ProtectedRoute><CreatePost/></ProtectedRoute>}/>
            <Route path = {ROUTES.UPDATEFORM} element={<ProtectedRoute><UpdateForm/></ProtectedRoute>}/>
            <Route element = {<NotFound/>}/>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

