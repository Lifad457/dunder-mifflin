import { GlobalStyle } from "../styles/global.css";
import { Wrapper } from "../styles/wrapper.css";

export default function ErrorPage() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Page not found!</h1>
            </Wrapper>
        </>
    )
}