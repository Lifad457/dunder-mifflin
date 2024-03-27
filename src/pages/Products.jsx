import { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData, useOutletContext } from "react-router-dom";
import { getProducts } from "../api";
import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";
import { Product, ProductsWrapper, ProductsContainer, FiltersWrapper } from "../styles/products.css";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [sizeFilter, setSizeFilter] = useState("all")
    const [weightFilter, setWeightFilter] = useState("all")
    const [typeFilter, setTypeFilter] = useState("all")
    const dataPromise = useLoaderData()

    function renderProductElements(products) {
        const productElements = products.map(product => {
            return (
                <ProductCard key={product.id} product={product} />
            )}
        )

        return (
            <ProductsWrapper>
                {productElements}
            </ProductsWrapper>
        )
    }
    
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ProductsContainer>
                    <FiltersWrapper>
                        <div>
                            <h3>Filter by Type</h3>
                            <button onClick={() => setSizeFilter("all")}>All</button>
                            <button onClick={() => setSizeFilter("A3")}>A3</button>
                            <button onClick={() => setSizeFilter("A4")}>A4</button>
                            <button onClick={() => setSizeFilter("A5")}>A5</button>
                        </div>
                        <div>
                            <h3>Filter by Weight</h3>
                            <button onClick={() => setWeightFilter("all")}>All</button>
                            <button onClick={() => setWeightFilter("80g")}>80g</button>
                            <button onClick={() => setWeightFilter("90g")}>90g</button>
                            <button onClick={() => setWeightFilter("120g")}>120g</button>
                        </div>
                    </FiltersWrapper>
                    <Suspense fallback={<h2>Loading ...</h2>}>
                        <Await resolve={dataPromise.products}>
                            {renderProductElements}
                        </Await>
                    </Suspense>
                </ProductsContainer>
            </Wrapper>
        </>
    )
}

export function loader() {
    return defer({products: getProducts()})
}
