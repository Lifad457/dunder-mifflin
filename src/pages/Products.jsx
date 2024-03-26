import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getProducts } from "../api";
import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";
import { ProductsContainer } from "../styles/products.css";

export default function Products() {
    const dataPromise = useLoaderData()

    function renderProductElements(products) {
        const productElements = products.map(product =>
            {
            return (
                <div key={product.id} >
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            )}
        )

        return (
            <>
                <div>
                    {productElements}
                </div>
            </>
        )
    }
    
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ProductsContainer>
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
