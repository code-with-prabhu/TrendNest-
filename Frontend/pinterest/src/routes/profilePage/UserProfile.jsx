import "./UserProfile.css"
import Image from "../../Components/image/Image";
import { useState } from "react";
import Gallery from "../../Components/gallery/Gallery";
import Collections from "../../Components/collections/Collections";
const UserProfile = () => {
    const [type, setType] = useState("saved");
    return(
        <div className="userProfile">
            <Image path="/general/noAvatar.png" alt="user" w={100} h={100} className="userImage"/>
            <h1 className="name">User Name</h1>
            <span className="username">@username</span>
            <div className="userData">10 Follower . 20 Following</div>
            <div className="ProfileEvents">
            <Image path="/general/share.svg" alt="share"/>
            <div className="buttons">
            <button>Message</button>
            <button>Follow</button>
            </div>
            <Image path="/general/more.svg" alt="more"/>
            </div>
            <div className="options">
                <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>Created</span>
                <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>Saved</span>
            </div>
            {type == "created" ? <Gallery/> : <Collections/>}
        </div>
    )
}

export default UserProfile;