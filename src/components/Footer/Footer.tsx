import "./Footer.scss";

export default function Footer() {
    return(
        <div>
        <div id="footer-container">
            <div className="left">
                <h2>Contact Info</h2>
                <p>
                    Phone : (+91) 134567890
                    Address : 80A MG Road,
                    Udayan Building, Kolkata
                    West Bengal - 700415, India
                </p>
            </div>
            <div className="middle">
                <h2>Categories</h2>
                <ul>
                    <li>Accesories (25)</li>
                    <li>Jeans (32) </li>
                    <li>Tops (18) </li>
                    <li>Jackets (4) </li>
                </ul>
            </div>
            <div className="rigth">
            <h2>Let's stay in touch</h2>
            <span><input type="text" className="subscriptio-textbox"/> </span>
            <span><input type="button" value="Subscribe" className="subscription-button" /> 
            </span>
            <p>Keep up to date with our latest news and special offer</p>
            </div>
            </div>
            
            
        </div>
        
    );
}



