import { useState } from "react";
function AddTaskForm({ addTask }) {

  const [formData, setFormData] = useState({
    text: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevTasks => ({
      ...prevTasks,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(formData);

    setFormData({
      text: "",
      priority: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-evenly gap-3">
      <input type="text" name="text" placeholder="Enter task" required value={formData.text} onChange={handleChange} className="border border-gray-300 rounded py-2 px-4" />
      <select name="priority" id="priority" required value={formData.priority} onChange={handleChange} className="border border-gray-300 rounded py-2 text-center">
        <option value="" disabled>Assign Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  )
}

export default AddTaskForm;