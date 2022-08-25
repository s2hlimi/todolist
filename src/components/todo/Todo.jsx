import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { removeTodo, changeTodo } from "../../redux/modules/Todo";
import { Link } from "react-router-dom";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="todo-container">
      <div>
        <Link to={"detail/" + todo.id}>상세보기</Link>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => dispatch(changeTodo(todo.id))}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
