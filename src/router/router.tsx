import { createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/main/lazyMain";
import { withSuspense } from "./modules/main/lazyMain";

export const router = createBrowserRouter([
    {
        path:"/",
        element:withSuspense(<Home/>)
    }
])