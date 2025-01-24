import { createBrowserRouter } from "react-router-dom";
import { ALL_ROUTES } from "../constants/routes";
import { Home } from "../pages/Home/Home";
import { Layout } from "@/components";




export const router = createBrowserRouter([
    {
        path: ALL_ROUTES.BASE,
        Component: Layout,
        children: [
            {
                path: ALL_ROUTES.BASE,
                Component: Home
            }
        ]
    },
])

export default router