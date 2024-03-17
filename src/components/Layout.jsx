import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { useEffect, useState } from "react";

export default function Layout() {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(localCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Header cart={cart} setCart={setCart} />
            <Outlet context={[cart, setCart]} />
            <Banner />
            <Footer />
        </>
    )
}