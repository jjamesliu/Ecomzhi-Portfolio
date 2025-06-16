import profile from "../assets/ecomzhi_profile.png"
import "./NameHeading.css"

export default function NameHeading() {
    return (
    <>
      <header>
      <img src={profile} alt="ecomzhi profile picture"/>
      <h1>ecomzhi</h1>
      <h3>Ecommerce • Amazon FBA/FBM </h3>
      </header>
    </>
    )
}