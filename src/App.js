import ListContextProvider from "./context/ListContext";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  return (
    <ListContextProvider>
      <Routes>
        {!user && (
          <Route path="/" element={<Login auth={() => setUser(true)} />} />
        )}
        {user && (
          <Route
            path="/todo"
            element={<Todo logout={() => setUser(false)} />}
          />
        )}
      </Routes>
    </ListContextProvider>
  );
}

export default App;
