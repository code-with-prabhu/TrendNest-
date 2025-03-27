import "./CreatePage.css";
import Image from "../../Components/image/Image";
const CreatePage = () => {
  return <div className="createpage">
    <div className="createTop">
      <h1>Create pin</h1>
      <button>Publish</button>
    </div>
    <div className="createButtom">
    <div className="upload">
      <div className="uploadtitle">
        <Image path="/general/upload.svg"/>
        <span>Choose a file</span>
      </div>
      <div className="uploadInfo">
        Add your Image Here. Maximum size 200 MB.
      </div>
    </div>
    <form action="" className="form">
      <div className="formElement">
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="enter your title" name="title" id="title"/>
      </div>

      <div className="formElement">
        <label htmlFor="description">description</label>
        <textarea rows={6} type="text" placeholder="enter detailed description" name="description" id="description"/>
      </div>

      <div className="formElement">
        <label htmlFor="link">Link</label>
        <input type="text" placeholder="Add a Link" name="link" id="link"/>
      </div>

      <div className="formElement">
        <label htmlFor="board">Board</label>
        <select name="board" id="board">
          <option>choose a board</option>
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
        </select>
      </div>

      <div className="formElement">
        <label htmlFor="tags">Tags</label>
        <input type="text" placeholder="Add tags" name="tags" id="tags"/>
        <small>Don't worry, it kept secreate</small>
      </div>

    </form>
    </div>
  </div>;
};

export default CreatePage;