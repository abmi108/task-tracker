import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [addFormIsShowing, setAddFormIsShowing] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const dataFromServer = fetchTasks();
    // setTasks(dataFromServer);

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);


  // fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

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
  const deleteTask = async (id) => {
    console.log(id);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });

    setTasks(tasks.filter((task) => task.id !== id));
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