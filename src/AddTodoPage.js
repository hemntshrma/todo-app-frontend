import { useState } from "react";
import {callCreateAPI,callGetAllAPI } from './BackendAPI'


function AddTodoPage({ todo, setTodo }) {
  const [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    status: "pending",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    alert("form submitted, data = " + JSON.stringify(formData));

    let newTodo = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.dueDate,
      status: "pending",
    };

    // Make sure callCreateAPI is imported or defined
    await callCreateAPI("/create-todo", newTodo);

    const todoList = await callGetAllAPI('/read-todos');
    setTodo(todoList);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl w-full max-w-2xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 p-6">
          <h2 className="text-white text-4xl font-bold text-center">Add Todo</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-gray-900">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Todo Title
            </label>
            <input
              type="text"
              name="todoTitle"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your task"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 hover:brightness-110 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoPage;
