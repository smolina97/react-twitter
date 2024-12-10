import { Button } from "@material-tailwind/react";
import { useState } from "react";
import PropTypes from "prop-types";
import UserInfo from "./UserInfo";

export default function Card({ username, name }) {
  const [isFollowing, setFollowing] = useState(false);
  const handleFollowing = () => setFollowing(!isFollowing);

  const [isHovering, setIsHovering] = useState(false);
  const textFollowing = isFollowing
    ? isHovering
      ? "Dejar de seguir"
      : "Siguiendo"
    : "Seguir";

  const buttonFollowing = `rounded-full shadow-sm inline-block text-center w-40 ${
    isFollowing
      ? "bg-blue-500/20 hover:bg-red-500/40 hover:text-red-900"
      : "hover:bg-blue-500/30"
  }`;

  return (
    <article className="flex items-center justify-between">
      <header>
        <UserInfo username={username} name={name} />
      </header>
      <aside>
        <Button
          variant="text"
          color="blue"
          className={buttonFollowing}
          onClick={handleFollowing}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {textFollowing}
        </Button>
      </aside>
    </article>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};