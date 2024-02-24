import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Banner />
            <Footer />
        </>
    )
}