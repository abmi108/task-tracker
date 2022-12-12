const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label> 
                    Add Task
                    <input type="text" placeholder="Enter a task" />
                </label>
            </div>
            <div className="form-control">
                <label> 
                    Add Day & Time
                    <input type="text" placeholder="Enter Day & Time" />
                </label>
            </div>
            <div className="form-control form-control-check">
                <label> 
                    Set Reminder
                    <input type="checkbox" />
                </label>
            </div>
        </form>
    );
};

export default AddTask;