import "./Footer.scss";
import { STATIC_DATA } from "../../config/StaticData";
  

export default function Footer() {
    const {
        ENGLISH: {
            Footer: { FOOTER_CONTACT_INFO_HEADING, FOOTER_CONTACT_INFO, FOOTER_CATEGORY_HEADING, FOOTER_SUBSCRIPTION_HEADING, FOOTER_SUBSCRIPTION_INFO },      
        },
      } = STATIC_DATA;

    return(
        <div>
        <div id="footer-container">
            <div className="left">
                <h2>{FOOTER_CONTACT_INFO_HEADING}</h2>
                <p>
                    {FOOTER_CONTACT_INFO}
                </p>
            </div>
            <div className="middle">
                <h2>{FOOTER_CATEGORY_HEADING}</h2>
                <ul>
                    <li>Accesories (25)</li>
                    <li>Jeans (32) </li>
                    <li>Tops (18) </li>
                    <li>Jackets (4) </li>
                </ul>
            </div>
            <div className="rigth">
                <h2>{FOOTER_SUBSCRIPTION_HEADING}</h2>
                <span><input type="text" className="subscriptio-textbox"/> </span>
                <span><input type="button" value="Subscribe" className="subscription-button" /></span>
                <p>{FOOTER_SUBSCRIPTION_INFO}</p>
            </div>
            </div>  
        </div>
    );
}




