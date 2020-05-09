let message = document.getElementById('message');
const alertMessage = (cssClass, alert) => {
    message.innerHTML = `
    <div class="${cssClass} p-2 mt-2">
        <p class="text-dark">${alert}</p>
    </div>
    `
    setTimeout(() => {message.innerHTML = ' '}, 1500);
}