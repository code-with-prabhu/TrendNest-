import "./PostInteraction.css"
import Image from "../image/Image";
const PostInteraction = () => {
    return(
        <div className="postactivity">
           <div className="icons">
            <Image path="/general/react.svg"/>
            273
            <Image path="/general/share.svg"/>
            <Image path="/general/more.svg"/>
           </div>
           <button>Save</button>
        </div>
    )
}

export default PostInteraction;