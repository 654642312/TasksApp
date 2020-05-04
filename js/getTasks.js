class Tasks{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    showTask(){
        let task = document.getElementById('Tasks')
        task.innerHTML += `
        <div class="card p-5 mt-3">
            <p> Task: ${this.name}</p>
            <p> Description: ${this.description}</p>
            <button class="btn btn-danger">
                Delete
            </button>
        </div>`
        count++;
        bannerTasks()
    }
}

let form = document.getElementById('Form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(form);

    name = data.get('name');
    description = data.get('description');

    const tasks = new Tasks(name, description);
    tasks.showTask();
});