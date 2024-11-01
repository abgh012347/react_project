import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Post from "./post";
import Write from "./write";
import Edit from "./edit";
import Read from "./read";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="post" element={<Post />}></Route>
          <Route path="write" element={<Write />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
