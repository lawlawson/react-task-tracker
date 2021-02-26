import React from 'react';

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <labe>Task</labe>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <labe>Day & Time</labe>
        <input type='text' placeholder='Add Day & Time' />
      </div>
      <div className='form-control form-control-check'>
        <labe>Set Reminder</labe>
        <input type='checkbox' />
      </div>
      <input type='submit' value='save task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
