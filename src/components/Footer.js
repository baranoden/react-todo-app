import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../context/ListContext";

function Footer({ logout }) {
  const { snap, tasks } = useContext(ListContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="row">
      <p>You have {tasks.length} to do</p>
      <button onClick={handleClick}>Log Out</button>
      <button onClick={() => snap()} className="delete">
        Delete ALL
      </button>
    </div>
  );
}

export default Footer;
