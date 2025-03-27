import { useState } from "react";
import Image from "../image/Image";
import "./UserButton.css"
const UserButton = () => {
    let [open, setOpen] = useState(false);
    let currUser = true;
    return currUser ? (
        <div className="userButton">
            <Image path="general/noAvatar.png" alt="" />
            <Image path="general/arrow.svg" alt=""  className="arrow" onClick={() => setOpen((prev) => !prev)}/>
            {open && <div className="userOptions">
                <div className="userOption">Profile</div>
                <div className="userOption">Setting</div>
                <div className="userOption">LogOut</div>
            </div>}
        </div>
    ) : (
        <a href="/" className="Login">Login / SignUp</a>
    )
}

export default UserButton;