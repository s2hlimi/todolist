import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const todo_list = useSelector((state) => state.todos.todos);
  const todo_id = useParams();
  const todo = todo_list.filter((todo) => {
    return todo.id === Number(todo_id.id);
  });

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID:{todo[0].id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
            <StTitle>{todo[0].title}</StTitle>
            <StBody>{todo[0].body}</StBody>
          </StDialogHeader>
        </div>
      </StDialog>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export default Detail;
