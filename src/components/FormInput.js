import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../context/ListContext";

function FormInput() {
  const { addTask, editTask, editItem } = useContext(ListContext);

  const [title, setTitle] = useState();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <div>
      <h1>Todo!</h1>
      <form className="todoform" onSubmit={handleSubmit}>
        <input
          className="todoinput"
          onChange={handleChange}
          value={title}
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="What to do?"
        />
        <button className="todobutton" type="submit">
          Todo!
        </button>
      </form>
    </div>
  );
}

export default FormInput;
