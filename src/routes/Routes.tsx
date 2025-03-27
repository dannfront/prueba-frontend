import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HistorialMedico from "../pages/HistorialMedico";
import Objetivos from "../pages/Objetivos";
import MainLayout from "../layout/MainLayout";


const router = createBrowserRouter([

    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: "/", Component: Home },
            {
                path: "/historial-medico",
                Component: HistorialMedico
            },
            {
                path: "/objetivos",
                Component: Objetivos
            }
        ]
    }



]);



export default router