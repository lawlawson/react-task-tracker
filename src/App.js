import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      remind: true,
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      remind: true,
    },
    {
      id: 3,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      remind: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
