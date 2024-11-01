import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "./postSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
// import store from "./postStore";

export default function Post() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postlist);
  //   const [getpostList, setPostList = useState([...postList]);

  return (
    <div>
      <br />
      <h2>Post List</h2>
      <ul>
        {postList.map((p) => (
          <li key={p.id}>
            <Link
              to={"/read/" + p.id}
              state={{ id: p.id, title: p.title, desc: p.desc }}
            >
              {p.title}
            </Link>
            &nbsp;
            <button onClick={() => dispatch(deletePost(p.id))}>Delete</button>
            &nbsp;
            <Link
              to={"/edit/" + p.id}
              state={{ id: p.id, title: p.title, desc: p.desc }}
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
