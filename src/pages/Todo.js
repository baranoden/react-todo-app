import React from "react";
import FormInput from "../components/FormInput";
import List from "../components/List";
import Footer from "../components/Footer";

function Todo({ logout }) {
  return (
    <div className="App">
      <FormInput />
      <List />
      <Footer logout={logout} />
    </div>
  );
}

export default Todo;
