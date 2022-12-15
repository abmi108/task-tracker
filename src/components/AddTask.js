import { useState } from "react";

const AddTask = ({ onAdd }) => {

    const [ text, setText ] = useState("");
    const [ day, setDay ] = useState("");
    const [ reminder, setReminder ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add a task");
            return;
        }

        onAdd({ text, day, reminder});

        setText("");
        setDay("");
        setReminder(false);

    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> 
                    Task
                    <input 
                        type="text" 
                        placeholder="Enter a task" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control">
                <label> 
                    Day & Time
                    <input 
                        type="text" 
                        placeholder="Enter Day & Time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)} 
                    />
                </label>
            </div>
            <div className="form-control form-control-check">
                <label> 
                    Set Reminder
                    <input 
                        type="checkbox"
                        value={reminder}
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)} 
                    />
                </label>
            </div>
            <input 
                type="submit" 
                className="btn btn-block"
                value="Save Task"
            />
        </form>
    );
};

export default AddTask;