const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('.taskList');
const clearTaskListBtn = document.querySelector('#clearTaskList');

addButton.addEventListener('click', function addTask() {

    if (!taskList.value) {
        document.querySelector('.alert').innerText=('Запишите хотя бы одну задачу'); //если в input ничего нет, то выводим сообщение о ошибке
    }

    if (taskInput.value) {//есди в инпут что-то есть
        const taskArr = JSON.parse(localStorage.getItem('taskText'));

        taskArr.push(taskInput.value);//добавляем значения в массив
        localStorage.setItem('taskText',JSON.stringify(taskArr));//записываем в localStorage

        const newTaskChekbox = document.createElement('input');//создаем новый input
        newTaskChekbox.type = 'checkbox';//тип нового input
            
        const newTaskLabel = document.createElement('label');//label к input зда жальнейшей записи в него значений массив
        newTaskLabel.textContent = taskArr.pop();//записываем в lebel последнее введенное в input значение

        const linrBreak = document.createElement('br');//перенос после каждой новой задачи

        //довабляем элементы на страницу:
        taskList.appendChild(newTaskChekbox);
        taskList.appendChild(newTaskLabel);
        taskList.appendChild(linrBreak);

        clearTaskListBtn.removeAttribute('disabled');//делаем кнопку очистки списка доступной
        document.querySelector('.alert').innerText=('');//убираем сообщение об ошибке
    }

    taskInput.value = '';//очищаем поля ввода
});

clearTaskListBtn.addEventListener('click', function clearTaskList() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);//удаляем все созданные дочерние элементы div
    }
    localStorage.setItem('taskText',JSON.stringify([]));//очищаем данные массива

    clearTaskListBtn.setAttribute('disabled','true');//кнопка снова становится неактивной
});