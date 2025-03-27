import UserButton from "../userButton/UserButton";
import Image from "../image/Image";
import "./TopBar.css";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="search">
                <Image path="/general/search.svg" alt="" />
                <input type="text" placeholder="Search"/>
            </div>
            <div className="user">
                <UserButton/>
            </div>
        </div>
    )
}

export default TopBar;