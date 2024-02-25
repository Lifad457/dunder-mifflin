import { BannerContainer, TelIcon } from "../styles/banner.css";

export default function Banner() {

    return (
        <BannerContainer>
            <h1>Talk to a Sales Rep</h1> 
            <h1><span><TelIcon /> (123)-456-789</span></h1>
        </BannerContainer>
    )
}