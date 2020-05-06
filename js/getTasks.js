class Tasks{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    showTask(){
        let task = document.getElementById('Tasks')
        task.innerHTML += `
        <div class="card mb-3">
            <div  class="card-body">
                <p> Task: ${this.name}</p>
                <p> Description: ${this.description}</p>
                <button class="btn btn-danger">Delete</button>
            </div>
       </div>`
        count++;
        bannerTasks();
        resetForm();
    }
}

let form = document.getElementById('Form');
form.addEventListener('submit', validationForm)

const showTasksData = (name, description) => {
    const tasks = new Tasks(name, description);
    tasks.showTask();
    messageSaveTasks();
}