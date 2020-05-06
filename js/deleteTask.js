document.addEventListener('click', (e) => {
   if(e.target.classList.value == 'btn btn-danger'){
       e.target.parentElement.parentElement.remove();
       count--;
       bannerTasks();
       messageDeleteTask();
   }
})