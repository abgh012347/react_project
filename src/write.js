import { useDispatch, useSelector } from "react-redux";
import { createPost } from "./postSlice";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Write() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const location = useLocation();
  const postList = useSelector((state) => state.post.postlist);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add Post</h2>
      <p>제목</p>
      <input
        type="text"
        placeholder="여기에 입력하세요."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <p>내용</p>
      <textarea
        placeholder="여기에 입력하세요."
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          {
            dispatch(
              createPost({ id: postList.length + 1, title: title, desc: desc })
            );
            navigate("/post");
          }
        }}
      >
        edit
      </button>
    </div>
  );
}
