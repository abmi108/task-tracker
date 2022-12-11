import { useState } from "react";

const taskList = [
    {
        id: 1,
        text: "Go for shopping",
        day: "Dec 13th at 1:30pm"
    },
    {
        id: 2,
        text: "Find hotels",
        day: "Dec 15th at 10:30am"
    },
    {
        id: 3,
        text: "Go to temple",
        day: "Dec 19th at 12:30pm"
    },
];

const Tasks = () => {

    const [tasks, setTasks] = useState(taskList);

    return (
        <>
            {tasks.map( (task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    );
};

export default Tasks;