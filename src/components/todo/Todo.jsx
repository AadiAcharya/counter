import {useState} from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
     





  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 flex items-center justify-center p-4">
      
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 space-y-6">
        

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
          <p className="text-sm text-gray-500 mt-1">
            Organize your daily tasks efficiently
          </p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium transition">
            Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-full bg-indigo-500 text-white">
              All
            </button>
            <button className="px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-300 transition">
              Active
            </button>
            <button className="px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-300 transition">
              Completed
            </button>
          </div>

          <span className="text-sm text-gray-500">
            3 tasks left
          </span>
        </div>

        <div className="space-y-3">

     
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition">
            
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700">
                Learn advanced React
              </span>
            </div>

            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 text-sm font-medium">
                Delete
              </button>
            </div>

          </div>

          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl opacity-60">
            
            <div className="flex items-center gap-3">
              <input type="checkbox" checked readOnly className="w-4 h-4" />
              <span className="line-through text-gray-500">
                Build portfolio project
              </span>
            </div>

            <div className="flex gap-2">
              <button className="text-blue-500 text-sm font-medium">
                Edit
              </button>
              <button className="text-red-500 text-sm font-medium">
                Delete
              </button>
            </div>

          </div>

        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <button className="text-sm text-gray-500 hover:text-gray-700 transition">
            Clear Completed
          </button>
          <button className="text-sm text-red-500 hover:text-red-700 transition">
            Clear All
          </button>
        </div>

      </div>
    </div>
  );
};

export default Todo;