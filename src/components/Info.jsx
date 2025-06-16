import email_logo from "../assets/email_logo.svg"
import instagram_logo from "../assets/instagram_logo.svg"
import "./Info.css"


export default function Info() {
    return (
        <div className="Info">

                <a className="email_connect" href="mailto:ecomjamesz1@gmail.com">
                <img className="email_img" src={email_logo} alt="Email"/>
                <span>Email</span>
                </a>

                <a className="instagram_connect" 
                href="https://www.instagram.com/ecomzhi/" 
                target="_blank">
                <img className="instagram_img" src={instagram_logo} alt="Instagram"/>
                <span>Instagram</span>    
                </a>


        </div>
    )
}