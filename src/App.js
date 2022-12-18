import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [addFormIsShowing, setAddFormIsShowing] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);


  // fetch Tasks
  const fetchTasks = async () => {
    // gives the entire list of tasks. mehod is GET by default 
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

  // add task
  const addTask = async (task) => {
    // previously used logic to generate random id's for tasks
    // const id = Math.floor(Math.random() * 10000) + 1;

    // response is the newly added task 
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(task)
    });

    const newlyAddedTask = await res.json();
    setTasks([...tasks, newlyAddedTask]);

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