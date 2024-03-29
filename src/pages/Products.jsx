import { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getProducts } from "../api";
import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";
import { ProductsWrapper, ProductsContainer, FiltersWrapper, FilterButton, ButtonList } from "../styles/products.css";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [sizeFilter, setSizeFilter] = useState("all")
    const [weightFilter, setWeightFilter] = useState("all")
    const dataPromise = useLoaderData()

    function renderProductElements(products) {
        console.log(products)
        console.log(sizeFilter, weightFilter) 
        const displayedProducts = 
            sizeFilter === "all" && weightFilter === "all" ? products : 
                sizeFilter === "all" ? products.filter(product => product.weight === weightFilter) :
                    weightFilter === "all" ? products.filter(product => product.dimension === sizeFilter) :
                        products.filter(product => product.dimension === sizeFilter && product.weight === weightFilter)
                
        const productElements = displayedProducts.map(product => {
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
                        <ButtonList>
                            <h3>Filter by Type :</h3>
                            <FilterButton 
                                className={sizeFilter === "all" ? "active" : "" } 
                                onClick={() => setSizeFilter("all")}
                            >All</FilterButton>
                            <FilterButton 
                                className={sizeFilter === "A3" ? "active" : "" }
                                onClick={() => setSizeFilter("A3")}
                            >A3</FilterButton>
                            <FilterButton 
                                className={sizeFilter === "A4" ? "active" : "" }
                                onClick={() => setSizeFilter("A4")}
                            >A4</FilterButton>
                            <FilterButton 
                                className={sizeFilter === "A5" ? "active" : "" }
                                onClick={() => setSizeFilter("A5")}
                            >A5</FilterButton>
                        </ButtonList>
                        <ButtonList>
                            <h3>Filter by Weight :</h3>
                            <FilterButton 
                                className={weightFilter === "all" ? "active" : "" } 
                                onClick={() => setWeightFilter("all")}
                            >All</FilterButton>
                            <FilterButton 
                                className={weightFilter === "80" ? "active" : "" }
                                onClick={() => setWeightFilter("80")}
                            >80g</FilterButton>
                            <FilterButton 
                                className={weightFilter === "90" ? "active" : "" }
                                onClick={() => setWeightFilter("90")}
                            >90g</FilterButton>
                            <FilterButton 
                                className={weightFilter === "120" ? "active" : "" }
                                onClick={() => setWeightFilter("120")}
                            >120g</FilterButton>
                        </ButtonList>
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
