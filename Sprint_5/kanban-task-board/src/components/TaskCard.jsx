import { useState } from "react";

function TaskCard({ task, deleteTask, moveTask, editTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const priority_effect = {
    low: "border-green-200 bg-green-100",
    medium: "border-amber-300 bg-amber-100",
    high: "border-red-400 bg-red-100 "
  };

  return (
    <div className={`border-2 rounded mb-2 p-1 ${priority_effect[task.priority]}`}>

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      ) : (
        <p onClick={() => setIsEditing(true)} className="cursor-pointer">
          {task.text}
        </p>
      )}



      {isEditing && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              editTask(task.id, editedText);
              setIsEditing(false);
            }}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>

          <button
            onClick={() => {
              setEditedText(task.text);
              setIsEditing(false);
            }}
            className="bg-gray-500 text-white px-2 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      )}





      <div className="flex justify-between items-center my-1">
        <button onClick={() => moveTask(task.id, 'left')} className={` py-[2px] px-2 rounded ${task.status !== "todo" ? "bg-blue-500 cursor-pointer" : "bg-transparent"} rotate-180 text-gray-100 `} >{task.status !== 'todo' ? "➤" : ""}</button>

        <button onClick={() => deleteTask(task.id)} className="border rounded py-[2px] px-2 bg-red-500 text-white cursor-pointer
          active:bg-red-700">
          Delete
        </button>

        <button onClick={() => moveTask(task.id, 'right')} className={` py-[2px] px-2 rounded ${task.status !== "done" ? "bg-blue-500 cursor-pointer" : "bg-transparent"} text-gray-100 `} >{task.status !== 'done' ? "➤" : ""}</button>
      </div>
    </div>
  );
}

export default TaskCard;