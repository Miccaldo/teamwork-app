import {
    createBrowserRouter, createRoutesFromElements, Route,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import Planet from "./pages/Planet/Planet";

const router = createBrowserRouter(createRoutesFromElements(
    <Route
        element={<Users />}
        path={'/users'}
    >
        <Route
            element={<Planet />}
            path="planets/:planetId"
        >
        </Route>
    </Route>
))



export default router;