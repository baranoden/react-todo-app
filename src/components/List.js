import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import Item from "./Item";

function List() {
  const { tasks } = useContext(ListContext);
  return (
    <ul>
      {tasks.length < 1 ? <h1>Add Some Tasks... </h1> : null}
      {tasks.map((title) => {
        return <Item title={title} key={title.id} />;
      })}
    </ul>
  );
}

export default List;
