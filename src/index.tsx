import { createRoot } from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import router from "./router";
import {store} from './store';
import { Provider } from 'react-redux'
import axios from "axios";
import "./tailwind/tailwind-output.css";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>);
