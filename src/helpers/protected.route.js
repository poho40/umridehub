import { Route, Navigate } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import Dashboard from "../pages/dashboard";
import UserContext from '../context/user';
import { useContext } from 'react';

export default function ProtectedRoute({children}) {
    const {user} = useContext(UserContext);
    return user ? children  : (<Navigate to = {ROUTES.LOGIN}/>);
}
