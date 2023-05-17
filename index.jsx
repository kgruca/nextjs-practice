import { useState } from "react";

const Header = ({ title }) => <h1>{title ? title : "Default title"}</h1>;

const HomePage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  const handleClick = () => setLikes(likes + 1);

  return (
    <div>
      <header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>

      <button onClick="{handleClick}">Like ({likes})</button>
    </div>
  );
};
