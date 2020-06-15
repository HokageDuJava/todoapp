import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <p
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </p>
        </div>
      );
    })
  ) : (
    <div className="collection-item">
      <p>There is no To-do in the list</p>
    </div>
  );
  return <div className="collection">{todoList}</div>;
};

export default Todo;
