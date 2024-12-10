import PropTypes from "prop-types";
import { Avatar } from "@material-tailwind/react";

function UserInfo({ username, name }) {
  return (
    <div className="flex items-center gap-1">
      <Avatar
        variant="rounded"
        size="md"
        src={`https://unavatar.io/${username}`}
        alt={username}
      />
      <div className="flex flex-col ml-3">
        <strong>{name}</strong>
        <span className="opacity-60">@{username}</span>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;