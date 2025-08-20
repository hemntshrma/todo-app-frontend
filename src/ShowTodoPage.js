import { callUpdateAPI, callGetAllAPI } from "./BackendAPI";

function ShowTodoPage(props) {
  const todoArr = props.todo;

  async function handleClick(e, todoId) {
    await callUpdateAPI(
      '/update-todo',
      { status: 'completed', completionDate: new Date() },
      { 'todoId': todoId }
    );
    let todoList = await callGetAllAPI('/read-todos');
    props.setTodo(todoList);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl w-full max-w-4xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-white text-3xl font-bold text-center">Pending Todos</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-white">
            <thead className="bg-indigo-800">
              <tr>
                <th className="px-4 py-3 text-left border-b border-gray-700 text-sm">Todo Title</th>
                <th className="px-4 py-3 text-left border-b border-gray-700 text-sm">Due Date</th>
                <th className="px-4 py-3 text-center border-b border-gray-700 text-sm">Mark Done</th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map((value) =>
                value.status === "pending" && (
                  <tr
                    key={value.todoId}
                    className="bg-gray-800 even:bg-gray-700 hover:bg-indigo-900 transition-colors duration-300"
                  >
                    <td className="px-4 py-2 border-t border-gray-700 text-sm">{value.todoTitle}</td>
                    <td className="px-4 py-2 border-t border-gray-700 text-sm">{value.dueDate}</td>
                    <td className="px-4 py-2 border-t border-gray-700 text-center">
                      <button
                        onClick={(e) => handleClick(e, value.todoId)}
                        className="bg-gradient-to-r from-green-400 to-green-600 hover:brightness-110 text-black font-semibold px-3 py-1 rounded-md shadow transition text-sm"
                      >
                        ✅
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowTodoPage;
