import { useState } from "react";

const AddTask = () => {

    const [ text, setText ] = useState("");
    const [ day, setDay ] = useState("");
    const [ reminder, setReminder ] = useState(false);


    return (
        <form className="add-form">
            <div className="form-control">
                <label> 
                    Add Task
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
                    Add Day & Time
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