import React from "react";

const Todo = () => {
  return (
    <div className="flex bg-linear-to-br from-violet-100 to-blue-200 flex-col justify-center items-center h-screen px-4">

      {/* CARD */}
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg flex flex-col gap-5">

        {/* HEADER */}
        <div className="text-center mb-2">
          <h2 className="font-bold text-4xl text-gray-800">My Todos</h2>
          <p className="text-gray-400 text-sm mt-1">Stay organized, get things done</p>
        </div>

        {/* INPUT AREA */}
        <div className="flex gap-2">
          <input
            className="bg-gray-100 text-gray-800 outline-none rounded-xl p-3 text-base flex-1"
            type="text"
            placeholder="Enter your todo..."
          />
          <button className="bg-violet-500 hover:bg-violet-600 transition-colors text-white font-semibold rounded-xl px-5">
            Add
          </button>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 justify-center">
          <button className="bg-violet-500 text-white text-sm rounded-xl px-4 py-1.5 font-medium">All</button>
          <button className="bg-gray-100 text-gray-500 text-sm rounded-xl px-4 py-1.5 font-medium hover:bg-gray-200 transition-colors">Active</button>
          <button className="bg-gray-100 text-gray-500 text-sm rounded-xl px-4 py-1.5 font-medium hover:bg-gray-200 transition-colors">Completed</button>
        </div>

        {/* TODO LIST AREA */}
        <div className="flex flex-col gap-3 mt-2">

          {/* SINGLE TODO ITEM — just for UI preview */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-violet-500" />
              <span className="text-gray-700 text-base">Buy groceries</span>
            </div>
            <button className="text-red-400 hover:text-red-600 transition-colors text-sm font-medium">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-violet-500" />
              <span className="text-gray-700 text-base line-through ">Read a book</span>
            </div>
            <button className="text-red-400 hover:text-red-600 transition-colors text-sm font-medium">
              Delete
            </button>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>2 items left</span>
          <button className="hover:text-red-400 transition-colors">Clear Completed</button>
        </div>

      </div>
    </div>
  );
};

export default Todo;