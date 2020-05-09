const validationForm = e => {

    e.preventDefault();
    let form = document.getElementById('Form')
    let data = new FormData(form);
    name = data.get('name');
    description = data.get('description');

    if(/^\s*$/.test(name) && /^\s*$/.test(description)){
        messageError('Complete all fields');
    }else if(validationTask(name)){
        showTasksData(name, description);
    }
}