import "./Collection.css"
import Image from "../image/Image";
const Collections = () => {
    return(
        <div className="collections">
            <div className="collection">
                <Image path="/pins/pin1.jpeg"/>
                <div className="info">
                    <h1>Title</h1>
                    <span>12 pins . 1w</span>
                </div>
            </div>
        </div>
    )
}
export default Collections;