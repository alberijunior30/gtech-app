import { createBrowserRouter } from "react-router";

import { LoginPage } from "../Pages/LoginPages";
import { RecoverPass } from "../Pages/RecoverPass";
import { RegisterPage } from "../Pages/RegisterPages";

export const router = createBrowserRouter([
{path: "/", element: <LoginPage/>},
{path: "/register", element: <RegisterPage/>},
{path: "/recover", element: <RecoverPass/>}
])