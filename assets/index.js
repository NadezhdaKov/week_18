// в localStorage нужно сохранить: общую сущность списак задач и внутри него: состояние чекбокса (нажать или нет) и ьексь самой задачи
// массив обектов с какими-то полями: 
//при старте приложения обращаться к локалсториди и проверять есть ли там массив задач, если он есть то пустой или не пустой
//если его нет или он пустой, о отбражать уведомление
//если массива задач нет, то его нужно создать
//кнопка очистить список должна будет перелаписывать массив в локарсторидж на пустой массив

//при надатии на кнопку задачь должно происходить:
//перезаписывать локалСторидж = добавить новую задачу
//изменить отображение задачь,чтобы под инпутом появилась новая задача
//около каждой задачи чекбокс и практически на каждое действие обновляем локалсторидж

const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('.taskList');
const clearTaskListBtn = document.querySelector('#clearTaskList');



addButton.addEventListener('click', function addTask() {
    const taskArr = JSON.parse(localStorage.getItem('taskText'));

    //при клике
    if (!taskList.value) {
        document.querySelector('.alert').innerText=('Запишите хотя бы одну задачу'); //если в input ничего нет, то выводим сообщение о ошибке
    }

    if (taskInput.value) {
        const taskArr = JSON.parse(localStorage.getItem('taskText'));
        //localStorage.setItem('taskText',JSON.stringify(taskArr));

        if (taskArr) {
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
    }
}
);

clearTaskListBtn.addEventListener('click', function clearTaskList() {//удаляем все созданные дочерние элементы div
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.setItem('taskText',JSON.stringify([]));//очищаем данные массива

    clearTaskListBtn.setAttribute('disabled','true');//кнопка снова становится неактивной
});