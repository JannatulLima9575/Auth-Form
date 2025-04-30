import {
    createBrowserRouter,
} from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layouts,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/about",
                Component: Blogs,
            }
        ]
    },
]);