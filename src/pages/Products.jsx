import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getProducts } from "../api";
import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";
import { Product, ProductsWrapper, ProductsContainer } from "../styles/products.css";

export default function Products() {
    const dataPromise = useLoaderData()

    function renderProductElements(products) {
        const productElements = products.map(product =>
            {
            return (
                <Product key={product.id} >
                    <h3>{`${product.dimension} ${product.weight}g ${product.type}`}</h3>
                    <p>{`${product.quantity} sheets`}</p>
                    <p><span>{`${product.price} €`}</span></p>
                </Product>
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
