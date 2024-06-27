import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../../redux/actions";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  TextField,
  Checkbox,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [editData, setEditData] = useState({ open: false, task: null });
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleOpenEditModal = (task) => {
    setEditData({ open: true, task });
  };

  const handleCloseEditModal = () => {
    setEditData({ open: false, task: null });
  };

  const handleSaveEditedTask = (updatedTask) => {
    dispatch(editTask(updatedTask));
    handleCloseEditModal();
  };

  const handleToggleTask = (index) => {
    dispatch(toggleTask(index));
  };

  return (
    <div className="task-list">
      <TextField
        label="Search Tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <Typography variant="subtitle2" style={{ marginRight: "10px" }}>
              🔍
            </Typography>
          ),
        }}
      />
      <List>
        {filteredTasks.map((task, index) => (
          <ListItem key={index} divider>
          <Checkbox
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
              color="primary"
              inputProps={{ 'aria-label': 'toggle task completion' }}
            />
            <ListItemText
              primary={task.task}
              secondary={
                <>
                  <Typography variant="body2" component="span">
                    Priority: {task.priority}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    style={{ marginLeft: "10px" }}
                  >
                    Due Date: {task.dueDate}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    style={{ marginLeft: "10px" }}
                  >
                    Category: {task.category}
                  </Typography>
                </>
              }
              className={task.completed ? 'completed' : ''}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <Delete />
              </IconButton>
              <IconButton edge="end" onClick={() => handleOpenEditModal(task)}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Edit Task Modal */}
      <EditTaskModal
        open={editData.open}
        handleClose={handleCloseEditModal}
        task={editData.task}
        handleSave={handleSaveEditedTask}
      />
    </div>
  );
};

export default TaskList;
