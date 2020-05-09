let tasks = [];
const validationTask = task => {
    if(tasks == ''){
       tasks.push(task);
       return true;
    }else{
        for(i in tasks){
            if(tasks[i] == task){
                alertMessage('bg-warning','this task already exists');
                return false;
            }
            else{
                storageTask(task);
                return true;
            }
        }
    }
}
const storageTask = task =>{
    tasks.push(task);
    console.log(tasks);
}