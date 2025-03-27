import "./PostPage.css";
import Image from "../../Components/image/Image";
import PostInteraction from "../../Components/postinteraction/PostInteraction";
import Comment from "../../Components/comment/Comment";
import { Link } from "react-router";

const PostPage = () => {
  return (
    <div className="postpage">
      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/pin1.jpeg" w={736} />
        </div>
        <div className="postDetails">
          <PostInteraction />
          <Link to="/Dummy" className="postUser">
            <Image path="/general/noAvatar.png" />
            <span>Dummy User</span>
          </Link>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
