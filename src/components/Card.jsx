import { CardButton, CardContent, CardImage, CardQuantity, CardWrapper } from "../styles/card.css";
import test from "../assets/images/test.jpg";

export default function Card() {
    return (
        <CardWrapper>
            <CardImage src={test} />
            <CardContent>
                <p>White paper ream A4 80gr</p>
                <p>500 Sheets</p>
                <p><span>€4.99</span></p>
            </CardContent>
            <CardQuantity>
                <div>-</div>
                <div>1</div>
                <div>+</div>
            </CardQuantity>
            <CardButton>ADD TO CART</CardButton>
        </CardWrapper>
    )
}