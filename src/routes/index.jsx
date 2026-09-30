import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RecoverPassPage } from "../pages/RecoverPassPage";
import { RegisterPage } from "../pages/RegisterPage";

export const router = createBrowserRouter([
{path: "/", element: <Home/>},
{path: "/login", element: <LoginPage/>},
{path: "/register", element: <RegisterPage/>},
{path: "/recover", element: <RecoverPassPage/>}
])