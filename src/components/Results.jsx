import "./Results.css"
import amazon_result1 from "../assets/amazon_result1.png"
import amazon_result2 from "../assets/amazon_result2.png"

export default function Results() {
    return (
        <div className="Results">
            <h3>Results</h3>     
            <img className="amazon_pic1" 
            src={amazon_result1} 
            alt="amazon results 1">
            </img>

            <img className="amazon_pic2" 
            src={amazon_result2} 
            alt="amazon results 2">
            </img>
        </div>

    )
}