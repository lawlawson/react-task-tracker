import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <>
      {Tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
