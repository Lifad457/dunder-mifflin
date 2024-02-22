import { CardWrapper } from "../styles/card.css";
import test from "../assets/images/test.jpg";

export default function Card() {
    return (
        <CardWrapper>
            <img src={test} />
            <p>White paper ream A4 80gr</p>
            {/* <p>White paper case A4 80gr</p> */}
            <p>500 Sheets</p>
            {/* <p>2500 Sheets</p> */}
            <p>€4.99</p>
            {/* <p>€24.95</p> */}
            <div>
                <button>Ream - 500 sheets</button>
                <button>Case - 2 500 sheets</button>
            </div>
            <hr />
            <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
            <button>ADD TO CART</button>
        </CardWrapper>
    )
}