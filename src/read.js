import { useLocation } from "react-router-dom";
export default function Read() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const desc = location.state.desc;
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
