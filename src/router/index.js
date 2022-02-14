import {Suspense, lazy} from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Route,Routes,  } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PrivateRoute, PublicRoute } from "./config";

const Login = lazy(()=>import('../pages/auth/Login'));
const Users = lazy(()=> import('../pages/auth/Dashbord'));
const User = lazy(()=>import('../pages/User'));
const NotFound = lazy(()=>import('../pages/NotFound'));
const MainRouter = () => {
    const user = useSelector((state)=>state.user);
    const isAuthenticated =  user.token.length? true : false
    return (
        <BrowserRouter>
            {isAuthenticated && <Navbar/>}
            <Suspense fallback={<p>Loadin...</p>}>
                <Routes>
                    <Route
                        path="/"
                        element={
                         <PublicRoute isAuthenticated={isAuthenticated} >
                             <Login />
                        </PublicRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                         <PrivateRoute isAuthenticated={isAuthenticated} >
                             <Users />
                        </PrivateRoute>
                        }
                    />
                    <Route
                        path="/user/:id"
                        element={
                         <PrivateRoute isAuthenticated={isAuthenticated} >
                             <User/>
                        </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter;