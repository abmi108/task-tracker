import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const taskList = [
  {
      id: 1,
      text: "Go for shopping",
      day: "Dec 13th at 1:30pm",
      reminder: true,
  },
  {
      id: 2,
      text: "Find hotels",
      day: "Dec 15th at 10:30am",
      reminder: false,
  },
  {
      id: 3,
      text: "Go to temple",
      day: "Dec 19th at 12:30pm",
      reminder: false,
  },
];

function App() {

  const [tasks, setTasks] = useState(taskList);

  const deleteTask = (id) => {
    console.log(id);
    setTasks(
      tasks.filter((task) => task.id !== id )
    );
  };

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : "No tasks to show" }
     
    </div>
  );
}

export default App;