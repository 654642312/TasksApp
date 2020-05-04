document.addEventListener('click', (e) => {
   if(e.target.classList.value == 'btn btn-danger'){
       e.target.parentElement.remove();
       count--;
       bannerTasks();
       messageDeleteTask();
   }
})