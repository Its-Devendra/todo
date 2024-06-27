import React, { useState } from 'react';
import { Modal, Typography, TextField, Button, Box } from '@mui/material';

const EditTaskModal = ({ open, handleClose, task, handleSave }) => {
  const [editedTaskData, setEditedTaskData] = useState({
    task: task?.task || '',
    priority: task?.priority || '',
    dueDate: task?.dueDate || '',
    category: task?.category || '',
  });

  const handleSaveClick = () => {
    handleSave(editedTaskData); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-task-modal"
      aria-describedby="modal for editing task"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h6" gutterBottom>Edit Task</Typography>
        <TextField
          label="Task"
          fullWidth
          value={editedTaskData.task}
          onChange={(e) => setEditedTaskData({ ...editedTaskData, task: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Priority"
          fullWidth
          value={editedTaskData.priority}
          onChange={(e) => setEditedTaskData({ ...editedTaskData, priority: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Due Date"
          fullWidth
          value={editedTaskData.dueDate}
          onChange={(e) => setEditedTaskData({ ...editedTaskData, dueDate: e.target.value })}
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Category"
          fullWidth
          value={editedTaskData.category}
          onChange={(e) => setEditedTaskData({ ...editedTaskData, category: e.target.value })}
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSaveClick}>Save</Button>
          <Button variant="outlined" color="secondary" onClick={handleClose} style={{ marginLeft: '10px' }}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTaskModal;
