import { createBrowserRouter } from "react-router";
import { Home } from "@/Pages/Home";
import { LoginPage } from "../Pages/LoginPages";
import { RecoverPass } from "../Pages/RecoverPass";
import { RegisterPage } from "../Pages/RegisterPages";

export const router = createBrowserRouter([
{path: "/", element: <Home/>},
{path: "/login", element: <LoginPage/>},
{path: "/register", element: <RegisterPage/>},
{path: "/recover", element: <RecoverPass/>}
])