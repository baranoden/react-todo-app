import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";

function Item({ title }) {
  const { removeTask, findItem } = useContext(ListContext);
  return (
    <li>
      <span>{title.title}</span>
      <button onClick={() => findItem(title.id)}>Edit</button>
      <button onClick={() => removeTask(title.id)}>Delete</button>
    </li>
  );
}

export default Item;
