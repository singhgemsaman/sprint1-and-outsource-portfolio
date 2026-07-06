import { React, useState, useEffect } from 'react'
import AddTaskForm from "./components/AddTaskForm";
import SearchBar from "./components/Searchbar";
import Board from "./components/Board";

function App() {
  const status_list = ["todo", "progress", "done"];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTask = (task) => {
    const new_task = {
      id: Date.now(),
      ...task,
      status: "todo",
    };

    setTasks((prev) => [...prev, new_task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const moveTask = (id, direction) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          const curr_index = status_list.indexOf(task.status);
          const calc_index = direction === "right" ? curr_index + 1 : curr_index - 1;

          if (calc_index >= 0 && calc_index < status_list.length) {
            return { ...task, status: status_list[calc_index] };
          }
        }
        return task;
      });
    })
  }

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  useEffect(() => {
    console.log("Loading:", localStorage.getItem("tasks"));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  console.log("Task added:", tasks);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-500 text-center items-center">Kanban Task Board</h1>
      <div className='flex justify-between'>
        <AddTaskForm addTask={addTask} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="flex justify-center">
        <Board tasks={filteredTasks} deleteTask={deleteTask} moveTask={moveTask} editTask={editTask} />
      </div>
    </div>
  )
}

export default App