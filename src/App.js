import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <div className="App">
      <section>
        <form className="add-form" onSubmit={onSubmitHandler}>
          <div className="input-group">
            <input
              className="add-input"
              type="text"
              value={title}
              onChange={titleChange}
            />
          </div>
          <button className="add_btn">추가하기</button>
        </form>
        <h2 className="list-title">Todo List</h2>
      </section>
      <div className="list-wrap">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="list">
              <h3 className="title">{todo.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
