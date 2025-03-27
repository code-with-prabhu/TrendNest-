import "./GalleryItem.css";
import { Link } from "react-router";
import Image from "../image/Image";

const GalleryItem = ({ item }) => {
    const height = (372 * item.height)/ item.width;
  return (
    <div
      className="galleryitem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <Image path={item.media} alt="/" /> */}
      
      <Image path={item.media} alt="" w={372} h={height}/>
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="save">Save</button>
      <div className="floatIcon">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
