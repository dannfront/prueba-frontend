import { Outlet } from "react-router";
import Nav from "../components/shared/Nav";



export default function MainLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}
