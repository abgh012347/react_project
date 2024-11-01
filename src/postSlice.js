import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postlist: [
      { id: 1, title: "첫번째 포스트", desc: "first_post" },
      { id: 2, title: "두번째 포스트", desc: "second_post" },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.postlist.push({
        id: state.postlist.length + 1,
        title: action.payload.title,
        desc: action.payload.desc,
      });
    },
    editPost: (state, action) => {
      const id = action.payload.id;
      const title = action.payload.g_title;
      const desc = action.payload.g_desc;
      state.postlist = state.postlist.map((t) =>
        t.id === id ? { ...t, title: title, desc: desc } : t
      );
    },
    deletePost: (state, action) => {
      state.postlist = state.postlist.filter((t) => t.id !== action.payload);
    },
    readPost: (state, action) => {
      state.postlist = state.postlist.filter((t) => t.id === action.payload);
    },
  },
});

export const { createPost, editPost, deletePost, readPost } = postSlice.actions;
export default postSlice.reducer;
