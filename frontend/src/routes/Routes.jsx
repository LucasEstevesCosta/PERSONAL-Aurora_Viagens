import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import Destinations from '../pages/Destinations/Destinations';
import Packages from '../pages/Packages/Packages';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ItemDetails from '../pages/ItemDetails/ItemDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'destinations',
                element: <Destinations />
            },
            {
                path: 'packages',
                element: <Packages />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'details/:id',
                element: <ItemDetails />
            }
        ]
    }
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export default Routes;