import React from "react";
import TodoList from "./pages/TodoList";
import Detail from "./components/detail/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<div>404error 없는페이지임</div>} />
    </Routes>
  );
}

export default App;
