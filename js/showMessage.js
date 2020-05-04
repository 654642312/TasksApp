let message = document.getElementById('message');

const messageSaveTasks = () => {
    message.innerHTML = `
        <div class=" bg-success p-2">
            <p class="text-light">save successfully</p>
        </div>
    `
    setTimeout(() => {message.innerHTML = ' '}, 1500);
}

const messageDeleteTask = () =>{
    message.innerHTML = `
        <div class="bg-danger p-2">
            <p class="text-light">Delete successfully</p>
        </div>
    `
    setTimeout(() => {message.innerHTML = ' '}, 1500);
}
