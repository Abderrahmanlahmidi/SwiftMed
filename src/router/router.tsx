import { createBrowserRouter } from "react-router-dom";
import { Home, Dashboard, Map } from "./modules/main/lazyMain";
import { withSuspense } from "./modules/main/lazyMain";


export const router = createBrowserRouter([
    // {
    //     path:"/",
    //     element:withSuspense(<Dashboard/>)
    // },
    {
        path:"/",
        element:withSuspense(<Dashboard/>),
        children:[
            {
                index:true,
                element:<Map/>
            }
        ]
    }
])