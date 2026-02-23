import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "eat food", completed: false },
    { id: 2, text: "sleep", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  function myTodo() {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), item: newTodo, completed: false },
    ]);
    setNewTodo("");
  }
  function remove(index) {
    setTodos(todos.filter((_, i) => i !== index));

    console.log("hi");
  }

  function toggleComplete(index){
   setTodos(todos.map((todo, i) => 
  
    {if (i === index){return {...todo , completed:!todo.completed}}
    else {return todo;}}))}




  return (
    <div className="flex bg-linear-to-br from-violet-100 to-blue-200 flex-col justify-center items-center h-screen px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg flex flex-col gap-5">
        <div className="text-center mb-2">
          <h2 className="font-bold text-4xl text-gray-800">My Todos</h2>
          <p className="text-gray-400 text-sm mt-1">
            Stay organized, get things done
          </p>
        </div>

        <div className="flex gap-2">
          <input
            className="bg-gray-100 text-gray-800 outline-none rounded-xl p-3 text-base flex-1"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter your todo..."
          />
          <button
            className="bg-violet-500 hover:bg-violet-600 transition-colors text-white font-semibold rounded-xl px-5"
            onClick={myTodo}
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            className="bg-violet-500 text-white text-sm rounded-xl px-4 py-1.5 font-medium"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="bg-gray-100 text-gray-500 text-sm rounded-xl px-4 py-1.5 font-medium hover:bg-gray-200 transition-colors"
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className="bg-gray-100 text-gray-500 text-sm rounded-xl px-4 py-1.5 font-medium hover:bg-gray-200 transition-colors"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          {todos.filter((todo) => {
            if (filter === "all") return true;
            if (filter === "active") return todo.completed === false;
            if (filter === "completed") return todo.completed === true;
          }).map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" onChange={()=> toggleComplete(index)} checked={todo.completed} className="w-4 h-4 accent-violet-500" />
                <span className="text-gray-700 text-base todo-item">
                  {todo.text}
                </span>
              </div>
              <button
                className="text-red-400 hover:text-red-600 transition-colors text-sm font-medium"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </div>
          ))}

     
        </div>

        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>2 items left</span>
          <button className="hover:text-red-400 transition-colors">
            Clear Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
