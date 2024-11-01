import { Link, Route } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/home">Home </Link>|<Link to="/post"> Post List </Link>|
      <Link to="/write"> Write Post </Link>
    </div>
  );
}
