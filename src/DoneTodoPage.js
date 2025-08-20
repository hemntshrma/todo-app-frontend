function DoneTodoPage(props) {
  const todoArr = props.todo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl w-full max-w-4xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-white text-3xl font-bold text-center">Completed Todos</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse text-white">
            <thead className="bg-green-800">
              <tr>
                <th className="px-4 py-3 text-left border-b border-gray-700 text-sm">Todo Title</th>
                <th className="px-4 py-3 text-left border-b border-gray-700 text-sm">Completed On</th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map(
                (todo) =>
                  todo.status === "completed" && (
                    <tr
                      key={todo.todoId}
                      className="bg-gray-800 even:bg-gray-700 hover:bg-green-900 transition-colors duration-300"
                    >
                      <td className="px-4 py-2 border-t border-gray-700 text-sm">
                        {todo.todoTitle}
                      </td>
                      <td className="px-4 py-2 border-t border-gray-700 text-sm">
                        {todo.completionDate
                          ? new Date(todo.completionDate).toLocaleDateString()
                          : ""}
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

export default DoneTodoPage;
