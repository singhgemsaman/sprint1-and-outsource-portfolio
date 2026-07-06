import TaskCard from "./TaskCard";

function Column({title, tasks, deleteTask, moveTask, editTask}) {
  return (
    <div className="border rounded px-3 py-1 w-1/3 mt-1 overflow-y-auto h-130">
      <h3 className="font-bold text-center">{title}</h3>
      <div className="">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} moveTask={moveTask} editTask={editTask}/>
        ))}
      </div>
    </div>
  );
}

export default Column;