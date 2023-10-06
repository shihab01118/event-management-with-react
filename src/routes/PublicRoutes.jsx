import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


const PublicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])

export default PublicRoutes;