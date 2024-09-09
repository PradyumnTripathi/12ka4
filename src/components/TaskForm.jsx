import React, { useState } from 'react';
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
    priority: "low", // Add default priority
  });

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag);
      setTaskData(prev => ({ ...prev, tags: filterTags }));
    } else {
      setTaskData(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };
  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder='Enter Your Task'
          onChange={handleChange}
        />

        <div className='task_form_bottom_line'>
          <div>
            <Tag tagName='Research' selectTag={selectTag} selected={checkTag("Research")} />
            <Tag tagName='Planning' selectTag={selectTag} selected={checkTag("Planning")} />
            <Tag tagName='Execution' selectTag={selectTag} selected={checkTag("Execution")} />
            <Tag tagName='Review' selectTag={selectTag} selected={checkTag("Review")} />
          </div>

          <div>
            {/* Priority Dropdown */}
            <label htmlFor="priority">Priority: </label>
            <select
              name="priority"
              value={taskData.priority}
              className="task_priority"
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            {/* Status Dropdown */}
            <select
              name="status"
              value={taskData.status}
              className='task_status'
              onChange={handleChange}
            >
              <option value='todo'>To Do</option>
              <option value='doing'>Doing</option>
              <option value='done'>Done</option>
            </select>

            <button type='submit' className='task_submit'>
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
