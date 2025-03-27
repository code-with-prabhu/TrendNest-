import "./Comment.css"
import Image from "../image/Image";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";
const Comment = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="comment">
            <div className="commentList">
                <span className="count"> 5 Comments</span>
                <div className="singleComment">
                    <Image path="/general/noAvatar.png"/>
                    <div className="commentContent">
                        <span className="username">User name</span>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <span className="time">1h ago</span>
                    </div>
                </div>
            </div>
            <form action="/" className="commentFrom">
            <input type="text" placeholder="add a Comment" />
            <div className="emoji">
                <div onClick={() => setOpen(prev => !prev)}>😊</div>
                { open && <div className="emojiPicker">
                    <EmojiPicker/>
                </div>}
            </div>
            </form>
        </div>
    )
}
export default Comment;