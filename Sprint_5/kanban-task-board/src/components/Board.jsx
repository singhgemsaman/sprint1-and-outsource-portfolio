import Column from "./Column";

function Board({ tasks, deleteTask, moveTask, editTask }) {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-2">

        <Column
          title="To Do"
          tasks={tasks.filter(task => task.status === "todo")}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
/>

        <Column
          title="In Progress"
          tasks={tasks.filter(task => task.status === "progress")}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
/>

        <Column
          title="Done"
          tasks={tasks.filter(task => task.status === "done")}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
/>
      </div>
    </div>
  );
}

export default Board;