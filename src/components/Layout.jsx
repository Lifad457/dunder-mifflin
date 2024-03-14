import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { useState } from "react";

export default function Layout() {
    const [cart, setCart] = useState([])

    return (
        <>
            <Header cart={cart} setCart={setCart} />
            <Outlet context={[cart, setCart]} />
            <Banner />
            <Footer />
        </>
    )
}