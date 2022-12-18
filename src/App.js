import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [addFormIsShowing, setAddFormIsShowing] = useState(false);
  const [tasks, setTasks] = useState();

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    );
  }; 

  // delete task
  const deleteTask = (id) => {
    console.log(id);
    setTasks(
      tasks.filter((task) => task.id !== id )
    );
  };

  return (
    <div className="App container">
      <Header 
        onToggle={() => setAddFormIsShowing(!addFormIsShowing)} 
        showAdd={addFormIsShowing}
      />
      {addFormIsShowing && <AddTask 
        onAdd={addTask}
      />}
      
      {tasks.length > 0 ? 
        (
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : 
        "No tasks to show" 
      }
    </div>
  );
}

export default App;