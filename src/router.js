import { App } from "components/App";
import Dashboard from "pages/Dashboard";
import LoginPage from "pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])