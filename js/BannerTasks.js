let count = 0;
const bannerTasks = () => {
    document.getElementById('banner').innerHTML = `
    <h1 class="text-light">Task App ${count}</h1>
`
}
bannerTasks();