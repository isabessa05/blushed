import { useState } from "react";
export default function ToDo() {
  const [newToDo, setNewToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeToDo = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = () => {
    if (inputValue.trim()) {
      const newSpan = {
        task: inputValue,
        completed: false,
        id: crypto.randomUUID(),
      };
      setNewToDo((prevToDo) => [...prevToDo, newSpan]);
      setInputValue("");
    } else {
      alert("Please write a to do!");
    }
  };

  const completedCheck = (id) => {
    const updateToDo = newToDo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setNewToDo(updateToDo);
  };

  const deleteTodo = (id) => {
    const deletedItem = newToDo.filter((todo) => todo.id !== id);
    setNewToDo(deletedItem);
  };

  return (
    <div>
      {/* to do container start */}

      <div className="container mx-auto text-center font-italiana p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl">todos</h1>
        <div className="container mx-auto w-80 rounded-lg flex items-center justify-between">
          <input
            onChange={(e) => changeToDo(e)}
            className="border-2 rounded-lg w-60 border-black"
            placeholder="Enter your to do"
            value={inputValue}
          />
          {/* This conditional rendering will allow the user to create only 10 todos at a time */}
          {newToDo.length >= 10 ? null : (
            <button
              onClick={() => addToDo()}
              class="w-20 border-2 rounded-lg border-black"
            >
              add to do
            </button>
          )}
        </div>
        {newToDo.map((todo, index) => (
          <div className="container mx-auto w-80 border-2 rounded-lg border-black flex items-center justify-between list-none px-2">
            <li className={todo.completed ? "line-through" : null} key={index}>
              {todo.task}
            </li>
            <div className="flex space-x-2">
              <button onClick={() => completedCheck(todo.id)}>✔️</button>
              <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
