import { useDispatch } from "react-redux";
import { editPost, readPost } from "./postSlice";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Edit() {
  const dispatch = useDispatch();
  const [g_title, setTitle] = useState("");
  const [g_desc, setDesc] = useState("");
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const desc = location.state.desc;
  const navigate = useNavigate();

  return (
    <div>
      <form onLoad={() => readPost(id)}>
        <h2>Edit Post</h2>
        <p>제목</p>
        <input
          type="text"
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <p>내용</p>
        <textarea
          defaultValue={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            {
              dispatch(editPost({ id, g_title, g_desc }));
              navigate("/post");
            }
          }}
        >
          edit
        </button>
      </form>
    </div>
  );
}
